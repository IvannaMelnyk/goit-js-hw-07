/*
Счетчик состоит из спана и кнопок, которые должны увеличивать
 и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение 
счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения 
счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
 */

let counterValue = 0;
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");


incrementBtnEl.addEventListener('click', onIncrementClick);
decrementBtnEl.addEventListener('click', onDecrementClick);

function onIncrementClick(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
// onIncrementClick();

function onDecrementClick(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
