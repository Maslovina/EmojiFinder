import { data } from './data_test.js'

const cardsList = document.querySelector(".emoji_list"); // грид карточек


function createCard() {

    for (let obj = 0; obj < data.length; obj++) {
      let card = document.createElement("div"); // оболочка карточки
      card.classList.add("card"); // присвоил класс карточке
      cardsList.append(card); // добавил карточку в грид

      let symbol = document.createElement("p"); // создаю символ для карточк
      symbol.classList.add("card_symbol");
        symbol.textContent = data[obj].symbol;
        
        let title = document.createElement('h2') // создаю title
        title.classList.add("card_title")
        title.textContent = data[obj].title;

        let keywords = document.createElement("p"); // созздаю keywords
        keywords.classList.add("card_keywords");
        keywords.textContent = data[obj].keywords;

        card.append(symbol) // добавил символ
        card.append(title)
        card.append(keywords)
      
    }
}
createCard()
