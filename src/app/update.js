import { getActiveInputs } from "./input";
import { SPEED, GRAVITY, CHARACTER_SIZE } from "./constants";
import { getState, setState } from "./state";

const update = dt => {
    const state = getState();
    const { UP, RIGHT, LEFT, DOWN } = getActiveInputs();

    const gravityY = state.y + GRAVITY;
    const maxY = state.height - CHARACTER_SIZE;
    const downMovement = DOWN ? SPEED * 1.5 * dt : 0;
    const newState = {
        y: gravityY > maxY ? maxY : gravityY + downMovement,
        x: RIGHT || LEFT ? state.x + SPEED * dt * (RIGHT ? 1 : -1) : state.x
    };

    if (UP && newState.y === maxY) {
        newState.y = newState.y - SPEED * dt * 25;
    }

    setState(newState);
};

export default update;
