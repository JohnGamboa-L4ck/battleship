import shipFactory from '../factories/shipFactory';

describe('Ship Factory', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(shipFactory()).toBe('1');
    });
});