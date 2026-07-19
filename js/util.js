

/* =====================================================
   CONFIGURAÇÕES DO JOGO
===================================================== */


const configuracaoJogo = {


    xpPorMissao: 100,


    totalMissoes: 8,



    personagensOrdem: [


        "cpu",

        "ram",

        "ssd",

        "gpu",

        "placamae",

        "firewall",

        "internet",

        "arquivos"


    ]


};



/* =====================================================
   NAVEGAÇÃO
===================================================== */


function voltarMapa(){


    window.location.href =

    "mapa.html";


}






const botaoMapa =

document.getElementById(
    "btnVoltarMapa"
);



if(botaoMapa){


    botaoMapa.onclick = ()=>{


        voltarMapa();


    };


}





