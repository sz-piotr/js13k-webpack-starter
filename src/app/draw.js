import {
    heroMovement1,
    heroMovement2,
    heroStatic1,
    heroStatic2
} from "../assets/hero";
import { characterToArray } from "./functionality";
import { getActiveInputs } from "./input";
import { PIXEL_SIZE } from "./constants";
import { state } from "./state";

const heroStatic = [
    characterToArray(heroStatic1),
    characterToArray(heroStatic2)
];

const heroMovement = [
    characterToArray(heroMovement1),
    characterToArray(heroMovement2)
];

const draw = () => {
    const { context, x, y, width, height } = state;
    const { LEFT } = getActiveInputs();
    const movementSwitch = Number(new Date().getMilliseconds() > 500);
    const actualHero = LEFT ? heroMovement : heroStatic;

    context.clearRect(0, 0, width, height);
    context.fillStyle = "green";

    actualHero[movementSwitch].forEach((row, rowIndex) => {
        row.forEach((dot, dotIndex) => {
            if (dot) {
                context.fillRect(
                    x + PIXEL_SIZE * dotIndex,
                    y + PIXEL_SIZE * rowIndex,
                    PIXEL_SIZE,
                    PIXEL_SIZE
                );
            }
        });
    });
};

export default draw;
