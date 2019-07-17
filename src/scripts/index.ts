import { LitElement, html, property, customElement } from "lit-element";

@customElement("simple-greeting")
export class MyElement extends LitElement {
  @property({ type: String }) message = "Hello world! From my-element";
  @property({ type: Array }) myArray = ["an", "array", "of", "test", "data"];
  @property({ type: Boolean }) myBool = true;

  render() {
    return html`
      <p>${this.message}</p>
      <ul>
        ${this.myArray.map(
          item =>
            html`
              <li>${item}</li>
            `
        )}
      </ul>
      ${this.myBool
        ? html`
            <p>Render some HTML if myBool is true</p>
          `
        : html`
            <p>Render some other HTML if myBool is false</p>
          `}
      <button @click=${this.clickHandler}>Click</button>
    `;
  }
  // any型でチェックを外します
  clickHandler(event: any) {
    console.log(event.target);
    this.myBool = !this.myBool;
  }
}
