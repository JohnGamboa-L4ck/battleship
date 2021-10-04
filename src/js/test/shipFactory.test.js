import shipFactory from '../factories/shipFactory';

describe('Ship factory', () => {
    let battleship;

    beforeEach(() => {
        battleship = shipFactory('battleship', 4);
        battleship.setCoords(['A1', 'A2', 'A3', 'A4']);
    });

    it('return the expected object from the factory', () => {
        expect(battleship)
            .toEqual({
                name: 'battleship',
                size: 4,
                maneuver: expect.any(Function),
                getAxis: expect.any(Function),
                setCoords: expect.any(Function),
                getCoords: expect.any(Function),
                hit: expect.any(Function),
                hitsRecieved: expect.any(Function),
                isSunk: expect.any(Function),
            });
    });

    it('return a string type value of axis', () => {
        expect(battleship.getAxis())
            .toBe('horizontal');
    });

    it('toggle the value (horizontal/vertical) of axis', () => {
        battleship.maneuver();
        expect(battleship.getAxis())
            .toBe('vertical');
    });

    it('set the array value of coordinates', () => {
        battleship.setCoords(['C1', 'C2', 'C3', 'C4']);
        expect(battleship.getCoords())
            .toEqual(['C1', 'C2', 'C3', 'C4']);
    });

    it('failed to set the array value of coordinates', () => {
        battleship.setCoords(['C1', 'C2', 'C3', 'C4', 'c5']);
        expect(battleship.getCoords())
            .toEqual(['A1', 'A2', 'A3', 'A4']);
    });

    it('return an array value of coordinates', () => {
        expect(battleship.getCoords())
            .toEqual(['A1', 'A2', 'A3', 'A4']);
    });

    it('recieve and record a hit', () => {
        battleship.hit('A2');
        expect(battleship.hitsRecieved())
            .toEqual(['A2']);
    });

    it('return a false boolean sunk value', () => {
        battleship.hit('A2');
        expect(battleship.isSunk())
            .toBe(false);
    });

    it('return true boolean sunk value', () => {
        battleship.hit('A1');
        battleship.hit('A2');
        battleship.hit('A3');
        battleship.hit('A4');
        expect(battleship.isSunk())
            .toBe(true);
    });
});
