/*
 Посчитает и выведет в консоль количество категорий в ul#categories,
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет
в консоль текст заголовка элемента (тега h2)
и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
 */



const itemsEl = document.querySelectorAll('li.item');
console.log(itemsEl);
console.log(`В списке ${itemsEl.length} категории.`);


itemsEl.forEach((itemEl) => {
  const nameCategory = itemEl.querySelector(`h2`);
  console.log(`Категория: ${nameCategory.textContent}`);


  const qualityItems = itemEl.querySelectorAll(`li`);
  console.log(`Количество Элементов: ${qualityItems.length}`);
});
