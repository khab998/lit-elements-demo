import { LitElement, html } from "lit-element";

class MyElement extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      myBool: { type: Boolean },
      myArray: { type: Array }
    };
  }
  constructor() {
    super();
    this.message = "Hello world! From my-element";
    this.myArray = ["an", "array", "of", "test", "data"];
    this.myBool = true;
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
      }>Click</button>
      <input type="radio" name="radio" @change=${
        this.clickHandler
      }>Click</button>
    `;
  }
  clickHandler(event) {
    console.log(event);
    this.myBool = !this.myBool;
  }
}

customElements.define("simple-greeting", MyElement);
