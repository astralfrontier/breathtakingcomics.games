import { useCallback, useState } from "react";
import { randomElement } from "@/traits";

interface DriveState {
  name: string;
  statusIsGreen: boolean;
  struck: boolean;
  excuse: string;
}

const DRIVES = [
  "Bus Full of Civilians",
  "Fractured Dam",
  "Rampaging Monster",
  "Building on Fire",
  "Collapsing Bridge",
  "Invading Aliens",
  "Trapped Scientists",
];

const INITIAL_EXCUSE = "New scene";
const EXCUSES = [
  "Sudden reversal of fortune",
  "Cybernetic penguins got involved",
  "Civilian tried to be brave",
  "Solar flares",
  "Hero and villain powers synergized somehow",
];

function randomUnusedElement(
  elements: string[],
  currentElement: string
): string {
  return randomElement(elements.filter((element) => element != currentElement));
}

function DriveTool() {
  const [driveState, setDriveState] = useState<DriveState>({
    name: randomUnusedElement(DRIVES, ""),
    statusIsGreen: false,
    struck: false,
    excuse: INITIAL_EXCUSE,
  });

  const setRed = useCallback(
    () =>
      setDriveState((driveState) => ({
        ...driveState,
        statusIsGreen: false,
        excuse: randomUnusedElement(EXCUSES, driveState.excuse),
      })),
    []
  );
  const setGreen = useCallback(
    () =>
      setDriveState((driveState) => ({
        ...driveState,
        statusIsGreen: true,
        excuse: randomUnusedElement(EXCUSES, driveState.excuse),
      })),
    []
  );
  const strikeDrive = useCallback(
    () =>
      setDriveState((driveState) => ({
        ...driveState,
        struck: true,
      })),
    []
  );
  const resetDrive = useCallback(
    () =>
      setDriveState((driveState) => ({
        name: randomUnusedElement(DRIVES, driveState.name),
        statusIsGreen: false,
        struck: false,
        excuse: INITIAL_EXCUSE,
      })),
    []
  );

  return (
    <article>
      <p>
        {driveState.statusIsGreen ? (
          <>GREEN (&#x1F7E2;)</>
        ) : (
          <>RED (&#x1F534;)</>
        )}{" "}
        <strong>
          {driveState.struck ? <del>{driveState.name}</del> : driveState.name}
        </strong>
        <br />
        <small>Current status: {driveState.excuse}</small>
      </p>
      <p>
        <button
          onClick={setRed}
          disabled={!driveState.statusIsGreen || driveState.struck}
        >
          Flip Red
        </button>{" "}
        <button
          onClick={setGreen}
          disabled={driveState.statusIsGreen || driveState.struck}
        >
          Flip Green
        </button>{" "}
        <button onClick={strikeDrive} disabled={driveState.struck}>
          Strike
        </button>{" "}
        <button className="secondary" onClick={resetDrive}>
          Reset
        </button>
      </p>
    </article>
  );
}

export default DriveTool;
