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
  }
  render() {
    return html`
      <ul>
        <h1>例題</h1>
      <p>
        <span>Name: <input value=${this.usertype} id="name" name="name"/></span
        ><br />
        <span
          >Birth:<input value=${this.usertype} id="birth" name="birth"/></span
        ><br />
        <span
          >Skill: <input value=${this.usertype} id="skill" name="skill"/></span
        ><br />
      </p>
        <button id="button" @click=${this.appendtyped}>add</button>
      </div>
    `;
  }
  appendtyped(event) {
    console.log(event.currentTarget);
  }
}
customElements.define("add-element", AddElement);
