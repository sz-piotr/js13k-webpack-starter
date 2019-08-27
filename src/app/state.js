let state = {
    activeKeys: [],
    time: 0,
    x: 150,
    y: 150
};

export const setState = newState => {
    if (typeof newState !== "object" || Array.isArray(newState)) {
        console.trace(newState);
        throw new Error("State needs to be an object");
    }

    state = { ...state, ...newState };
    return state;
};

export const getState = () => ({
    ...state
});
