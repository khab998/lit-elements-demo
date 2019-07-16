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
      body {
        max-width: 980px;
      }
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
        margin-right: 88px;
      }
      .skill {
        text-align: center;
        margin-right: 43px;
      }
      .button {
        display: flex;
        justify-content: flex-start;
        margin-left: 80px;
      }
      .add {
        display: flex;
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
        display: flex;
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
        display: flex;
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
        display: flex;
        align-items: stretch;
        width: 16%;
        flex-grow: 1;
        flex-direction: column;
        margin-left: 3%;
        border: 2px solid gray;
        border-radius: 8px;
        background-color: #eeeeee;
        padding: 10px;
      }
      .box1 {
        display: flex;
        list-style: none;
        justify-content: center;
        width: 16%;
      }
      .Name {
        margin-left: 20px;
      }
      .Skill {
        margin-left: 33px;
      }
      .footer {
        display: flex;
        flex-grow: 2;
        background-color: #89c7de;
        color: #fff;
        text-align: center;
        padding: 30px 0;
        position: absolute;
        bottom: 0;
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
          style="width:250px; height:25px"
          @change="${this.handleDemoChange}"
          id="name"
          name="nombre"
          data-props="name"
        />
      </div>
      <div class="birth">
        <span>Birth Day:</span>
        <input
          type="text"
          .value=${this.demoObject.birth}
          style="width:250px; height:25px;margin-top:4px"
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
          style="width:250px; height:25px; margin-top:4px"
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
          <div class="box1">
            <div class="container" @click="${this.editContents}" data-num=${i}>
              <div class="Name">
                <p>Name: ${val.name}</p>
              </div>
              <div class="Birthday">
                <p>Birthday: ${val.birth}</p>
              </div>
              <div class="Skill"><p>Skill: ${val.skill}</p></div>
            </div>
          </div>
        `
      )}
      <div class="footer">
        <footer>
          <p>(c)copy right</p>
        </footer>
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
