'use strict';

var formApplication = document.forms.form;

var array = [
  {label: 'Разработчик: ', type: 'text', width: 400},
  {label: 'Название сайта: ', type: 'text', width: 400},
  {label: 'URL сайта: ', type: 'url', width: 150},
  {label: 'Дата запуска сайта: ', type: 'date', width: 150},
  {label: 'Посетителей в сутки: ', type: 'number', width: 150},
  {label: 'E-mail для связи: ', type: 'email', width: 200},
  {label: 'Рубрика каталога: ', type: 'select', option: ['здоровье', 'домашний уют', 'бытовая техника'], width: 300},
  {label: 'Размещение: ', type: 'radio', value: ['бесплатное', 'платное', 'VIP'], width: 300},
  {label: 'Разрешить отзывы: ', type: 'checkbox', width: 200},
  {label: 'Описание сайта: ', type: 'textarea', width: 500, height: 200},
  {label: 'Опубликовать: ', type: 'submit', width: 150}
];

function getForm(arr, form) {
  var label;
  var text;
  var field;
  var nextLine;

  for (var i = 0; i < arr.length; i++) {
    label = document.createElement('label');
    text = document.createTextNode(arr[i].label);
    label.appendChild(text);
    form.appendChild(label);

    if (arr[i].type === 'select') {
      field = document.createElement('select');
    } else field = document.createElement('input');
    field.style.width = arr[i].width + 'px';
    field.style.height = arr[i].height + 'px';
    field.setAttribute('type', arr[i].type);
    form.appendChild(field);
    nextLine = document.createElement('br');
    form.appendChild(nextLine);
  }
}

getForm(array, formApplication);
