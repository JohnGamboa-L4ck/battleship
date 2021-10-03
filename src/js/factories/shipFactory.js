export default function shipFactory(name, loa) {
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
            coords = array;
        },
        getCoords: () => coords,
        hit: (string) => {
            ruin.push(string);
        },
        hitsRecieved: () => ruin,
        isSunk: () => (coords.length === ruin.length),
    };
}
