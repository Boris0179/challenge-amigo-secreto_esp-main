// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);
//Funcion que lista amigos

function agregarAmigo(){
    let amigo =document.getElementById("amigo").value.toLocaleLowerCase();
    if (amigo.length == 0 )
    {
        alert('Por favor, inserte un nombre');
    } else{
        amigos.push(amigo);
        console.log(amigos);
        limpiarCaja();
    }
    let listaHtml= document.getElementById('listaAmigos');
    listaHtml.innerHTML='';
    for (let index = 0; index < amigos.length; index++) {
        const element = amigos[index];
        listaHtml.innerHTML += `<li>${element}</li>`;
       
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
