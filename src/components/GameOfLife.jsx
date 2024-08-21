import React, { useState, useEffect } from 'react';

const rows = 25;
const cols = 25;

const createGrid = () => {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    grid.push(Array(cols).fill(false));
  }
  return grid;
};

const GameOfLife = () => {
  const [grid, setGrid] = useState(createGrid());

  const toggleCellState = (row, col) => {
    const newGrid = [...grid];
    newGrid[row][col] = !newGrid[row][col];
    setGrid(newGrid);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 20px)` }}>
        {grid.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => toggleCellState(rowIndex, colIndex)}
              className={`w-5 h-5 ${
                grid[rowIndex][colIndex] ? 'bg-green-500' : 'bg-gray-700'
              } cursor-pointer transition-all duration-300`}
            ></div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameOfLife;
