import { data } from './data_test.js'

const cardsList = document.querySelector(".emoji_list"); // грид карточек


/* Функция принимает массив и запускает цикл по всем элементам массива */

function zzz (data) {
  for (let obj of data) {
    cardsList.append(createCard(obj)); // добавил карточку в грид
  }
}
zzz(data)

/* функция создает карточки */

function createCard(obj) {
  let card = document.createElement("div"); // оболочка карточки
    card.classList.add("card"); // присвоил класс карточке
    

    let symbol = document.createElement("p"); // создаю символ для карточк
    symbol.classList.add("card_symbol");
    symbol.textContent = obj.symbol;

    let title = document.createElement("h2"); // создаю title
    title.classList.add("card_title");
    title.textContent = obj.title;

    let keywords = document.createElement("p"); // созздаю keywords
    keywords.classList.add("card_keywords");
    keywords.textContent = obj.keywords;

    card.append(symbol); // добавил символ
    card.append(title);
    card.append(keywords);
    return card
}

/* РЕАЛИЗАЦИЯ ПОИСКА */

// доступ к инпуту и событие ввода
const search = document.querySelector(".main_search").addEventListener("input", searchValue); 

  /* получение значения инпута */
function searchValue(search) {
  let searchData = search.target.value
  for (let obj of data) {
    if (obj.title.includes(searchData)) {
      console.log(obj);
    }
  }
}
