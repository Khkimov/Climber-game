const climber = document.querySelector('.climber');
const winFlag = document.querySelector('.win-flag');
const score = document.querySelector('.score');

let interval = [
  {left: '220px', top: '350px'},
  {left: '280px', top: '280px'},
  {left: '330px', top: '230px'},
  {left: '370px', top: '185px'},
  {left: '460px', top: '190px'},
  {left: '550px', top: '150px'},
  {left: '620px', top: '80px'},
  {left: '680px', top: '100px'},
  {left: '740px', top: '170px'},
  {left: '850px', top: '240px'},
  {left: '970px', top: '200px'},
  {left: '1010px', top: '130px'},
  {left: '1060px', top: '60px'}
]

let counter = 0;
let maxCount = (interval.length - 1) * 100;

const up = () => {
  if (counter < maxCount) {
    return counter += 100;
  } else {
    return counter;
  }
}

const down = () => {
  if (counter > 0) {
    return counter -= 100;
  } else {
    return counter;
  }
}

const showWinFlag = () => {
  if (counter === maxCount) {
    winFlag.style.visibility = 'visible';
  } else {
    winFlag.style.visibility = 'hidden';
  }
}

let textInBlock = document.createElement('div');
score.style.fontSize = '40px'
score.appendChild(textInBlock);

const scoreCount = () => {
  if (counter === maxCount) {
    textInBlock.textContent = `Victory ${counter}`
  } else {
    textInBlock.textContent = counter;
  }
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'KeyX') {
    up();
    showWinFlag();
    scoreCount();
    climber.style.left = interval[counter/100].left;
    climber.style.top = interval[counter/100].top
  } else if (event.code = 'KeyZ') {
    down();
    showWinFlag();
    scoreCount();
    climber.style.left = interval[counter/100].left;
    climber.style.top = interval[counter/100].top;
  }
})
