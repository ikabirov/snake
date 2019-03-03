let data: { [location: string]: boolean } = {};

function set(x: number, y: number): void {
    data[`${x}:${y}`] = true;
}

function remove(x: number, y: number): void {
    delete data[`${x}:${y}`];
}

function has(x: number, y: number): boolean {
    return data[`${x}:${y}`] === true;
}


export default {
    set,
    remove,
    has,
};
