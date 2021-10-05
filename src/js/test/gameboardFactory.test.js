import gameboardFactory from '../factories/gameboardFactory';

describe('Gameboard factory', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = gameboardFactory('John');
        gameboard.setShipCoords('battleship', 'A', 1);
    });

    it('return the expected object from the factory', () => {
        expect(gameboard)
            .toEqual({
                admiral: 'John',
                setShipCoords: expect.any(Function),
                getAllCoords: expect.any(Function), // might not be needed or use as private
                receiveAttack: expect.any(Function),
                getMissedAttacks: expect.any(Function),
                isReady: expect.any(Function),
                isDefeated: expect.any(Function),
            });
    });

    it('returns an array if successfully set a ship coords horizontally', () => {
        expect(gameboard.setShipCoords('battleship', 'B', 7))
            .toEqual(['B7', 'B8', 'B9', 'B10']);
    });

    it('returns false if it failed to set a ship coords horizontally', () => {
        expect(gameboard.setShipCoords('battleship', 'B', 8))
            .toBe(false);
    });

    it('returns an array if successfully set a ship coords vertically', () => {
        expect(gameboard.setShipCoords('patrol boat', 'I', 10))
            .toEqual(['I10', 'J10']);
    });

    it('returns false if it failed to set a ship coords vertically', () => {
        expect(gameboard.setShipCoords('patrol boat', 'J', 10))
            .toBe(false);
    });

    it('returns an array of placed ship coordinates', () => {
        expect(gameboard.getAllCoords())
            .toEqual([
                { name: 'battleship', coords: ['A1', 'A2', 'A3', 'A4'] },
            ]);
    });

    it('returns a string type value if the attack hit a ship coordinates', () => {
        expect(gameboard.receiveAttack('A1'))
            .toBe('A1');
    });

    it('returns false if the attack missed', () => {
        expect(gameboard.receiveAttack('B1'))
            .toBe(false);
    });

    it('returns an array of missed attacks', () => {
        gameboard.receiveAttack('B1');
        expect(gameboard.getMissedAttacks())
            .toEqual(['B1']);
    });

    it('returns false if not all ship has been placed', () => {
        expect(gameboard.isReady())
            .toBe(false);
    });

    it('returns true if all ship has been placed', () => {
        gameboard.setShipCoords('carrier', 'B', 1);
        gameboard.setShipCoords('submarine', 'C', 1);
        gameboard.setShipCoords('destroyer', 'D', 1);
        gameboard.setShipCoords('patrol boat', 'E', 1);
        expect(gameboard.isReady())
            .toBeTruthy();
    });

    it('returns false if not all ship has sunk', () => {
        expect(gameboard.isDefeated())
            .toBe(false);
    });

    it('returns true if all ship has sunk', () => {
        expect(gameboard.isDefeated())
            .toBeTruthy();
    });
});
