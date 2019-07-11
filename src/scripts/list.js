import { LitElement, html } from "lit-element";
import data from "./profiles";

class ListElement extends LitElement {
  static get properties() {
    return {
      lists: { type: Array },
      demoObject: { type: Object }
    };
  }
  constructor() {
    super();
    this.lists = [];
    this.demoObject = {
      name: "",
      birth: "",
      skill: ""
    };
  }
  render() {
    return html`
      <style>
        :host {
          text-align: center;
          margin-top: 35%;
          font-family: Roboto;
          font-style: oblique;
        }
      </style>

      <h1>Registration</h1>

      ${this.lists.map(
        val => html`
          <p>Names: ${val.name}</p>
          <p>Birthday: ${val.birth}</p>
          <p>Skill: ${val.skill}</p>
        `
      )}

      <p>
        <span
          >Name:
          <input
            .value="${this.demoObject.name}"
            @change=${this.handleDemoChange}
            id="name"
            name="nombre"
            data-props="name"
          /> </span
        ><br />
        <span
          >Birth:
          <input
            .value="${this.demoObject.birth}"
            @change=${this.handleDemoChange}
            id="birthday"
            name="birth"
            data-props="birth"
          /> </span
        ><br />
        <span
          >Skill:
          <input
            .value="${this.demoObject.skill}"
            @change=${this.handleDemoChange}
            id="skill"
            name="skiller"
            data-props="skill"
          /> </span
        ><br />
      </p>
      <p>
        <button id="button" @click=${this.currentValue}>Add</button>
      </p>
      <p>
        <button id="edit" @click=${this.editContents}>Edit</button>
      </p>
      <p>
        <button id="delete" @click=${this.deleteContents}>Delete</button>
      </p>
    `;
  }

  handleDemoChange(event) {
    const props = event.currentTarget.dataset.props;
    this.demoObject[props] = event.currentTarget.value;
  }
  currentValue() {
    this.lists.push(this.demoObject);
    this.demoObject = {
      name: "",
      birth: "",
      skill: ""
    };
  }
  editContents() {}

  deleteContents() {}
}
customElements.define("artist-list", ListElement);
