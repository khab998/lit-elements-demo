import { LitElement, html } from "lit-element";
import data from "./profiles";

class ListElement extends LitElement {
  static get properties() {
    return {
      profiles: { type: Array }
    };
  }
  constructor() {
    super();
    this.profiles = data;
  }
  render() {
    return html`
      <ul>
        ${this.profiles.map(
          item =>
            html`
              <li>${item}</li>
            `
        )}
      </ul>
      <p>
        1. 上記が[object
        Object]となっているのでそれを直す。実際はnameやbirth,skillという情報を表示したいです
      </p>
      <p>
        2. [object Object]が直ったら記載されている情報を修正したいです。
        方法は色々ありますが、とりあえず色々考えてやってみてください。
      </p>
    `;
  }
}
customElements.define("artist-list", ListElement);
