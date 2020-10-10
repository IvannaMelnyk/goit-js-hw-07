/*
Напиши скрипт, который бы при потере фокуса на инпуте,
проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
 */

// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", onInputValueCheck);
// function onInputValueCheck(event) {
//   const inputValidLength = Number(input.getAttribute("data-length"))
//   const inputCheckLength = input.value.length
//   if (
//     inputValidLength === inputCheckLength) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   } else {
//     input.classList.add("invalid");
//     input.classList.remove("valid");
//   }
// }

const input = document.querySelector("#validation-input");

input.addEventListener("blur", function () {
  const inputValidLength = Number(input.getAttribute("data-length"))
  const inputCheckLength = input.value.length
  if (
    inputValidLength === inputCheckLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
})
