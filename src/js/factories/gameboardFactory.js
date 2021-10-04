import list from '../fleet';
import shipFactory from './shipFactory';

export default function gameboardFactory() {
    const fleet = [];
    list.forEach((ship, index) => {
        fleet.push(shipFactory(list[index].name, list[index].loa));
    });

    return {
        method: 'somthing',
    };
}
