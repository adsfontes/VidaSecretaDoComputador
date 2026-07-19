/* =====================================================
   TELA INICIAL
===================================================== */
document.addEventListener("DOMContentLoaded", () => {

    // código da tela inicial

});

const botaoIniciar =

document.getElementById(
    "btnIniciar"
);



const introducao =

document.getElementById(
    "introducao"
);



const botaoContinuar =

document.getElementById(
    "btnContinuar"
);





if(botaoIniciar){


    botaoIniciar.onclick = () => {

    document
        .querySelector(".card-inicial")
        .classList.add("oculto");

    introducao.classList.remove("oculto");

    // força o navegador a desenhar a tela
    introducao.offsetHeight;

    introducao.classList.add("ativo");

};


}







if (botaoContinuar) {

    botaoContinuar.onclick = () => {

    introducao.classList.remove("ativo");

    setTimeout(() => {

        introducao.classList.add("oculto");

        window.location.href = "pages/mapa.html";

    },700);

};

}



