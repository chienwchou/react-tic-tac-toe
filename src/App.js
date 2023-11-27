import logo from './logo.svg';
import './App.css';
import Grid from './components/grid';
import { useState } from 'react';

const grids = [
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

function App() {
  const [newGrid, setnewGrid] = useState(grids);
  const [currentPlayer, setcurrentPlayer] = useState(player1);

  function setEachGrid(id, val) {
    const newGrid = grids.map(grid => {
      if (grid.id === id) {
        grid.value = val;
        grid.assigned = currentPlayer;
      }

      return grid;
    });

    setnewGrid(newGrid);
    setcurrentPlayer(currentPlayer === player1 ? player2 : player1);
  }

  function displayGrid(grids) {
    return grids.map(grid => {
      return (
        <Grid key={grid.id} id={grid.id} gridChecked={grid.value} playerAssigned={grid.assigned} setEachGrid={setEachGrid} />
      )
    });
  }

  return (
    <div className="App">
      <div className="row">
        {displayGrid(newGrid)}
      </div>
    </div>
  );
}

export default App;
