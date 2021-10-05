import list, { yAxis } from '../gameData';
import shipFactory from './shipFactory';

export default function gameboardFactory(admiral) {
    const fleet = [];
    const missedAttacks = [];

    list.forEach((ship, index) => {
        fleet.push(shipFactory(list[index].name, list[index].loa));
    });

    // pvt === private
    const pvt = {
        generateCoords(axis, index, y, x) {
            let array = [];
            if (axis === 'horizontal') {
                for (let i = 0; i < (fleet[index].size); i += 1) {
                    if ((x + i) > 10) {
                        array = false;
                        break;
                    }
                    array.push(`${y}${x + i}`);
                }
            } else {
                for (let i = 0; i < (fleet[index].size); i += 1) {
                    if ((yAxis[yAxis.indexOf(y) + i]) === undefined) {
                        array = false;
                        break;
                    }
                    array.push(`${yAxis[yAxis.indexOf(y) + i]}${x}`);
                }
            }
            return array;
        },
    };

    const setShipCoords = (name, y, x) => {
        let result = false;
        fleet.forEach((ship, index) => {
            if (ship.name === name) {
                const coordsArray = pvt.generateCoords(ship.getAxis(),
                    index, y.toUpperCase(), x);
                if (coordsArray && ship.setCoords(coordsArray)) {
                    result = coordsArray;
                }
            }
        });
        return result;
    };

    const getAllCoords = () => {
        
    };

    const receiveAttack = () => {};
    const getMissedAttacks = () => {};
    const isReady = () => {};
    const isDefeated = () => {};

    return {
        admiral,
        setShipCoords,
        getAllCoords,
        receiveAttack,
        getMissedAttacks,
        isReady,
        isDefeated,
    };
}
