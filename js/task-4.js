/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', onKeypress);
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
  // console.log('event.key: ', event.key);
  // console.log('event.code: ', event.code);

  refs.output.textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = '';
}
