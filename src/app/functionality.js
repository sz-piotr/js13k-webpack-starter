export const characterToMatrix = string =>
    string
        .split("\n")
        .filter(elem => elem !== "")
        .map(stringRow => [...stringRow].map(elem => (elem === "M" ? 1 : 0)));

export const removeDuplicated = array => {
    return [...new Set(array)];
};

export const getFrame = frames =>
    Math.floor(new Date().getMilliseconds() / (1000 / frames));

export const invertCharacterMatrix = animation =>
    animation.map(matrix => matrix.map(array => [...array].reverse()));
