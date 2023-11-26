import logo from './logo.svg';
import './App.css';
import Grid from './components/grid';
import { useState } from 'react';

const grids = [
  {
    id: 0,
    value: false
  },
  {
    id: 1,
    value: false
  },
  {
    id: 2,
    value: false
  },
  {
    id: 3,
    value: false
  },
  {
    id: 4,
    value: false
  },
  {
    id: 5,
    value: false
  },
  {
    id: 6,
    value: false
  },
  {
    id: 7,
    value: false
  },
  {
    id: 8,
    value: false
  }
];

function App() {
  const [newGrid, setnewGrid] = useState(grids);

  function setEachGrid(id, val) {
    const newGrid = grids.map(grid => {
      if (grid.id === id) {
        grid.value = val;
      }

      return grid;
    });

    setnewGrid(newGrid);
  }

  function displayGrid(grids) {
    return grids.map(grid => {
      return (
        <Grid key={grid.id} id={grid.id} gridChecked={grid.value} setEachGrid={setEachGrid} />
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
