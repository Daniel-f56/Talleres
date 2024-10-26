//{}
class titulosElprofebarrientos extends HTMLElement{
    constructor(){
        super();
    }

    //Este metodo activa el uso del componente
    connectedCallback(){
        let shadowRoot= this.attachShadow({mode: 'open'});
        //width: 1720px;
        shadowRoot.innerHTML = `
        <style>
            div {
                background-color: green;
                border-radius: 8px;
                box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                
                font-size: 1.0em;
                color: #ffffff;
                margin: 0 0 20px;
                text-align: center;
                font-weight: bold;
                font-family: cursive;
            }
        </style>
        <div>Derechos reservados El profe Barrientos</div>
        `;
    }
}

class linktexto extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML= `
        <style>
           a{
             text-align: center;
            }
        </style>
        <a href="https://openai.com/index/chatgpt/">Ir chat gpt</a>
        `;
    }
}


class fechahoy extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML= `
        <style>
        div {
          font-size: 20px;
          color: blue;
        }
      </style>
       <div>${this.fecha()}</div>
        `;
    }

    fecha() {
        var today = new Date();
        var dia = String(today.getDate());
        var mes = String(today.getMonth() + 1); //January is 0!
        var ano = today.getFullYear();
    
       return `${dia}/${mes}/${ano}`;
      }
  
}

class bienvenidoshoy extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML= `
        <style>
           div{
              text-align: center;
           }
        </style>
        <div>Bienvenidos son las: ${this.hora()}</div>
        `;
    }

    hora(){
        const now = new Date();
        const horas = now.getHours().toString().padStart(2, '0');
        const minutos = now.getMinutes().toString().padStart(2, '0');
        const segundos = now.getSeconds().toString().padStart(2, '0');
        
        return `${horas}:${minutos}:${segundos}`;
    }
}

class buscarElprofebarrientos extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });
    // Create caja de texto
    const buscarcaja = document.createElement("input");
    buscarcaja.type = 'text';
    buscarcaja.name = 'buscar';
    buscarcaja.id = 'buscar';
    buscarcaja.placeholder = 'Burcar con ChatGPT';

    buscarcaja.setAttribute("class", "buscarcaja buscarcaja:focus");
    const style = document.createElement("style");
    style.textContent = `
      .buscarcaja {       
       
      width: 1275px;           /* Ancho de la caja de texto */
      padding: 10px;         /* Espaciado interno */
      border: 2px solid #007bff; /* Color y grosor del borde */
      border-radius: 20px;   /* Esquinas redondeadas */
      outline: none;         /* Quitar el contorno al hacer clic */
      transition: border-color 0.3s; /* Transición suave para el color del borde */

      }
        .buscarcaja:focus {
              border-color: #CD5C5C;  /* Color del borde al enfocar */
        }     
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);   
    shadow.appendChild(buscarcaja);
    
    }
}

//Definir el componente
customElements.define('titulos-elprofebarrientos', titulosElprofebarrientos);
customElements.define('link-texto', linktexto);
customElements.define('fecha-hoy', fechahoy);
customElements.define('bienvenidos-hoy', bienvenidoshoy);
customElements.define('buscar-elprofebarrientos', buscarElprofebarrientos);