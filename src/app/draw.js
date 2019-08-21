import {
    heroMovement1,
    heroMovement2,
    heroMovement3,
    heroMovement4,
    heroStatic1,
    heroStatic2
} from "../assets/hero";
import {
    characterToMatrix,
    getFrame,
    invertCharacterMatrix
} from "./functionality";
import { getActiveInputs } from "./input";
import { PIXEL_SIZE } from "./constants";
import { state } from "./state";

const heroStatic = [
    characterToMatrix(heroStatic1),
    characterToMatrix(heroStatic2)
];

const heroMovement = [
    characterToMatrix(heroMovement1),
    characterToMatrix(heroMovement2),
    characterToMatrix(heroMovement3),
    characterToMatrix(heroMovement4)
];

const heroMovementOpposite = invertCharacterMatrix(heroMovement);

const draw = () => {
    const { context, x, y, width, height } = state;
    const { RIGHT, LEFT } = getActiveInputs();
    const lateral = RIGHT || LEFT;
    const actualHero = lateral
        ? RIGHT
            ? heroMovement
            : heroMovementOpposite
        : heroStatic;

    context.clearRect(0, 0, width, height);
    context.fillStyle = "green";

    actualHero[getFrame(lateral ? 4 : 2)].forEach((row, rowIndex) => {
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
