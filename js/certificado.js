/* =====================================================
   CERTIFICADO
===================================================== */
document.addEventListener("DOMContentLoaded", () => {

    carregarCertificado();

});


function carregarCertificado() {

    const xpFinal = document.getElementById("xpFinal");

    if (xpFinal) {
        xpFinal.textContent = dadosJogo.xp;
    }

}

const botaoReiniciar = document.getElementById("btnJogarNovamente");

if (botaoReiniciar) {

    botaoReiniciar.addEventListener("click", () => {

        localStorage.removeItem("vidaSecretaComputador");

        window.location.href = "../index.html";

    });

}

carregarCertificado();