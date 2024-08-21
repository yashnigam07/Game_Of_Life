import React, { useState, useEffect } from 'react';

const rows = 25;
const cols = 25;

const createGrid = () => Array.from({ length: rows }, () => Array(cols).fill(false));

const App = () => {
  const [grid, setGrid] = useState(createGrid());
  const [isRunning, setIsRunning] = useState(false);
  const [prevGrid, setPrevGrid] = useState(createGrid());

  const toggleCellState = (row, col) => {
    setGrid((prevGrid) =>
      prevGrid.map((r, rowIndex) =>
        r.map((cell, colIndex) => (rowIndex === row && colIndex === col ? !cell : cell))
      )
    );
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setPrevGrid(grid);
      setGrid((g) => g.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const neighbors = [
            [0, 1], [0, -1], [1, 0], [-1, 0],
            [1, 1], [1, -1], [-1, 1], [-1, -1],
          ].reduce((acc, [dx, dy]) => {
            const x = rowIndex + dx;
            const y = colIndex + dy;
            return acc + (x >= 0 && x < rows && y >= 0 && y < cols && g[x][y] ? 1 : 0);
          }, 0);

          if (cell) return neighbors === 2 || neighbors === 3;
          return neighbors === 3;
        })
      ));
    }, 400);

    return () => clearInterval(interval);
  }, [isRunning, grid]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="grid-wrapper">
        <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 20px)` }}>
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const wasAlive = prevGrid[rowIndex][colIndex];
              const isAlive = cell;
              const animationClass = !wasAlive && isAlive
                ? 'fade-in'
                : wasAlive && !isAlive
                ? 'fade-out'
                : isAlive
                ? 'pulse'
                : '';

              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => toggleCellState(rowIndex, colIndex)}
                  className={`w-6 h-6 ${
                    isAlive ? 'bg-blue-500' : 'bg-gray-700'
                  } cursor-pointer transition-transform duration-300 transform hover:scale-110 ${animationClass}`}
                ></div>
              );
            })
          )}
        </div>
      </div>
      <div className="space-x-4 mt-4">
        <button
          onClick={() => setIsRunning((prev) => !prev)}
          className={`px-6 py-2 rounded-lg text-white ${
            isRunning ? 'bg-red-500' : 'bg-green-500'
          }`}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={() => {
            const newGrid = createGrid();
            setGrid(newGrid);
            setPrevGrid(newGrid);
          }}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
