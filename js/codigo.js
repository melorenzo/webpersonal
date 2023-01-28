

document.getElementById('boton').onclick = function () {
    document.getElementById("modal-abierto").style.display='block';
}
document.getElementById('cerrar').onclick = function () {
    document.getElementById("modal-abierto").style.display='none';
}

document.getElementById('texto').onclick = function () {
    document.getElementById("parrafo1").style.display='none';
    document.getElementById("parrafo").style.display='block';
}
document.getElementById('atras').onclick = function () {
    document.getElementById("parrafo").style.display='none';
    document.getElementById("parrafo1").style.display='block';
}