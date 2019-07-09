import { LitElement, html } from "lit-element";
import data from "./profiles";

class ListElement extends LitElement {
  static get properties() {
    return {
      profiles: { type: Array },
      isEdit: { type: Boolean },
      usertype: { type: String }
    };
  }
  constructor() {
    super();
    this.profiles = data;
    this.isEdit = false;
    this.usertype = "";
  }
  render() {
    return html`
      <ul>
        <h1>例題</h1>
        ${this.profiles.map(item =>
          this.isEdit
            ? html`
                <li>
                  <span
                    >Name: <input value=${item.name}
                    @change=${this.handleChange} @focus=${this.focus}
                    @blur=${this.blur} @mouseover="${this.over}
                    @mouseout=${this.out} name="name" id="name" /></span
                  >
                  <span
                    >Birthday:
                    <input
                      value=${item.birth}
                      @change=${this.handleChange}
                      @focus=${this.focus}
                      @blur=${this.blur}
                      @mouseover=${this.over}
                      @mouseout=${this.out}
                      name="birthday"
                      id="birthday"
                  /></span>
                  <span
                    >Skill:<input
                      value=${item.skill}
                      @change=${this.handleChange}
                      @focus=${this.focus}
                      @blur=${this.blur}
                      @mouseover=${this.over}
                      @mouseout=${this.out}
                      name="skill"
                      id="skill"
                  /></span>
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
        <span></span>
      </ul>
      ${
        this.isEdit // @clickに渡すメソッド名を変えれば変わるよ
          ? html`
              <button @click=${this.handleReserve}>reserve</button>
            `
          : html`
              <button @click=${this.handleClick}>edit</button>
            `
      }
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
  handleClick() {
    this.isEdit = !this.isEdit;
  }
  // こんな感じで追加
  handleReserve() {
    alert("reserve");
    this.isEdit = !this.isEdit;
  }
  handleChange(event) {
    var value = console.log(event.currentTarget.value);
    var place = console.log(event.currentTarget.name);
  }
  focus(event) {
    event.target.style.background = "pink";
  }
  blur(event) {
    event.target.style.background = "";
  }
  over(event) {
    event.target.style.color = "black";
  }
  out(event) {
    event.target.style.color = "black";
  }
  appendtyped(event) {
    console.log(event.currentTarget);
  }
}
customElements.define("artist-list", ListElement);
