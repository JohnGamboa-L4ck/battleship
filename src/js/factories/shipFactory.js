export default function shipFactory(name, size) {
    let axis = 'horizontal';
    let coords;
    const ruin = [];

    if (size <= 3) axis = 'vertical';

    return {
        name,
        size,
        maneuver: () => {
            axis = (axis === 'horizontal') ? 'vertical' : 'horizontal';
        },
        getAxis: () => axis,
        setCoords: (array) => {
            if (array.length === size) {
                coords = array;
                return true;
            }
            return false;
        },
        getCoords: () => coords,
        hit: (string) => {
            ruin.push(string);
        },
        hitsRecieved: () => ruin,
        isSunk: () => (ruin.length === size),
    };
}
