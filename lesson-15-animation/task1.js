'use strict';
var GameFieldWidth = 700; // ширина контейнера для отображения всей игры
var GameFieldHeight = 500; // высота контейнера для отображения всей игры
var ButtonWidth = 110; // ширина кнопки Старт
var ButtonHeight = 30; // высота кнопки Старт
var ScoreBoardWidth = 700; // ширина контейнера для вывода счета игры
var ScoreBoardHeight = 70;// высота контейнера для вывода счета игры
var FieldWidth = 700; // ширина поля для мяча
var FieldHeight = 430; // высота поля для мяча
var RacketWidth = 10; // ширина ракетки
var RacketHeight = 120; // высота ракетки
var BallWidth = 30; // ширина мяча
var BallHeight = 30;// высота мяча

var wrapper = document.getElementById('wrapper'); // контейнер
var gameScore; // счет игры
var field; // игровое поле
var score1 = 0; // счет первого игрока

var score2 = 0; // счет вторго игрока
var racket1; // первая ракетка
var racket2; // вторая ракетка

wrapper.appendChild(createGame());
requestAnimationFrame(tick);

var ballH = {
  PosX: field.getBoundingClientRect().width / 2 - BallHeight / 2,
  PosY: field.getBoundingClientRect().height / 2 - BallWidth / 2,
  SpeedX: 0,
  SpeedY: 0,
  width: BallWidth,
  height: BallHeight,
  update: function () {
    var BallObj = document.getElementById('ball');
    BallObj.style.left = this.PosX + 'px';
    BallObj.style.top = this.PosY + 'px';
  }
};

var BallHArea = {
  width: field.getBoundingClientRect().width,
  height: field.getBoundingClientRect().height
};

var racketH = {
  width: RacketWidth,
  height: RacketHeight,
  racket1PosX: field.getBoundingClientRect().left,
  racket1PosY: FieldHeight / 2 - RacketHeight / 2,
  racket1Speed: 0,

  racket2PosX: FieldWidth - RacketWidth,
  racket2PosY: FieldHeight / 2 - RacketHeight / 2,
  racket2Speed: 0,

  update: function () {
    var racket1Obj = document.getElementById('racket1');
    var racket2Obj = document.getElementById('racket2');
    racket1Obj.style.left = this.racket1PosX + 'px';
    racket1Obj.style.top = this.racket1PosY + 'px';
    racket2Obj.style.left = this.racket2PosX + 'px';
    racket2Obj.style.top = this.racket2PosY + 'px';
  }
};

var racketHArea = {
  width: field.getBoundingClientRect().width,
  height: field.getBoundingClientRect().height
};

racketH.update();

// UI
function createGame() {
  var game = document.createElement('div');
  game.style.width = GameFieldWidth + 'px';
  game.style.height = GameFieldHeight + 'px';
  game.appendChild(createStartButton());
  game.appendChild(createScoreBoard());
  game.appendChild(createField());
  return game;
}

function createStartButton() {
  var button = document.createElement('input');
  button.id = 'startButton';
  button.type = 'button';
  button.value = 'старт!';
  button.style.position = 'absolute';
  button.style.width = ButtonWidth + 'px';
  button.style.height = ButtonHeight + 'px';
  button.style.top = ScoreBoardHeight / 2 - ButtonHeight / 2 + 'px';
  button.addEventListener('click', startGame, false);
  return button;
}

function createScoreBoard() {
  gameScore = document.createElement('div');
  gameScore.id = 'gameScore';
  gameScore.style.width = ScoreBoardWidth + 'px';
  gameScore.style.height = ScoreBoardHeight + 'px';
  showScore();
  return gameScore;
}

function showScore() {
  gameScore.textContent = score1 + ':' + score2;
}

function createField() {
  field = document.createElement('div');
  field.id = 'field';
  field.style.position = 'relative';
  field.style.width = FieldWidth + 'px';
  field.style.height = FieldHeight + 'px';
  field.appendChild(createRackets(racket1, 'racket1'));
  field.appendChild(createRackets(racket2, 'racket2'));
  field.appendChild(createBall());
  return field;
}

