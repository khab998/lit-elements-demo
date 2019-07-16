import { LitElement, html, css } from "lit-element";

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
  static get styles() {
    return css`
      header {
        background-color: #0099ff;
        height: 50px;
        margin-bottom: 30px;
      }
      h1 {
        text-align: center;
        margin-right: 20px;
        font-family: Roboto;
        font-style: oblique;
        color: white;
      }
      .name {
        text-align: center;
        margin-right: 60px;
      }
      .birth {
        text-align: center;
        margin-right: 50px;
      }
      .skill {
        text-align: center;
        margin-right: 42px;
      }
      .button {
        display: flex;
        justify-content: flex-start;
        margin-left: 80px;
      }
      .add {
        display: block;
        text-align: center;
        color: #fff;
        text-decoration: none;
        background-color: #f39800;
        border-radius: 5px;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        margin-left: 42%;
        margin-top: 1%;
      }
      .add:hover {
        background-color: #f9c500;
      }
      .clear {
        display: block;
        text-align: center;
        color: #fff;
        text-decoration: none;
        background-color: #f39800;
        border-radius: 5px;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        margin-top: 1%;
      }
      .clear:hover {
        background-color: #f9c500;
      }

      .delete {
        display: block;
        text-align: center;
        color: #fff;
        text-decoration: none;
        background-color: #f39800;
        border-radius: 5px;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        margin-top: 1%;
      }
      .delete:hover {
        background-color: #f9c500;
      }
      .container {
        margin-top: 5%;
        display: inline-block;
        flex-wrap: wrap;
        vertical-align: bottom;
        justify-content: center;
        flex-direction: column;
        margin-left: 3%;
        border: 2px solid gray;
        border-radius: 8px;
        background-color: #f8f8ff;
        padding: 10px;
      }
      .Name {
        display: flex;
        align-content: flex-start;
      }
      .Birthday {
        display: flex;
        align-content: flex-start;
      }
      .Skill {
        display: flex;
        align-content: flex-start;
      }
    `;
  }
  render() {
    return html`
      <header>
        <h1>Registration</h1>
      </header>
      <div class="name">
        <span>Name:</span>
        <input
          type="text"
          .value=${this.demoObject.name}
          @change="${this.handleDemoChange}"
          id="name"
          name="nombre"
          data-props="name"
        />
      </div>
      <div class="birth">
        <span>Birth:</span>
        <input
          type="text"
          .value=${this.demoObject.birth}
          @change="${this.handleDemoChange}"
          id="birthday"
          name="birth"
          data-props="birth"
        />
      </div>
      <div class="skill">
        <span>Skill:</span>
        <input
          type="text"
          .value=${this.demoObject.skill}
          @change="${this.handleDemoChange}"
          id="skill"
          name="skiller"
          data-props="skill"
        />
      </div>

      <div class="button">
        <button id="button" class="add" @click=${this.currentValue}>
          Add
        </button>
        <button id="edit" class="clear" @click=${this.valueClear}>
          Clear
        </button>
        <button id="delete" class="delete" @click=${this.deleteContents}>
          Delete
        </button>
      </div>

      ${this.lists.map(
        (val, i) => html`
          <div class="container" @click="${this.editContents}" data-num=${i}>
            <div class="Name"><p>Name: ${val.name}</p></div>
            <div class="Birthday"><p>Birthday: ${val.birth}</p></div>
            <div class="Skill"><p>Skill: ${val.skill}</p></div>
          </div>
        `
      )}
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
    console.log(this.lists);
    this.currentNum = null;
  }
  editContents(event) {
    console.log(event);
    const num = event.currentTarget.dataset.num;
    this.currentNum = num;
    this.demoObject = this.lists[num];
  }
  valueClear(event) {
    event = this.demoObject = {
      name: "",
      birth: "",
      skill: ""
    };
  }

  deleteContents() {}
}
customElements.define("artist-list", ListElement);
