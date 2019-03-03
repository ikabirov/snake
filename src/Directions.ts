import {keys} from "./constants";

let queue: number[] = [];
let current: number = keys.RIGHT;

const enum Direction {
    LEFT = "LEFT",
    UP = "UP",
    RIGHT = "RIGHT",
    DOWN = "DOWN",
}

function setDirection(key: number): void {
    queue.push(key);
}

function get(): number {
    return current;
}

function popDirection(): number {
    if (queue.length > 0) {
        current = queue.shift();
    }
    return get();
}

function flushDirection(): void {
    queue = [];
    current = keys.RIGHT;
}

function peekDirection(): number {
    return queue.length > 0 ? queue[queue.length - 1] : current;
}

export {
    Direction,
    setDirection,
    popDirection,
    flushDirection,
    peekDirection,
};
