import createHeading from './heading.js';
import './main.css';
import dog from './dog.jpg';

const heading = createHeading();
document.body.append(heading);

const img = new Image();
img.src = dog;
document.body.append(img);