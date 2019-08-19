const createCanvas = selector => {
    const canvas = document.querySelector(selector);
    const context = canvas.getContext("2d");

    const { offsetWidth: width, offsetHeight: height } = canvas;

    return {
        canvas,
        context,
        height,
        width
    };
};

export default createCanvas;
