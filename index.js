// =========ENCRIPTAR============

/*1. Se capturan los datos implicados en el proceso encriptar, que serían:
input  o caja donde se introducirá el texto a encriptar, botón encriptar,
y la caja donde se reflejará el resultado. */

const input = document.querySelector("#text-input"); 
const botonEncriptar = document.querySelector(".btn-encriptar");
const resultadoEncriptado = document.querySelector(".texto-resultado");

/* 
2.Se llama la función que une a todas las variables y funciones involucradas en el proceso encriptar (aunque aún
    no hemos creado la función encriptar, se crea más abajo)
*/
function clickParaEncriptar(){
   
    resultadoEncriptado.textContent = encriptar( input.value );
    ocultarAdelante();

}

/* 
3. Se crea la función encriptar que es la que describe lo que ocurre con la cadena que deposites en el input.
Se crea la variable resultado que va a almacenar lo que se va creando a lo largo del recorrido por la cadena introducida.
y al final se retorna 'resultado'.
*/

function encriptar(cadena) {
    
    let resultado = "";
    for (let i = 0; i < cadena.length; i++) {
        const element = cadena[i];
        switch (element) {
            case "a":
                resultado += "ai";                          
                break;
            case "e":
                resultado += "enter";
                break;
            case "i":
                resultado += "imes";
                break;
            case "o":
                resultado += "ober";
                break;
            case "u":
                resultado += "ufat";
                break;
        
            default: 
                resultado += element;
                break;
        }
        
       
    }

    return resultado;
}

//función para ocultar algunos elementos cuando se encripte el texto.
const texto = document.querySelector(".text-h2");

function ocultarAdelante(){
    imgmuneco.classList.add("ocultar");
    text2.classList.add("ocultar");
    texto.classList.add("ocultar");
}

// 4. Se llama la función inicial click, la cual se activa cuando se dé click en el botón encriptar.

botonEncriptar.onclick = clickParaEncriptar;



// =====DESENCRIPTAR================================================================

// 1. Captura de datos y creación de constantes:

const botonParaDesencriptar = document.querySelector(".btn-desencriptar");

/* 
2.Se llama la función que une a todas las variables y funciones involucradas en el proceso desencriptar (aunque aún
    no hemos creado la función desencriptar, se crea más abajo)
*/

function clickParaDesencriptar(){
    resultadoEncriptado.textContent = desencriptar( input.value );
    ocultarAdelante();
}

/* 
3. Se crea la función desencriptar
*/

function desencriptar(cadena){
    let resultado = "";
    for (let i = 0; i < cadena.length; i++) {
        const element = cadena[i];
        switch (element){
            case "a":
                resultado += "a";
                i = i+1;                       
                break;
            case "e":
                resultado += "e";
                i = i+4;
                break;
            case "i":
                resultado += "i";
                i = i+3;
                break;
            case "o":
                resultado += "o";
                i = i+3;
                break;
            case "u":
                resultado += "u";
                i = i+3;
                break;
        
            default: 
                resultado += element;
                break;
        }
        
       
    }

    return resultado;
        
}

// 3. Se llama la función inicial click, la cual se activa cuando se dé click en el botón encriptar.

botonParaDesencriptar.onclick = clickParaDesencriptar;