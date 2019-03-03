import {SIZE} from "./constants";

function rand(min: number, max: number, reduce: number = SIZE): number {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num - (num % reduce);
}

function snap(num: number, point = SIZE): number {
    let bottom = num - num % point;
    let top = bottom + point;

    return num - bottom <= top - num ? bottom : top;
}

function removeNode(el: Element): void {
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
}

function bound(num: number, min: number, max: number): number {
    return Math.max(Math.min(num, max), min);
}


export default {
    rand,
    snap,
    removeNode,
    bound,
};
