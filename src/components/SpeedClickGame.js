import React from "react";
import "./SpeedClickGame.css";
import { RevealSection } from "./RevealSection";

export const SpeedClickGame = () => {
  const [points, setPoints] = React.useState(0);
  const [time, setTime] = React.useState(100);

  React.useEffect(() => {
    if (time === 0) return;
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 100);

    return () => clearInterval(timer);
  });

  const handleRestart = () => {
    setPoints(0);
    setTime(100);
  };

  return (
    <RevealSection>
      <div className="game_content">
        <h2 className="headings">Hra pro odlehčení</h2>

        <p className="fade_item delay_1">
          {" "}
          Mezitím než se rozhodnete, zda Vám moje portfolio sedí, připravila
          jsem malý bonus v podobě klikací hry.
        </p>
        <p className="fade_item delay_1">
          {" "}
          Tak kolik z Vás mě překoná? Já jsem zvládla nejvíce 37 bodů.{" "}
        </p>

        <div className="game fade_item delay_2">
          <h3 className="game_heading">Zbývající čas: {time} ms</h3>
          <h4 className="game_heading">Body: {points}</h4>

          <div className="ttt_grid"></div>

          <div>
            <button onClick={handleRestart} className="restart_btn">
              Restartovat
            </button>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};
