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
    console.log(this.profile);
  }

  render() {
    return html`
      <ul>
        ${this.profiles.map(
          item =>
            html`
              <li>${item}</li>

              <span
                >Name:<input value=${item.name} name="name" id="name"/>
                <span
                  >Birthday:
                  <input value=${item.birthday} name="birthday" id="birthday"/>
                  <span
                    >Skill:<input
                      value=${item.skill}
                      name="skill"
                      id="birthday"
                    /> </span></span
              ></span>

              ${this.item ? html`
              <span><id="name" value=${item.name}></span>
              <span><id="birthday" value-${item.name}></span>
              <span><id="skill" value=${item.skill}</span>
            ` : html`<p>aa</p>`}
        )};
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
