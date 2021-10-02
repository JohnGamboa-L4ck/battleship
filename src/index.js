import './style.css';
import Icon from './favicon.png';
import printMe from './static';

const myIcon = new Image();
myIcon.src = Icon;
document.querySelector('body').appendChild(myIcon);

console.log('k');
printMe();
