import playerFactory from '../factories/shipFactory';

describe('Player factory', () => {
    test('return the expected object', () => {
        expect(playerFactory()).toBe('1');
    });
});
