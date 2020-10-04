/*
Напиши скрипт, который бы при потере фокуса на инпуте,
проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
 */

const validInputEl = document.querySelector("#validation-input");

validInputEl.addEventListener("blur", onInputValueCheck);

function onInputValueCheck(event) {
  if (
    event.currentTarget.getAttribute("data-length") >
    event.currentTarget.value.length
  ) {
    validInputEl.classList.add("invalid");
    validInputEl.classList.remove("valid");
  } else {
    validInputEl.classList.add("valid");
    validInputEl.classList.remove("invalid");
  }
}
