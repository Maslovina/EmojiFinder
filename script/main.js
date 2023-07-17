import { data } from './data_test.js'

const cardsList = document.querySelector(".emoji_list"); // грид карточек

const search = document.querySelector(".main_search") // доступ к инпуту
search.addEventListener("input", searchValue) // событие ввода
/* Функция принимает массив и запускает цикл по всем элементам массива */

function renderCard (data) {
  for (let obj of data) {
    cardsList.append(createCard(obj)); // добавил карточку в грид
  }
}
renderCard(data)

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

/* получение значения инпута + сравнение input с data */
function searchValue(event) {
  const searchData = event.target.value // таргет вводы
  const lowReg = searchData.toLowerCase() // все в нижний регистр
  const filteredData = data.filter(function (item) {
    if (item.keywords.includes(lowReg) || item.title.includes(lowReg)) {
      return item;
    }
  });
  console.log(filteredData);
}