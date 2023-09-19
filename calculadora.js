let total = 0;
let operador1 = 0;
let operador2 = 0;
let contador = 0;
let content = "";

// Otros elementos
const del = document.getElementById("del").addEventListener("click", ()=>{
    content = screen.value;
    screen.value = content.substring(0,content.length-1);

});

const reset = document.getElementById("C").addEventListener("click", ()=>{screen.value="";screenTotal.value=""; total=0})

// Capturamos los elementos de visualizacion de nuestra calculadora
let screen = document.getElementById("screen");
let screenTotal = document.getElementById("total");

// Captura de los elementos operacionales
const sumar = document.getElementById("+");
const restar = document.getElementById("-");
const mul = document.getElementById("X");
const divi = document.getElementById("/")
const eq = document.getElementById("=");

// Captura de los elementos numericos de la calculadora
const zero = document.getElementById("0").addEventListener("click", ()=>{screen.value+=0});
const one = document.getElementById("1").addEventListener("click", ()=>{screen.value+=1});
const two = document.getElementById("2").addEventListener("click", ()=>{screen.value+=2});
const three = document.getElementById("3").addEventListener("click", ()=>{screen.value+=3});
const four = document.getElementById("4").addEventListener("click", ()=>{screen.value+=4});
const five = document.getElementById("5").addEventListener("click", ()=>{screen.value+=5});
const six = document.getElementById("6").addEventListener("click", ()=>{screen.value+=6});
const seven = document.getElementById("7").addEventListener("click", ()=>{screen.value+=7});
const eight = document.getElementById("8").addEventListener("click", ()=>{screen.value+=8});
const nine = document.getElementById("9").addEventListener("click", ()=>{screen.value+=9});
const comma = document.getElementById(",").addEventListener("click", ()=>{screen.value+="."});

// Arrays para orden de operaciones
let ultOperador = "";



// Metodos de las operaciones
// Sumar
sumar.addEventListener("click", ()=>{
    // Evitamos los NaN value, en caso de querer calcular directamente desde el total
    if(screen.value==""){
        screen.value=0;
    }
    // Al hacer click en sumar, guardamos el valor escrito en una memoria total.
    total += parseFloat(screen.value);
    // Borramos el valor escrito para que no interfiera en futuras operaciones
    screen.value = "";
    // Mostramos la solucion.
    screenTotal.value = total;
    // Almacenamos si esta es la ultima operacion realizada, para el funcionamiento del boton =
    ultOperador="+";

});

// Restar
restar.addEventListener("click", ()=>{
    // Evitamos los NaN value, en caso de querer calcular directamente desde el total
    if(screen.value==""){
        screen.value=0;
    }
    // Al hacer click en restar, guardamos el valor escrito en la memoria total.
    total = Math.abs(parseFloat(screen.value) - total) ;
    // Borramos el valor escrito para que no interfiera en futuras operaciones
    screen.value = "";
    // Mostramos la solucion.
    screenTotal.value = total;
    // Almacenamos si esta es la ultima operacion realizada, para el funcionamiento del boton =
    ultOperador="-";

});

// Multiplicar
mul.addEventListener("click", ()=>{
    // Evitamos los NaN value, en caso de querer calcular directamente desde el total
    if(screen.value==""){
        screen.value=1;
    }
    // Tomamos el valor del primer numero introducido.
    operador1 = parseFloat(screen.value);
    // Si aun no hemos realizado ninguna operacion, debemos evitar multiplicar por 0, asi que le asignamos un 1.
    if(total==0){
        total = 1;
    }
    total = total * operador1;
    screen.value = "";
    // Mostramos la solucion.
    screenTotal.value = total;
    // Almacenamos si esta es la ultima operacion realizada, para el funcionamiento del boton =
    ultOperador="x";
});

// Multiplicar
divi.addEventListener("click", ()=>{
    // Evitamos los NaN value, en caso de querer calcular directamente desde el total
    if(screen.value==""){
        screen.value=1;
    }
    // Tomamos el valor del primer numero introducido.
    operador1 = parseFloat(screen.value);
    // Si aun no hemos realizado ninguna operacion, debemos evitar dividir entre 0, asi que le asignamos un 1.

    // Almacenamos si esta es la ultima operacion realizada, para el funcionamiento del boton =
    ultOperador="/";
    if(operador1 == 0){
        screenTotal.value = "No puede dividir entre 0";
    }else if(total == 0){
        total = operador1 / 1;
        screen.value = "";
        // Mostramos la solucion.
        screenTotal.value = total;
    }else{
        total = total / operador1;
        screen.value = "";
        // Mostramos la solucion.
        screenTotal.value = total;


    }

});

eq.addEventListener("click", ()=>{
    // Evitamos los NaN value, en caso de querer calcular directamente desde el total
    if(screen.value==""){
        screen.value=0;
    }
    // Al pulsar igual, comprobamos cual fue la ultima operacion realizada, para realizar el calculo del valor restante.
    if(ultOperador == "+"){
        total += parseFloat(screen.value);
    }else if(ultOperador == "x"){
        total *= parseFloat(screen.value);
    }else if(ultOperador == "/"){
        if(parseFloat(screen.value)==0) screen.value = "No puede dividir entre 0";
        total /= parseFloat(screen.value);
    }else if(ultOperador == "-"){
        total -= parseFloat(screen.value);
    }else{
        total = parseFloat(screen.value);
    }
    screenTotal.value = parseFloat(total);
    screen.value="";
});