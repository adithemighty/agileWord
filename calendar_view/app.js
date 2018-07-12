const wordsController = (function() {
  const Word = function(word, id) {
    this.word = word;
    this.id = id;
  };

  const data = {
    allWords: []
  };

  return {
    addWord: function(word) {
      let newWord, id;

      if (data.allWords.length === 0) {
        id = 1;
      } else {
        id = data.allWords[data.allWords.length - 1].id + 1;
      }

      newWord = new Word(word, id);

      data.allWords.push(newWord);
    }
  };
})();

const UIController = (function() {
  const DOMstrings = {
    inputWord: ".input__word",
    inputType: ".input__type",
    inputBtn: ".input__btn",
    calendar: ".calendar__container--weekday",
    calendarStart: ".day-radio"
  };

  return {
    getInput: function() {
      return {
        word: document.querySelector(DOMstrings.inputWord).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    },

    addCalendarItem: function(obj) {
      //obj contains word
      let html, newHtml, element;

      element = DOMstrings.calendar;

      //create placeholder text
      html = '<div class="calendar__item">%word%</div>';

      //replace placeholder text
      newHtml = html.replace("%word%", obj.word);

      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },

    clearInputField: function() {
      document.querySelector(DOMstrings.inputWord).value = "";
    }
  };
})();

const controller = (function(wordsCtrl, UICtrl) {
  const setupEventListeners = function() {
    const DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddWord);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13) {
        ctrlAddWord();
      }
    });
  };

  const ctrlAddWord = function() {
    let input, newItem;

    //get field input data
    input = UICtrl.getInput(); //object with word and framework

    if (input.word.length > 0) {
      //add word to the word controller
      newItem = wordsController.addWord(input.word);

      //add item to the ui
      UICtrl.addCalendarItem(input);

      //clear input
      UICtrl.clearInputField();
    }
  };

  return {
    init: function() {
      setupEventListeners();
    }
  };
})(wordsController, UIController);

controller.init();
