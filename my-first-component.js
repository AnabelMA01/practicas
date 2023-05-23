import { LitElement, html, css } from 'lit-element';

class MyFirstComponent  extends LitElement {

  static get styles() {
    return css`
      .estilo {
        display: block;
        width: 100%;
        height: 100px;
        text-align: center;
        display: flex;
        margin: 0;
        padding-top: 20px;
        justify-content: center;
        background-color: #b3d0d9;
      }
    `;
  }
  render() {
    return html`
      <h1 class="estilo"> Mi primer componente </h1>
    `;
  }
}
customElements.define('my-first-component', MyFirstComponent);
