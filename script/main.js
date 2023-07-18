import { data } from '../script/data.js'

const search = document.querySelector(".main_search") // доступ к инпуту
search.addEventListener("input", searchValue) // событие ввода




/* Функция принимает массив и запускает цикл по всем элементам массива */
function renderCards(data) {
  const cardsList = document.getElementById("emoji_container");
  
  while (cardsList.firstChild) {
    cardsList.removeChild(cardsList.firstChild);
  }
 
  for (let obj of data) {
    
    cardsList.append(createCard(obj)); // добавил карточку в грид
  }
  
}
renderCards(data)

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
    keywords.textContent = [...deleteCopies(obj.keywords)].join(' '); // вызов функции удаления дублей

    card.append(symbol); // добавил символ
    card.append(title);
    card.append(keywords);
    return card
}

/* РЕАЛИЗАЦИЯ ПОИСКА */

/* получение значения инпута + сравнение input с data */
function searchValue(event) {
  const searchData = event.target.value // таргет вводы
  const lowReg = searchData.trim().toLowerCase() // все в нижний регистр
  const filteredData = data.filter(function (item) {
    if (item.keywords.includes(lowReg) || item.title.includes(lowReg)) {
      return item;
    }
  });
  renderCards(filteredData)
 // console.log(filteredData);
  
}


/* Удаление дублирующихся слов в описание */
function deleteCopies(str) {
  const newStr = str.toLowerCase().split(' ')
  return new Set(newStr)
}
