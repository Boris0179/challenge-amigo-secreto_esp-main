// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);
function agregarAmigo(){
    let amigo =document.getElementById("amigo").value;
    console.log(amigo);
    if (amigo.length == 0 )
    {
        alert("El campo esta Vacio");
    } else{
        amigos.push(amigo);
        console.log(amigos);
    }

    return;
}
