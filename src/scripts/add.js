import { LitElement, html } from "lit-element";

class AddElement extends LitElement {
  static get properties() {
    return {
      lists: { type: Array },
      demoValue: { type: String }
    };
  }
  constructor() {
    super();
    this.lists = [];
    this.demoValue = "";
  }
  render() {
    return html`
      <h1>例題</h1>
      ${this.lists.map(
        v =>
          html`
            <p>${v}</p>
          `
      )}
      <p>
        例:
        <!-- lit-elementの仕様でinputのvalueは.valueで指定するらしい -->
        <input .value="${this.demoValue}" @change=${this.handleDemoChange} />
      </p>
      <button @click=${this.currentValue}>Push</button>
    `;
  }
  appendtyped(event) {
    console.log(event.currentTarget);
  }
  handleDemoChange(event) {
    this.demoValue = event.currentTarget.value;
  }
  currentValue() {
    this.lists.push(this.demoValue);
    this.demoValue = "";
  }
}
customElements.define("add-element", AddElement);
