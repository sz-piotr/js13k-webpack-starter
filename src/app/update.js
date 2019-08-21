import { getActiveInputs } from "./input";
import { SPEED, GRAVITY, CHARACTER_SIZE } from "./constants";
import { state, setState } from "./state";

const update = dt => {
    const { UP, RIGHT, LEFT, DOWN } = getActiveInputs();
    const gravityY = state.y + GRAVITY;
    const maxY = state.height - CHARACTER_SIZE;
    setState({ y: gravityY > maxY ? maxY : gravityY });

    if (UP || DOWN) {
        setState({ y: state.y + SPEED * 1.5 * dt * (UP ? -1 : 1) });
    }
    if (RIGHT || LEFT) {
        setState({ x: state.x + SPEED * dt * (RIGHT ? 1 : -1) });
    }
};

export default update;
