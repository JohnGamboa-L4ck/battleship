import playerFactory from '../factories/shipFactory';

describe('Player factory', () => {
    it('return the expected object', () => {
        expect(playerFactory()).toBe('1');
    });
});
