import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    let emojiDiv = document.getElementById("emojis");
        emojiDiv.textContent = '';
  }

  addBananas() {
    let emojis = this.emojis.map(monkey => monkey += this.banana);
   
    let paragraph = document.createElement('p');
    paragraph.textContent = emojis;

    let emojiDiv = document.getElementById("emojis");
    emojiDiv.appendChild(paragraph);

    return emojis;
  };

}
