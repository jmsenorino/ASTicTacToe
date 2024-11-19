import { useState, useEffect } from "react";
import Grid from "./_grid";

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [positions, setPositions] = useState(['', '', '', '', '', '', '', '', '']);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    for (let line of winningLines) {
      const [a, b, c] = line;
      // Que haya algo en position[a], que sea igual a position[b] y que sea igual a position[c]
      if (positions[a] && positions[a] === positions[b] && positions[a] === positions[c]) {
        setWinner(positions[a]);
        return;
      }
    }
    setWinner(null);
  }, [positions]);

  const restartGame = () => {
    setPositions(Array(9).fill(null));
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      {winner ? (
        <div>
          <h2>Winner: {winner}</h2>
          <button onClick={restartGame}>Restart</button>
        </div>
      ) : (
      <div className="flex flex-col align-middle">
        <h1 className={"text-4xl font-bold text-center"}>Tic Tac Toe</h1>
        <Grid positions={positions} setPositions={setPositions}/>
      </div>
      )}

    </main>
  );
}
