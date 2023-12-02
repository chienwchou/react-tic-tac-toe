import './grid.css';

function Grid({ key, grid, ...props }) {
    let pickedClass = '';
    if (grid.assigned) {
        pickedClass = grid.assigned === "1" ? " player-1-picked" : " player-2-picked"
    }

    return (
        <div id={'grid-' + grid.id} className={"col" + (pickedClass)} onClick={() => props.setEachGrid(grid.id, true)}>
        </div>
    );
}

export default Grid;