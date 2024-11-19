import { useEffect, useState } from 'react';
import Square from './_square';

export default function Grid({positions, setPositions}){
  const [turn, setTurn] = useState("X");

  const setPosition = (index) => {
    if (!positions[index]) {
      const newPositions = [...positions];
      newPositions[index] = turn;
      setPositions(newPositions);
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  console.log('positions', positions)


  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-2`}>
      <h1>Turno de {turn}</h1>
      <div className={"grid grid-cols-3 gap-4"} id={"grid"}>
        {positions.map((value, index) => (
          <Square key={index} value={value} onClick={() => setPosition(index)} />
        ))}
      </div>
    </div>
  );
}