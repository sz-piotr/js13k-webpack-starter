export const characterToArray = string =>
    string
        .split("\n")
        .filter(elem => elem !== "")
        .map(stringRow => [...stringRow].map(elem => Number(elem)));

export const removeDuplicated = array => {
    return [...new Set(array)];
};
