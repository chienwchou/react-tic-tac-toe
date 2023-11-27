import './grid.css';

function Grid(props) {
    let pickedClass = '';
    if (props.playerAssigned) {
        pickedClass = props.playerAssigned === "1" ? " player-1-picked" : " player-2-picked"
    }

    return (
        <div id={'grid-' + props.id} className={"col" + (pickedClass)} onClick={() => props.setEachGrid(props.id, true)}>
        </div>
    );
}

export default Grid;