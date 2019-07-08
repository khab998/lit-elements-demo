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
      <ul>
        <h1>例題</h1>
        ${this.profiles.map(
          item =>
            html`
              <li>
                <span
                  >Name:
                  <input
                    value=${item.name}
                    @change=${this.handleChange}
                    name="name"
                    id="name"
                /></span>
                <span
                  >Birthday:
                  <input
                    value=${item.birth}
                    @change=${this.handleChange}
                    name="birthday"
                    id="birthday"
                /></span>
                <span
                  >Skill:<input
                    value=${item.skill}
                    @change=${this.handleChange}
                    name="skill"
                    id="skill"
                /></span>
                ${this.item
                  ? html`
                      <li>
                        <span>Name:${item.name}></span>
                        <span>Birth:${item.birth}></span>
                        <span>Skill:${item.skill}</span>
                      </li>
                    `
                  : html`
                </li>
                  `}
              </li>
            `
        )}
      </ul>
      ${this.isEdit
        ? html`
            <button @click=${this.handleClick}>reserve</button>
          `
        : html`
            <button @click=${this.handleClick}>edit</button>
          `}
    `;
  }
  handleClick() {
    this.isEdit = !this.isEdit;
  }
  handleChange(event) {
    var value = console.log(event.currentTarget.value);
    var place = console.log(event.currentTarget.name);
  }
}
customElements.define("artist-list", ListElement);
