/*
 Напиши скрипт который, при наборе текста в инпуте
 input#name-input (событие input),
 подставляет его текущее значение в span#name-output.
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
 */

const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onNameOutput);

function onNameOutput(event) {
  if (event.currentTarget.value !== ``) {
    nameOutputEl.textContent = event.currentTarget.value;
  } else {
    nameOutputEl.textContent = "незнакомец";
  }
}

