import gameboardFactory from '../factories/gameboardFactory';

describe('Gameboard factory', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = gameboardFactory('John');
    });

    test('return the expected object from the factory', () => {
        expect(gameboard).toEqual({
            admiral: 'John',
            receiveAttack: expect.any(Function),
            getMissedAttacks: expect.any(Function),
            setShipCoords: expect.any(Function),
            getShipCoords: expect.any(Function),
        });
    });
});
