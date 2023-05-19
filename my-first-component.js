import { LitElement, html, css } from 'lit-element';

class MyFirstComponent  extends LitElement {

  render() {
    return html`
    <h1> Mi primer componente </h1>
      
    `;
  }
}

customElements.define('my-first-component', MyFirstComponent);