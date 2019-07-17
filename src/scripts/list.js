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
        /* min-width: 540px; */
        max-width: 980px;
      }

      .cssStart {
        max-width: 980px;
        margin: auto;
      }
      header {
        background-color: lightskyblue;
        height: 50px;
        margin-bottom: 30px;
        border-radius: 5px;
      }
      h1 {
        display: flex;
        justify-content: center;
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
        display: flex;
        justify-content: center;
        margin-right: 43px;
      }
      .button {
        display: flex;
        justify-content: center;
        /* margin-left: 80px; */
      }
      .add {
        display: flex;
        /* text-align: center; */
        justify-content: center;
        color: #fff;
        text-decoration: none;
        background-color: #f39800;
        border-radius: 5px;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        /* /* margin-left: 42%; */
        margin-top: 1%;
      }
      .add:hover {
        background-color: #f9c500;
      }
      .clear {
        display: flex;
        /* text-align: center; */
        justify-content: center;
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
        /* text-align: center; */
        justify-content: center;
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
      .box1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* flex-direction: row; */
        /* justify-content: flex-start; */
        padding: 10px;
      }
      .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        border: 2px solid gray;
        flex-basis: 20%;
        border-radius: 8px;
        background-color: #eeeeee;
        padding: 10px;
        margin: 3px;
        margin-left: 30px;
        box-shadow: 0px 0px 8px #777777 inset;
        max-width: 250px;
      }

      .Name {
        /* margin-left: 20px; */
        display: flex;
        flex-basis: 90%;
      }
      .Birthday {
        display: flex;
        flex-basis: 90%;
      }

      .Skill {
        display: flex;
        flex-basis: 90%;
        /* align-self: auto; */
      }
      .Skill.p {
        margin-left: 15%;
      }
      .footer {
        display: flex;
        justify-content: center;
        flex-grow: 2;
        position: sticky;
        bottom: 0;
      }
    `;
  }
  render() {
    return html`
      <header>
        <h1>Registration</h1>
      </header>
      <div class="cssStart">
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

        <div class="box1">
          ${this.lists.map(
            (val, i) => html`
              <div
                class="container"
                @click="${this.editContents}"
                data-num=${i}
              >
                <div class="Name">
                  <p>Name: ${val.name}</p>
                </div>
                <div class="Birthday">
                  <p>Birth: ${val.birth}</p>
                </div>
                <div class="Skill"><p>Skill: ${val.skill}</p></div>
              </div>
            `
          )}
        </div>
        <div class="footer">
          <footer>
            <p>(c)copy right</p>
          </footer>
        </div>
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
