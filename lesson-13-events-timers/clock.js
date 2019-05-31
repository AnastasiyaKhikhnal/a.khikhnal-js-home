'use strict';
var radius = 120; // радиус циферблата
var radiusForDigitalWatch = 70;// радиус для электронных часов
var angleValue = 0; // угол
var distanceOfDigits = 30; // расстояние(в градусах) между цифрами на часах
var time = new Date(); // текущее время
var hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()); // определяем по времени где должна быть стрелка часов
var minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()); // определяем по времени где должна быть стрелка минут
var secondsDeg = 6 * time.getSeconds() - 6; // определяем по времени где должна быть стрелка секунд
var hourDigits = 12; // цифры часов

var container = document.getElementById('container');

// создаем основу циферблата
var baseForClockFace = document.createElement('div');
container.appendChild(baseForClockFace);
baseForClockFace.classList.add('baseForClockFace'); // устанавливаем готовый CSS класс для DIV(для основы циферблата)

// в цикле создаем div-контейнеры для номеров часов и позиционируем их относительно основы циферблата
for (var i = 1; i <= hourDigits; i++) {
  var baseForNumbers = document.createElement('div');// создаем DIV(для номеров часов);
  var angle;
  var baseForClockFaceX;
  var baseForClockFaceY;
  var baseForNumbersX;
  var baseForNumbersY;

  angleValue += distanceOfDigits;
  angle = angleValue / 180 * Math.PI;

  baseForClockFace.appendChild(baseForNumbers);// созданный DIV(для номеров часов) делаем дочерным элементом для основы циферблата
  baseForNumbers.classList.add('baseForNumbers');// устанавливаем готовый CSS класс для дочерных элементов
  baseForNumbers.innerHTML = i;// значением каждого дочерного элемента будет равен i

  baseForClockFaceX = baseForClockFace.offsetLeft + baseForClockFace.offsetWidth / 2;
  baseForClockFaceY = baseForClockFace.offsetTop + baseForClockFace.offsetHeight / 2;

  baseForNumbersX = baseForClockFaceX + radius * Math.sin(angle);// узнаем центр дочерного элемента по X
  baseForNumbersY = baseForClockFaceY - radius * Math.cos(angle);// узнаем центр дочерного элемента по Y

  baseForNumbers.style.left = Math.round(baseForNumbersX - baseForNumbers.offsetWidth / 2) + 'px';
  baseForNumbers.style.top = Math.round(baseForNumbersY - baseForNumbers.offsetHeight / 2) + 'px';
}

var elemForDigitalWatch = document.createElement('div'); // создаем DIV(для электронных часов)
var elemForArrowHours = document.createElement('div'); // создаем DIV(для стрелки часов)
var elemForArrowMinutes = document.createElement('div'); // создаем DIV(для стрелки минут)
var elemForArrowSeconds = document.createElement('div'); // создаем DIV(для стрелки секунд)

// вставляем созданные элементы в конец дочерных элементов wrap(обвёртки)
elemForDigitalWatch = baseForClockFace.appendChild(elemForDigitalWatch); // созданный DIV(для электронных часов) делаем дочерным элементом wrap(обвёртка)
elemForArrowHours = baseForClockFace.appendChild(elemForArrowHours);// созданный DIV(для стрелки часов) делаем дочерным элементом wrap(обвёртка)
elemForArrowMinutes = baseForClockFace.appendChild(elemForArrowMinutes);// созданный DIV(для стрелки минут) делаем дочерным элементом wrap(обвёртка)
elemForArrowSeconds = baseForClockFace.appendChild(elemForArrowSeconds);// созданный DIV(для стрелки секунд) делаем дочерным элементом wrap(обвёртка)

// устанавливаем класс для электронных часов и к каждой стрелке
elemForDigitalWatch.classList.add('elemForDigitalWatch'); // устанавливаем готовый CSS класс для DIV(для электронных часов)
elemForArrowHours.classList.add('elemForArrowHours');// устанавливаем готовый CSS класс для DIV(для стрелки часов)
elemForArrowMinutes.classList.add('elemForArrowMinutes');// устанавливаем готовый CSS класс для DIV(для стрелки минут)
elemForArrowSeconds.classList.add('elemForArrowSeconds');// устанавливаем готовый CSS класс для DIV(для стрелки секунд)

// определяем где будет стоять электронные часы
elemForDigitalWatch.style.left = baseForClockFaceX - elemForDigitalWatch.offsetWidth / 2 + 'px';
elemForDigitalWatch.style.top = baseForClockFaceY - radiusForDigitalWatch + 'px';

// определяем где будут стоять стрелки часов
var setOfArrows = [elemForArrowHours, elemForArrowMinutes, elemForArrowSeconds];

function posForArrows(arr) {
  for (var j = 0; j < arr.length; j++) {
    arr[j].style.top = baseForClockFaceY - arr[j].offsetHeight + 10 + 'px';
    arr[j].style.left = baseForClockFaceX - arr[j].offsetWidth / 2 + 'px';
  }
}

posForArrows(setOfArrows);

// определяем точку трансформации стрелок часов, минут, секунд по оси X и Y
elemForArrowHours.style.transformOrigin = 'center 50px';
elemForArrowMinutes.style.transformOrigin = 'center 110px';
elemForArrowSeconds.style.transformOrigin = 'center 135px';

// функция для определения положение электронных часов и стрелок для часов, минут, секунд
function arrows() {
  // электронные часы
  var currentTime = new Date(); // текущее время
  elemForDigitalWatch.innerHTML = currentTime.toLocaleTimeString();
  // секундные стрелки
  secondsDeg += 6; // к аждую секунду стрелка секунда будет двигать на 6 градусов
  elemForArrowSeconds.style.transform = 'rotate(' + secondsDeg + 'deg)';
  // минутныеные стрелки
  minutesDeg += 6 * (1 / 60); // каждую секунду стрелка минута будет двигать на 6*(1/60) градусов
  elemForArrowMinutes.style.transform = 'rotate(' + minutesDeg + 'deg)';
  // часовые стрелки
  hoursDeg += 6 * (1 / 360); // каждую секунду стрелка часа будет двигать на 6*(1/360) градусов
  elemForArrowHours.style.transform = 'rotate(' + hoursDeg + 'deg)';
}

window.onload = arrows(); // вызываем функцию arrows на момент загрузки страницы
window.setInterval(arrows, 1000); // устанавливаем setInterval на 1 секунду и выполняем код каждую секунду чтоб
// стрелки часов, минут и секунд обновляли положени каждую секунду
