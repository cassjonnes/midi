/*
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
*/

function tocaSom (idAudio){
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while (contador < 9) {
    let instrumento = listaDeTeclas[contador].classList[1];
    listaDeTeclas[contador].onclick = function () {
        tocaSom(`#som_${instrumento}`);
    }
    contador = contador +1;
    console.log(contador);
}