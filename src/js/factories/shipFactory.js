export default function shipFactory(name, loa) {
    // loa means length overall
    let axis = 'horizontal';
    let coords;
    const ruin = [];

    return {
        name,
        loa,
        maneuver: () => {
            axis = (axis === 'horizontal') ? 'vertical' : 'horizontal';
        },
        getAxis: () => axis,
        setCoords: (array) => {
            if (array.length === loa) coords = array;
        },
        getCoords: () => coords,
        hit: (string) => {
            ruin.push(string);
        },
        hitsRecieved: () => ruin,
        isSunk: () => (ruin.length === loa),
    };
}
