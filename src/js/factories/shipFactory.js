export default function shipFactory(name, size) {
    let axis = 'horizontal';
    let coords;
    const ruin = [];

    return {
        name,
        size,
        maneuver: () => {
            axis = (axis === 'horizontal') ? 'vertical' : 'horizontal';
        },
        getAxis: () => axis,
        setCoords: (array) => {
            if (array.length === size) coords = array;
        },
        getCoords: () => coords,
        hit: (string) => {
            ruin.push(string);
        },
        hitsRecieved: () => ruin,
        isSunk: () => (ruin.length === size),
    };
}
