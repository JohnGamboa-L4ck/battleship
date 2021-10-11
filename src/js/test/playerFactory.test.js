import playerFactory from '../factories/playerFactory';

describe('Player factory', () => {
    let player;

    beforeEach(() => {
        player = playerFactory('John');
    });

    it('return the expected object', () => {
        expect(player)
            .toEqual({
                name: 'John',
            });
    });
});
