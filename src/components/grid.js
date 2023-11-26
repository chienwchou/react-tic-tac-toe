import './grid.css';

function Grid(props) {
    return (
        <div id={'grid-' + props.id} className="col" onClick={() => props.setEachGrid(props.id, true)}>
            {props.gridChecked ? 'yes' : 'no'}
        </div>
    );
}

export default Grid;