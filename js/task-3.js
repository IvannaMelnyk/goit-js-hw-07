/*
 Напиши скрипт для создания галлереи изображений по массиву данных.
 Используй массив объектов images для создания тегов img вложенных в li. 
 Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами
 через css-классы.
 */

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// console.log(images);

// const titleEl = document.querySelector('.title');

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('k__item');
// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('ingredients__link');
// navLinkEl.textContent = ['Картошка', 'Грибы'];
// navLinkEl.href = '/task-2';
// navItemEl.appendChild(navLinkEl);

// console.log(navItemEl);

// const navEl = document.querySelector('.ingredients');
// titleEl.insertAdjacentHTML(
//   'beforeend',
//   '<a href="" class="title__link">Это ссылка)</a>',
// );



const galleryEl = document.querySelector("#gallery");

images.forEach((image) => {
  galleryEl.insertAdjacentHTML(
    "beforeEnd",
    `<li class="list"><img src="${image.url}" class="image" alt="${image.alt}"></li>`
  );
});