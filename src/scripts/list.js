import { LitElement, html } from "lit-element";
import data from "./profiles";

class ListElement extends LitElement {
  static get properties() {
    return {
      profiles: { type: Array },
      isEdit: { type: Boolean }
    };
  }
  constructor() {
    super();
    this.profiles = data;
    this.isEdit = false;
  }
  render() {
    return html`
      <h1>例</h1>
      <ul>
        ${this.profiles.map((item, i) =>
          this.isEdit
            ? html`
                <li>
                  <span>Name: <input value="${item.name}" @change=${this.handleChange} name="name" data-num="${i}" /><br />
                  <span>Birth: <input value="${item.birth}" @change=${this.handleChange} name="birth" data-num="${i}"/><br />
                  <span>Skill: <input value="${item.skill}" @change=${this.handleChange} name="skill" data-num="${i}"/><br />
                </li>
              `
            : html`
                <li>
                  <span>Name: ${item.name}</span><br />
                  <span>Birth: ${item.birth}</span><br />
                  <span>Skill: ${item.skill}</span><br />
                </li>
              `
        )}
      </ul>
      ${this.isEdit
        ? html`
            <button @click=${this.handleClick}>保存</button>
          `
        : html`
            <button @click=${this.handleClick}>編集</button>
          `}
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
  handleClick() {
    this.isEdit = !this.isEdit;
  }
  handleChange(event) {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    const num = event.currentTarget.dataset.num;
    this.profiles[num][name] = value;
  }
}
customElements.define("artist-list", ListElement);
