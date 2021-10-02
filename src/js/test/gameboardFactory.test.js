import gameboardFactory from '../factories/gameboardFactory';

describe('Gameboard factory', () => {
    test('return the expected object', () => {
        expect(gameboardFactory()).toBe('1');
    });
});
