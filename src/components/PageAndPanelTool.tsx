import { useCallback, useEffect, useState } from "react";
import { randomElement } from "@/traits";

interface Panel {
  text: React.ReactNode,
  isPage: boolean;
}

const PLAYER_ACTIONS = [
  "hems and haws",
  "diverts attention",
  "uses a gadget",
  "slings a web",
  "leaps a tall building",
  "amazes and astounds",
  "saves a civilian",
  "aura farms",
  "punches a bad guy",
  "bounces bullets",
  "emerges from the shadows",
  "moves fast",
  "recoils in shock"
]

function createEmptyPanelStack(panelsPerPage: number): Panel[] {
  const newStack: Panel[] = [];
  for (let i = 0; i < panelsPerPage; i++) {
    newStack.push({
      text: "(empty panel)",
      isPage: false
    })
  }
  newStack.push({
    text: "Next Page!",
    isPage: true
  });
  return newStack;
}

function playerAction(playerIndex: number) {
  return <>
    <strong>Hero {playerIndex+1}</strong><br />{randomElement(PLAYER_ACTIONS)}
  </>
}

function PageAndPanelTool() {
  const [playersActed, setPlayersActed] = useState<boolean[]>([false, false, false]);
  const [currentPanel, setCurrentPanel] = useState<number>(0);
  const [panelsPerPage, setPanelsPerPage] = useState<number>(6);
  const [panelStack, setPanelStack] = useState<Panel[]>([]);

  // Reset current panel when player or p/p count changes
  useEffect(() => {
    // Reset the current panel stack to include a whole page
    setPanelStack(createEmptyPanelStack(panelsPerPage));
    setCurrentPanel(0);
  }, [playersActed.length, panelsPerPage]);

  const playerActsCallback = (idx: number) => () => {
    setPanelStack(panelStack => {
      const nps = [...panelStack];
      nps.splice(currentPanel, 1, {
        text: playerAction(idx),
        isPage: nps[currentPanel].isPage
      });
      if (currentPanel == panelsPerPage - 1) {
        nps.splice(-1, 1, {
          text: 'Reduce Trait Dice! Flip/Strike Drives Now!',
          isPage: true
        })
      }
      return nps;
    });
    setCurrentPanel(currentPanel => currentPanel + 1);
    setPlayersActed(playersActed => {
      const npe = [...playersActed];
      npe.splice(idx, 1, true);
      // If everyone acted, reset
      if (npe.every(didPlayerAct => didPlayerAct)) {
        return npe.map(_ => false);
      }
      return npe;
    });
  }

  const nextPageCallback = useCallback(
    () => {
      setPanelStack(createEmptyPanelStack(panelsPerPage));
      setCurrentPanel(0);
    },
    [setPanelStack, setCurrentPanel, panelsPerPage]
  )

  const removePlayerCallback = useCallback(
    () => setPlayersActed(playersActed => {
      const npa = playersActed.map(_ => false);
      npa.pop();
      return npa;
    }),
    [playersActed, setPlayersActed]
  )

  const addPlayerCallback = useCallback(
    () => setPlayersActed(playersActed => {
      const npa = playersActed.map(_ => false);
      npa.push(false);
      return npa;
    }),
    [playersActed, setPlayersActed]
  )

  return (
    <article>
      <p>
        Click a Player button to take action. Click + or - to change player count.
      </p>
      <p className={'pnpgrid'}>
        <div>
          <button onClick={removePlayerCallback} disabled={playersActed.length < 2}>-</button>{' '}
          {currentPanel < panelsPerPage && playersActed.map((didPlayerAct, i) => 
            <>
              <button onClick={playerActsCallback(i)} disabled={didPlayerAct}>
                Hero {i+1}
              </button>{' '}
            </>
          )}
          {currentPanel == panelsPerPage &&
            <>
              <button onClick={nextPageCallback}>Next Page</button>{' '}
            </>
          }
          <button onClick={addPlayerCallback}>+</button>{' '}
        </div>
        <div>
          <input
            type="range" min="4" max="8" step="1" aria-describedby="panelsPerPage"
            onChange={(e) => setPanelsPerPage(parseInt(e.target.value))}
          />
          <small id="panelsPerPage">Panels per page: {panelsPerPage}</small>
        </div>
      </p>
      <div className="grid">
        {panelStack.map((panel, i) => 
          <div className={panel.isPage ? 'pnppage' : 'pnppanel'}>
            {panel.text}{i == currentPanel ? ' *' : ''}
          </div>
        )}
      </div>
    </article>
  );
}

export default PageAndPanelTool;
