import './grid.css';

function Grid(props) {
    return (
        <div id={props.id} className="col">
            {props.gridChecked ? 'yes' : 'no'}
        </div>
    );
}

export default Grid;