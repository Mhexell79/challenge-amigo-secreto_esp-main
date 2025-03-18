// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Se necesitan al menos 2 participantes para el sorteo.");
        return;
    }
    
    

let elegido = amigos[Math.floor(Math.random() * amigos.length)];
mostrarResultado(elegido);
}

function mostrarResultado(elegido) {    
    let lista = document.getElementById("resultado");
    lista.innerHTML = "";
   
        let li = document.createElement("li");
        li.textContent = `Amigo secreto seleccionado: ${elegido}`;
    lista.appendChild(li);
}
       
    

