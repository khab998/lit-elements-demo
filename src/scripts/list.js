import { LitElement, html } from "lit-element";

class ListElement extends LitElement {
  static get properties() {
    return {
      lists: { type: Array },
      demoObject: { type: Object },
      currentNum: { type: Number }
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
    this.currentNum = null;
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
        (val, i) => html`
          <div @click="${this.editContents}" data-num=${i}>
            <p>Names: ${val.name}</p>
            <p>Birthday: ${val.birth}</p>
            <p>Skill: ${val.skill}</p>
          </div>
        `
      )}

      <div>
        <span>Name:</span>
        <input
          type="text"
          .value="${this.demoObject.name}"
          @change="${this.handleDemoChange}"
          id="name"
          name="nombre"
          data-props="name"
        />
      </div>
      <div>
        <span>Birth:</span>
        <input
          type="text"
          .value="${this.demoObject.birth}"
          @change="${this.handleDemoChange}"
          id="birthday"
          name="birth"
          data-props="birth"
        />
      </div>
      <div>
        <span>Skill:</span>
        <input
          type="text"
          .value="${this.demoObject.skill}"
          @change="${this.handleDemoChange}"
          id="skill"
          name="skiller"
          data-props="skill"
        />
      </div>
      <div>
        <button id="button" @click=${this.currentValue}>Add</button>
        <button id="edit" @click=${this.editContents}>Edit</button>
        <button id="delete" @click=${this.deleteContents}>Delete</button>
      </div>
    `;
  }
  handleDemoChange(event) {
    const props = event.currentTarget.dataset.props;
    // this.demoObject[props] = event.currentTarget.value;
    // this.requestUpdate();
    this.demoObject = {
      ...this.demoObject,
      [props]: event.currentTarget.value
    };
  }
  currentValue() {
    if (this.currentNum !== null) {
      this.lists.splice(this.currentNum, 1, this.demoObject);
      this.requestUpdate();
    } else {
      this.lists = [...this.lists, this.demoObject];
    }
    this.demoObject = {
      name: "",
      birth: "",
      skill: ""
    };
    this.currentNum = null;
  }
  editContents(event) {
    const num = event.currentTarget.dataset.num;
    this.currentNum = num;
    this.demoObject = this.lists[num];
  }

  deleteContents() {}
}
customElements.define("artist-list", ListElement);
