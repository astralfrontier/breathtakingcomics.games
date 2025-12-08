import { useCallback, useState } from "react";
import { randomElement } from "../traits";

interface DriveState {
  statusIsGreen: boolean;
  struck: boolean;
  excuse: string;
}

const DRIVE_TEXT = "Bus Full of Civilians";

const INITIAL_EXCUSE = "New scene";
const EXCUSES = [
  "Sudden reversal of fortune",
  "Cybernetic penguins got involved",
  "Civilian tried to be brave",
  "Solar flares",
  "Hero and villain powers synergized somehow",
];

function remainingExcuses(excuse: string): string[] {
  return EXCUSES.filter((item) => item != excuse);
}

function DriveTool() {
  const [driveState, setDriveState] = useState<DriveState>({
    statusIsGreen: false,
    struck: false,
    excuse: INITIAL_EXCUSE,
  });

  const setRed = useCallback(
    () =>
      setDriveState((driveState) => ({
        ...driveState,
        statusIsGreen: false,
        excuse: randomElement(remainingExcuses(driveState.excuse)),
      })),
    []
  );
  const setGreen = useCallback(
    () =>
      setDriveState((driveState) => ({
        ...driveState,
        statusIsGreen: true,
        excuse: randomElement(remainingExcuses(driveState.excuse)),
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
      setDriveState(() => ({
        statusIsGreen: false,
        struck: false,
        excuse: INITIAL_EXCUSE,
      })),
    []
  );

  return (
    <article>
      <p>
        {driveState.statusIsGreen ? <>&#x1F7E2;</> : <>&#x1F534;</>}
        <strong>
          {driveState.struck ? <del>{DRIVE_TEXT}</del> : DRIVE_TEXT}
        </strong>
        <br />
        <small>Current status: {driveState.excuse}</small>
      </p>
      <div className={"grid"}>
        <div>
          <button
            onClick={setRed}
            disabled={!driveState.statusIsGreen || driveState.struck}
          >
            Flip to Red
          </button>
          <button
            onClick={setGreen}
            disabled={driveState.statusIsGreen || driveState.struck}
          >
            Flip to Green
          </button>
          <button onClick={strikeDrive} disabled={driveState.struck}>
            Strike Drive
          </button>
          <button className="secondary" onClick={resetDrive}>
            Reset
          </button>
        </div>
      </div>
    </article>
  );
}

export default DriveTool;
