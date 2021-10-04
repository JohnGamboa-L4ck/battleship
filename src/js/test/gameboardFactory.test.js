import gameboardFactory from '../factories/gameboardFactory';

describe('Gameboard factory', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = gameboardFactory('John');
        gameboard.setShipCoords('battleship', 'A', 1);
    });

    test('return the expected object from the factory', () => {
        expect(gameboard)
            .toEqual({
                admiral: 'John',
                setShipCoords: expect.any(Function),
                getAllCoords: expect.any(Function), // might not be needed
                receiveAttack: expect.any(Function),
                getMissedAttacks: expect.any(Function),
                isReady: expect.any(Function),
                isDefeated: expect.any(Function),
            });
    });

    test('returns a string type value if the attack hit a ship coords', () => {
        gameboard.setShipCoords('battleship', 'A', 1);
        expect()
            .toBe('A1');
    });

    test('returns a string type value if the attack hit a ship coords', () => {
        expect(gameboard.receiveAttack('A1'))
            .toBe('A1');
    });

    test('returns false if the attack missed', () => {
        expect(gameboard.receiveAttack('B1'))
            .toBeFalsy();
    });
});
