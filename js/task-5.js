/*
 Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
 подставляет его текущее значение в span#name-output.
  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
 */

const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box--active');
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('box--active');
}

function onMouseMove(event) {
  console.log(event);
}
