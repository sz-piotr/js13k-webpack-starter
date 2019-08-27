import { KEYBOARD_INPUT } from "./constants";
import { removeDuplicated } from "./functionality";
import { getState, setState } from "./state";

const removeKey = keyCode => {
    setState({
        activeKeys: getState().activeKeys.filter(elem => elem !== keyCode)
    });
};

export const isKeyControlled = keyCode =>
    Object.values(KEYBOARD_INPUT).includes(keyCode);

export const getActiveInputs = () => {
    const state = getState();
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
        const state = getState();

        if (isKeyControlled(keyCode)) {
            setState({
                activeKeys: removeDuplicated([...state.activeKeys, keyCode])
            });
        }
    });

    document.addEventListener("keyup", ({ keyCode }) => {
        if (isKeyControlled(keyCode)) {
            removeKey(keyCode);
        }
    });
};
