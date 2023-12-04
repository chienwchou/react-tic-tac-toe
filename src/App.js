import './App.css';
import Grid from './components/grid';
import { useState } from 'react';

const defaultGrids = [
  {
    id: 0,
    value: false,
    assigned: null
  },
  {
    id: 1,
    value: false,
    assigned: null
  },
  {
    id: 2,
    value: false,
    assigned: null
  },
  {
    id: 3,
    value: false,
    assigned: null
  },
  {
    id: 4,
    value: false,
    assigned: null
  },
  {
    id: 5,
    value: false,
    assigned: null
  },
  {
    id: 6,
    value: false,
    assigned: null
  },
  {
    id: 7,
    value: false,
    assigned: null
  },
  {
    id: 8,
    value: false,
    assigned: null
  }
];

const player1 = '1';
const player2 = '2';

function calculateWinner(grids) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (grids[a].assigned && grids[a].assigned === grids[b].assigned && grids[a].assigned === grids[c].assigned) {
      return grids[a].assigned;
    }
  }
  return null;
}

function checkGameStatus(grids) {
  for (let grid of grids) {
    if (grid.assigned == null) {
      return false;
    }
  }

  return true;
}

function App() {
  const [newGrid, setnewGrid] = useState(defaultGrids);
  const [currentPlayer, setcurrentPlayer] = useState(player1);

  let gameOver = false;
  if (checkGameStatus(newGrid) || calculateWinner(newGrid)) {
    gameOver = true;
  }

  function setEachGrid(id, val) {
    if (gameOver) {
      return;
    }

    setnewGrid(newGrid => {
      const updatedGrid = newGrid.map(grid => {
        if (grid.id === id && grid.assigned === null) {
          grid.value = val;
          grid.assigned = currentPlayer;
        }

        return grid;
      });

      return updatedGrid;
    });

    setcurrentPlayer(currentPlayer => currentPlayer === player1 ? player2 : player1);
  }

  function displayGrid(grids) {
    return grids.map(grid => {
      return (
        <Grid key={grid.id} grid={grid} setEachGrid={setEachGrid} />
      )
    });
  }

  function resetGame() {
    setnewGrid(newGrid => {
      const resetGrid = newGrid.map(grid => {
        grid.assigned = null;
        return grid;
      });
      return resetGrid;
    });
  }

  return (
    <div className="App">
      <h1>React Tic Tac Toe</h1>
      <div>{gameOver ? 'Game Over' : ''}</div>
      <div className="row">
        {displayGrid(newGrid, gameOver)}
      </div>
      <div><button onClick={resetGame}>Reset</button></div>
    </div>
  );
}

export default App;
