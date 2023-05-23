import { LitElement, html, css } from 'lit-element';

class MyFirstEvent  extends LitElement {

  static get styles() {
    return css`
      #boton{
        background-color: #afd4f4;
        border: none;
        text-align: center;
        font-size: 16px;
        padding: 8px 18px;
        display: inline-block;
        border-radius: 8px;
        margin-left: 15px;
      }
      #boton:hover{
        background-color: #94a9cd;
        color: white;
      }
      #caja{
        width: 25%;
        border-color: #afd4f4;
        border-radius: 4px;
        padding: 8px 20px;
      }
      .saludo{
        display: flex;
        justify-content: center;
        margin: 15px;
        color: #e75b9c;
        font-size: large;
      }
    `;
  }

  static get properties() {
    return {
        name: {type: String}
    };
  }

  constructor() {
    super();
    this.name="";
  }
  mostrar(){
    this.name=this.shadowRoot.querySelector("#caja").value;
  }
  reset(){
    this.name=this.shadowRoot.querySelector("#caja").value="";
    
  }

  render() {
    return html`
    <div class="saludo">
      <input id="caja" type="text">
      <button id="boton" @click="${this.mostrar}">Enviar</button>
      <button id="boton" @click="${this.reset}">Borrar</button>
    </div>

    <div class="saludo">
    <p>Bienvenid@ <strong>${this.name} </strong></p>
  </div>


    `;
  }

}

customElements.define('my-first-event', MyFirstEvent);