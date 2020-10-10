
// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
    input: document.querySelector('[type="number"]'),
    btnRender: document.querySelector('[data-action="render"]'),
    btnDestroy: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};

function onBtnCreateBoxes() {
    refs.boxes.innerHTML = '';

    const num = refs.input.value;
    const box = [];

    for (let i = 1; i <= num; i += 1) {
        const changeEl = document.createElement('div');

        changeEl.style.backgroundColor = randomColorRGB();
        changeEl.style.width = (i * 10 + 20) + 'px';
        changeEl.style.height = (i * 10 + 20) + 'px';

        box.push(changeEl);
    }

    refs.boxes.append(...box);
}

function onBtnDestroyBoxes() {
    refs.boxes.innerHTML = '';
}

function randomColorRGB() {
    const random = (min, max) => Math.round(Math.random() * (max - min) + min);

    const red = random(0, 255);
    const green = random(0, 255);
    const blue = random(0, 255);

    return `rgb(${red},${green},${blue})`;
}

refs.btnRender.addEventListener('click', onBtnCreateBoxes);
refs.btnDestroy.addEventListener('click', onBtnDestroyBoxes);