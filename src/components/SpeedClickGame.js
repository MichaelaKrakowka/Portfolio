import React from "react";
import "./SpeedClickGame.css";

const INTERVAL = 50;

export const SpeedClickGame = ({ time }) => {
  const [points, setPoints] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(time);
  const [currentStart, setCurrentStart] = React.useState(time);
  const [isGameOver, setIsGameOver] = React.useState(false);

  React.useEffect(() => {
    if (isGameOver) return;
    const intervalId = setInterval(() => {
      setTimeLeft((previousTime) => {
        const newTime = previousTime - INTERVAL;
        if (newTime <= 0) {
          setIsGameOver(true);
          return 0; /* už to nepůjde do mínusových hodnot*/
        }
        return newTime;
      });
    }, INTERVAL);

    return () => clearInterval(intervalId);
  }, [isGameOver]);

  const handleClick = () => {
    if (isGameOver) return;

    setPoints((previousPoints) => previousPoints + 1);

    setCurrentStart((previousStart) => {
      const shorterStart = Math.max(INTERVAL, previousStart - INTERVAL);
      setTimeLeft(shorterStart);
      return shorterStart;
    });
  };

  const handleRestart = () => {
    setPoints(0);
    setCurrentStart(time);
    setTimeLeft(time);
    setIsGameOver(false);
  };

  return (
    <div className="game_content">
      <h2 className="headings">Hra pro odlehčení</h2>

      <p>
        {" "}
        Mezitím než se rozhodnete, zda Vám moje portfolio sedí, připravila jsem
        malý bonus v podobě klikací hry. Zabere Vám sotva půl minuty. Weby totiž
        nemusí být jen o prohlížení :).{" "}
      </p>
      <p> Tak kolik z Vás mě překoná? Já jsem zvládla nejvíce 37 bodů. </p>

      <div className="game">
        <h3 className="game_heading">Zbývající čas: {timeLeft} ms</h3>
        <h4 className="game_heading">Body: {points}</h4>

        <button
          onClick={handleClick}
          disabled={isGameOver}
          className="click_btn">
          Překonáš mě?
        </button>

        {isGameOver && (
          <div>
            <button onClick={handleRestart} className="restart_btn">
              Restartovat
            </button>
          </div>
        )}

        <p>Start: {currentStart} ms zkracuje se o 50 ms po každém kliknutí</p>
      </div>
    </div>
  );
};
