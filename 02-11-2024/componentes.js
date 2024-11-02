//{}

class ayudaSpan extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            span{
                font-family: "Trebuchet MS", Verdana, sans-serif;
                font-size: 30px;
                color: #ffcc80;
                font-weight: bold; 
                text-decoration: underline;
                background-color: #bffcc6;
                border: 1px solid #000; 
                border-radius: 5px;
                padding: 10px 20px; 
                border: none; 
            }
        </style>
        <span>
            Esta es una ayuda
        </span>
        `;
    }
}

class botonNotificaciones extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            button{
                font-family: "Trebuchet MS", Verdana, sans-serif;
                font-size: 16px; 
                padding: 10px 20px; 
                background-color: #84a59e;
                color: #f7ede3; 
                border: none; 
                border-radius: 5px; 
                align-items: center; 
                cursor: pointer;
            }
        </style>
        <button>
           Notificaciones
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
           </svg>
        </button>
        
        `;
    }
}


class cajaPersonalizada extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <style>
            .btn-custom{
               font-family: "Trebuchet MS", Verdana, sans-serif;
               font-size: 16px; 
               padding: 10px; 
            }
            .input-custom{
               font-family: "Trebuchet MS", Verdana, sans-serif;
               background-color: #ffda9e;
               font-size: 16px;
               padding: 10px; 
            }
        </style>
        <div class="input-group mb-3">
            <input type="password" class="form-control input-custom" placeholder="Ingrese su contraseña" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-success btn-custom" type="button" id="button-addon2">Ingresar</button>
        </div>
        `;
    }
}


class cuponDescuento extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <style>
            .input-custom{
                font-family: "Trebuchet MS", Verdana, sans-serif;
                font-size: 16px; 
                padding: 10px; 
                background-color: #b2e2f2;
            }
        </style>
        <input class="form-control input-custom" type="text" placeholder="Cupon de descuento" aria-label="default input example">
        `;
    }
}


customElements.define('ayuda-span', ayudaSpan);
customElements.define('boton-notificaciones', botonNotificaciones);
customElements.define('caja-personalizada', cajaPersonalizada);
customElements.define('cupon-descuento', cuponDescuento);