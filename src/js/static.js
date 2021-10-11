import elementFactory from './factories/elementFactory';
import appendTo from './appendTo';

const createAppContainer = () => {
    const app = elementFactory('div', 'app');
    appendTo('body', app);
};

export default function setup() {
    createAppContainer();
}
