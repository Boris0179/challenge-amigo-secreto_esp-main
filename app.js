// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
//Funcion que lista amigos
function listarAmigos() {
    let listaHtml= document.getElementById('listaAmigos');
    listaHtml.innerHTML='';
    for (let index = 0; index < amigos.length; index++) {
        const element = amigos[index];
        listaHtml.innerHTML += `<li>${element}</li>`;
       
    }
}

function agregarAmigo(){
    let amigo =document.getElementById("amigo").value.toLocaleUpperCase();
    if (amigo.length == 0 )
    {
        alert('Por favor, inserte un nombre');
    } else{
        amigos.push(amigo);
        limpiarCaja();
        listarAmigos();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
//sortea a los amigos y retira el que ya ha salido en el sorteo
function sortearAmigo() {
    cantList = parseInt(amigos.length);

    if (amigos == '') {
        alert("La lista esta vacia, No hay valores para sortear");
    } else {
        let NumeroGanador = Math.floor(Math.random() * cantList);
        let ganador = amigos[NumeroGanador];

        let listaHtml= document.getElementById('listaAmigos');
        listaHtml.innerHTML='';
        amigos = [];

        let varGanador = document.getElementById('resultado');
        varGanador.innerHTML = `<li>El Amigo Secreto es ${ganador}</li>`;

        console.log(amigos);

    }
}