function createRackets(racket, racketId) {
  racket = document.createElement('div');
  racket.id = racketId;
  racket.style.position = 'absolute';
  racket.style.width = RacketWidth + 'px';
  racket.style.height = RacketHeight + 'px';
  return racket;
}

function createBall() {
  var ball = document.createElement('div');
  ball.id = 'ball';
  ball.style.position = 'absolute';
  ball.style.width = BallWidth + 'px';
  ball.style.height = BallHeight + 'px';
  return ball;
}

// подписываемся на событие "keydown" и "keyup", чтобы срабатывали нужные кнопки

window.addEventListener('keydown', function (EO) {
  EO = EO || window.event;

  EO.preventDefault();
  if (EO.keyCode === 17) {
    racketH.racket1Speed = 5;

  }
  if (EO.keyCode === 16) {
    racketH.racket1Speed = -5;

  }
  if (EO.keyCode === 40) {
    racketH.racket2Speed = 5;

  }
  if (EO.keyCode === 38) {
    racketH.racket2Speed = -5;
  }
});

window.addEventListener('keyup', function (EO) {
  EO = EO || window.event;
  EO.preventDefault();

  if (EO.keyCode === 17) {
    racketH.racket1Speed = 0;
  }

  if (EO.keyCode === 16) {
    racketH.racket1Speed = 0;
  }

  if (EO.keyCode === 40) {
    racketH.racket2Speed = 0;
  }

  if (EO.keyCode === 38) {
    racketH.racket2Speed = 0;
  }
});

// Logic
function startGame() {
  ballH.PosX = BallHArea.width / 2 - ballH.width / 2;
  ballH.PosY = BallHArea.height / 2 - ballH.height / 2;
  ballH.SpeedX = 5;
  ballH.SpeedY = 3;
}

function tick() {
  racketH.racket1PosY += racketH.racket1Speed;

  if (racketH.racket1PosY + racketH.height > racketHArea.height) {
    racketH.racket1PosY = racketHArea.height - racketH.height - 2;
  }
  if (racketH.racket1PosY < 0) {
    racketH.racket1PosY = 0;
  }

  racketH.racket2PosY += racketH.racket2Speed;
  if (racketH.racket2PosY + racketH.height > racketHArea.height) {
    racketH.racket2PosY = racketHArea.height - racketH.height - 2;
  }

  if (racketH.racket2PosY < 0) {
    racketH.racket2PosY = 0;
  }
  racketH.update();

  ballH.PosX -= ballH.SpeedX;
  if (ballH.PosX + ballH.width > BallHArea.width - racketH.width) {
    if (ballH.PosY + ballH.height < racketH.racket2PosY || ballH.PosY > racketH.racket2PosY + racketH.height) {
      score2 += 1;
      ballH.SpeedX = 0;
      ballH.SpeedY = 0;
      showScore();
    }
    ballH.SpeedX = -ballH.SpeedX;
    ballH.PosX = BallHArea.width - ballH.width - racketH.width;
  }

  if (ballH.PosX < racketH.width) {
    if (ballH.PosY + ballH.height < racketH.racket1PosY || ballH.PosY > racketH.racket1PosY + racketH.height) {
      score1 += 1;
      ballH.SpeedX = 0;
      ballH.SpeedY = 0;
      showScore();
    }
    ballH.SpeedX = -ballH.SpeedX;
    ballH.PosX = racketH.width;
  }

  ballH.PosY += ballH.SpeedY;

  if (ballH.PosY + BallHeight > BallHArea.height) {
    ballH.SpeedY = -ballH.SpeedY;
  }
  if (ballH.PosY < 0) {
    ballH.SpeedY = -ballH.SpeedY;
    ballH.PosY = 0;
  }

  ballH.update();

  requestAnimationFrame(tick);
}
