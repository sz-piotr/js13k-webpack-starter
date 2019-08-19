import { createEventListeners } from "./app/input";
import { setState, state } from "./app/state";
import createCanvas from "./app/canvas";
import draw from "./app/draw";
import update from "./app/update";

import "./styles/main.css";

const loop = time => {
    const dt = (time - state.time) / 1000;
    setState({ time });

    update(dt);
    draw();
    requestAnimationFrame(loop);
};

setState(createCanvas("#canvas"));
createEventListeners();
loop();
