import elementFactory from './factories/elementFactory';
import appendTo from './appendTo';

export default function setup() {
    // set language
    document.querySelector('html').setAttribute('lang', 'en');
    // create app main container
    appendTo('body', elementFactory('div', 'app', { id: 'app' }));
    // create header, form and div
    appendTo('#app', [
        elementFactory('h1', 'header', [
            { id: 'header' },
            { innerHTML: 'battle&shy;ship' }]),
        elementFactory('form', 'name-form', [
            { id: 'nameForm' },
            { novalidate: '' }]),
        elementFactory('h2', 'notifier', { id: 'notifier' }),
        elementFactory('div', 'sea', { id: 'sea' }),
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
    // create small tag for input error
    appendTo('#nameFieldset', elementFactory('small', 'name-error', { id: 'nameError' }));
    // create play button
    appendTo('#nameFieldset', elementFactory('button', 'play-button', [
        { id: 'playButton' },
        { innerHTML: 'play' },
    ]));
}
