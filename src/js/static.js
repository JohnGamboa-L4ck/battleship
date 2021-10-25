import elementFactory from './factories/elementFactory';
import appendTo from './appendTo';

export default function setup() {
    // set language
    document.querySelector('html').setAttribute('lang', 'en');
    // create app main container
    appendTo('body', elementFactory('div', 'app', { id: 'app' }));
    // create header and form
    appendTo('#app', [
        elementFactory('h1', 'header', [
            { id: 'header' },
            { innerHTML: 'battle&shy;ship' }]),
        elementFactory('form', 'name-form', [
            { id: 'nameForm' },
            { novalidate: '' },
        ]),
    ]);
    // create fieldset
    appendTo('#nameForm', elementFactory('fieldset', 'name-fieldset',
        { id: 'nameFieldset' }));
    // create input for name
    appendTo('#nameFieldset', [
        elementFactory('legend', 'name-legend', { innerHTML: 'Name:' }),
        elementFactory('input', 'name-input', [
            { id: 'nameInput' },
        ]),
    ]);
    // create hidden small tag for input error
    appendTo('#nameFieldset', elementFactory('small', 'name-error', { id: 'nameError' }));
    // create play button
    appendTo('#nameFieldset', elementFactory('button', 'play-button', [
        { id: 'playButton' },
        { innerHTML: 'play' },
    ]));
}
