const button = document.getElementById("enviar");
let entradas = document.querySelector(".entrada");
let texto = document.getElementById("entradaBlog");

button.addEventListener("click", ()=>{
    let entrada = document.createElement("div");
    entrada.className = "nuevaEntrada";

    entrada.innerText=texto.value;

    entradas.appendChild(entrada);


})