import logo from './logo.svg';
import './App.css';
import Grid from './components/grid';

const grids = [
  {
    id: 0,
    value: true
  },
  {
    id: 1,
    value: true
  },
  {
    id: 2,
    value: true
  },
  {
    id: 3,
    value: true
  },
  {
    id: 4,
    value: true
  },
  {
    id: 5,
    value: true
  },
  {
    id: 6,
    value: true
  },
  {
    id: 7,
    value: true
  },
  {
    id: 8,
    value: false
  }
]

function displayGrid(grids) {
  return grids.map(grid => {
    return (
      <Grid id={grid.id} gridChecked={grid.value} />
    )
  });
}

function App() {
  return (
    <div className="App">
      <div className="row">
        {displayGrid(grids)}
      </div>
    </div>
  );
}

export default App;
