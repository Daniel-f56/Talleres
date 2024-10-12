//Aqui creamos un componente
class titleverdeUfpso extends HTMLElement{

    constructor(){
        super();

    }

    //Este metodo activa el uso del componente
    connectedCallback(){
        this.innerHTML="<p><b><u>Bienvenidos a la UFPSO</u></b></p>";
        this.style.color="green";
        this.style.fontFamily="arial";
        this.style.fontSize="20px";

    }
}

class bototnCarrito extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = "<button>Ir al carrito</button>";
    }
}

//Aqui definimos como se van a llamar la etiquetas y como las vamos a llamar en el html
window.customElements.define("titleverde-ufpso", titleverdeUfpso);
window.customElements.define("boton-carrito", bototnCarrito);