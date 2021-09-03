const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

function startFunc() {
  timerId = setInterval(() => {
    document.body.style.background =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
    console.log(randomIntegerFromInterval(0, colors.length - 1));
  }, 1000);
}

function stopFunc() {
  clearInterval(timerId);
}

btnStart.addEventListener('click', startFunc);
btnStop.addEventListener('click', stopFunc);
