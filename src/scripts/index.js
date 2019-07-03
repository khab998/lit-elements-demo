import { LitElement, html } from "lit-element";

class MyElement extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      myBool: { type: Boolean },
      myArray: { type: Array },
      myMessage: { type: String }
    };
  }
  constructor() {
    super();
    this.message = "Hello world! From my-element";
    this.myArray = ["an", "array", "of", "test", "data"];
    this.myBool = true;
    this.myMessage = "なし";
  }
  render() {
    return html`
      <p>${this.message}</p>
      <ul>
        ${this.myArray.map(
          item =>
            html`
              <li>${item}</li>
            `
        )}
      </ul>
      <input type="radio" name="radio" @change=${
        this.clickHandler
      } value="左です" >Click</button>
      <input type="radio" name="radio" @change=${
        this.clickHandler
      } value="右です">Click</button>

      <p>${this.myMessage}</p>
    `;
  }
  clickHandler(event) {
    console.log(event);
    console.log(event.currentTarget);
    console.log(event.currentTarget.value);
    this.myMessage = event.currentTarget.value;
  }
}

customElements.define("simple-greeting", MyElement);
