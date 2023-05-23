import { LitElement, html, css } from 'lit-element';

class SecondComponent  extends LitElement {

  static get styles() {
    return css`
    #saludo{
      color: #6692c4;
      text-align: center;
      padding: 10px;
      margin: 0;
      font-size: xx-large;
    }
    #Info{
      margin: 0;
      text-align: center;
      font-size: medium;
      padding: 10px;
    }
    h2{
      text-align: center;
      color: #4a8d8d;
    }
    .padre{
      display: flex;
      justify-content: center;
    }
    .hijo{
      background-color: #d5eeef;
      width: 300px;
      margin: 10px;
      padding: 15px;
    }
    #foto{
      width: 100%;
    }
    
    `;
  }
  static get properties() {
    return {
    nombre: { type: String },
    edad: {type: Number},
    colores: {type: Array},
    flores: {type: Array},
    };
  }


  constructor(){
    super();
    this.nombre="";
    this.edad=0;
    this.colores=["azul", "verde", "blanco"];
    this.flores= [
      {
        foto: "https://cdn.pixabay.com/photo/2018/06/21/00/12/hydrangea-3487664_1280.jpg",
        tipo: "Hortensia",
        color: "Azul",
        clima: "Atlántico"
      },
      {
        foto:"https://cdn.pixabay.com/photo/2020/08/03/12/19/flower-5459972_1280.jpg",
        tipo:"Girasol",
        color: "Amarillo",
        clima: "Mediterráneo"
      },
      {
        foto:"https://cdn.pixabay.com/photo/2018/07/05/19/01/tin-3518967_1280.jpg",
        tipo:"Zinnias",
        color: "Varios colores",
        clima: "Cálido"
      }
    ];
  }
  
  render() {
    return html`
    <h2 id="saludo">Bienvenid@ ${this.nombre}</h2>

    <div id="Info">
      <p>Tu edad: ${this.edad} años </p>
      <p>Tus colores favoritos son: ${this.colores[0]}, ${this.colores[1]} y ${this.colores[2]}</p>
    </div>

      <h2>Tus flores favoritas son: </h2>
      ${this.flores.map(flor=> html`

      <div class="padre">
          <div class="hijo">
          <img src="${flor.foto}" id="foto">
          <p> Tipo:${flor.tipo} </p>
          <p> Color: ${flor.color} </p>
          <p> Clima: ${flor.clima} </p>
          </div>
      </div>
    `)}
   


    `;
  }
}
customElements.define('second-component', SecondComponent);