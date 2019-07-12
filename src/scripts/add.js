import { LitElement, html } from "lit-element";

class AddElement extends LitElement {
  static get properties() {
    return {
      usertype: { type: String }
    };
  }
  constructor() {
    super();
    this.usertype = "";
    this.demoValue = "";
  }
  render() {
    return html`
        <h1>例題</h1>
      <p>
        <span>Name: <input value="" @change=${this.handleDemoChange} id="name" name="name"/></span
        ><br />
        <span
          >Birth:<input value="" @change=${this.handleDemoChange} id="birth" name="birth"/></span
        ><br />
        <span
          >Skill: <input value="" @change=${this.handleDemoChange} id="skill" name="skill"/></span
        ><br />
      </p>
        <button id="button" @click=${this.currentValue}>add</button>
      </div>
      <!-- ここが追記 -->
      <p>例: <input value="" @change=${this.handleDemoChange} /></p>
      <button @click=${this.currentValue}>Show!!</button>
    
    `;
  }
  appendtyped(event) {
    console.log(event.currentTarget);
  }
  handleDemoChange(event) {
    this.demoValue = event.currentTarget.value;
  }
  currentValue() {
    alert(`現在の値: ${this.demoValue}`);
  }
}
customElements.define("add-element", AddElement);
