import { getActiveInputs } from "./input";
import { SPEED } from "./constants";
import { state, setState } from "./state";

const update = dt => {
    const { UP, RIGHT, LEFT } = getActiveInputs();

    if (UP) {
        setState({ y: state.y + SPEED * dt });
    }
    if (RIGHT || LEFT) {
        setState({ x: state.x + SPEED * dt * (RIGHT ? 1 : -1) });
    }
};

export default update;
