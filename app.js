//Variables
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const unListaAmigos = document.getElementById("listaAmigos");
const unResultado = document.getElementById("resultado")

//Agregar amigos a la lista
function agregarAmigo(){
    const nombre = inputAmigo.value.trim();
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (nombre === "" || !regex.test(nombre)) {
        alert("Debes ingresar un nombre válido");
        return;
    }
    
   listaAmigos.push(inputAmigo.value);
   unListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};

//Sorteo de amigos
function sortearAmigo(){
    const nombreRandom = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[nombreRandom];
    unResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
}


