import { KEYBOARD_INPUT } from "./constants";
import { removeDuplicated } from "./functionality";
import { state, setState } from "./state";

const removeKey = keyCode => {
    setState({
        activeKeys: state.activeKeys.filter(elem => elem !== keyCode)
    });
};

export const isKeyControlled = keyCode =>
    Object.values(KEYBOARD_INPUT).includes(keyCode);

export const getActiveInputs = () => {
    return Object.entries(KEYBOARD_INPUT).reduce(
        (activeNames, [key, value]) => {
            if (state.activeKeys.includes(value)) {
                activeNames[key] = true;
            }
            return activeNames;
        },
        {}
    );
};

export const createEventListeners = () => {
    document.addEventListener("keydown", ({ keyCode, repeat }) => {
        if (isKeyControlled(keyCode)) {
            setState({
                activeKeys: removeDuplicated([...state.activeKeys, keyCode])
            });

            if (keyCode === KEYBOARD_INPUT.UP && repeat) {
                removeKey(keyCode);
            }
        }
    });

    document.addEventListener("keyup", ({ keyCode }) => {
        if (isKeyControlled(keyCode)) {
            removeKey(keyCode);
        }
    });
};
