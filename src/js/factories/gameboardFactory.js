import list from '../fleet';
import shipFactory from './shipFactory';

export default function gameboardFactory(admiral) {
    const fleet = [];
    const missedAttacks = [];

    list.forEach((ship, index) => {
        fleet.push(shipFactory(list[index].name, list[index].loa));
    });

    const receiveAttack = () => {};
    const getMissedAttacks = () => {};
    const setShipCoords = () => {};
    const getAllCoords = () => {};
    const isReady = () => {};
    const isDefeated = () => {};

    return {
        admiral,
        receiveAttack,
        getMissedAttacks,
        setShipCoords,
        getAllCoords,
        isReady,
        isDefeated,
    };
}
