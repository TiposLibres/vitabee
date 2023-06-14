import gsap from 'https://cdn.skypack.dev/gsap@3.11.0';

const CONTAINER = document.querySelector('.container');

const generateHandler = (element, proximity, bounds, cb) => ({ x, y }) => {
  const elementBounds = element.getBoundingClientRect();
  const centerX = elementBounds.left + elementBounds.width / 2;
  const centerY = elementBounds.top + elementBounds.height / 2;
  const boundX = gsap.utils.mapRange(centerX - proximity, centerX + proximity, -bounds, bounds, x);
  const boundY = gsap.utils.mapRange(centerY - proximity, centerY + proximity, -bounds, bounds, y);
  cb(boundX, boundY);
};

const UPDATE = (x, y) => {
  CONTAINER.style.setProperty('--ratio-x', Math.floor(gsap.utils.clamp(-100, 100, x)) / 100);
  CONTAINER.style.setProperty('--ratio-y', Math.floor(gsap.utils.clamp(-100, 100, y)) / 100);
};

document.addEventListener('pointermove', generateHandler(document.body, 100, 100, UPDATE));