window.addEventListener("message", event => {
    if (event.origin === window.location.origin) {
        if (event.data === "topBoardTsComunityBrawlOnclick") {
            topBoardTsComunityBrawlOnclick();
        } else if (event.data === "topBoardInicioOnclick") {
            topBoardInicioOnclick();
        } else if (event.data === "topBoardDiscordOnclick") {
            topBoardDiscordOnclick();
        } else if (event.data === "topBoardClubesOnclick") {
            topBoardClubesOnclick();
        } else if (event.data === "topBoardEquipoCompetitivoOnclick") {
            topBoardEquipoCompetitivoOnclick();
        } else if (event.data === "topBoardValoracionesOnclick") {
            topBoardValoracionesOnclick();
        } else if (event.data === "topBoardRedesSocialesOnclick") {
            topBoardRedesSocialesOnclick();
        } else if (event.data === "topBoardSoporteOnclick") {
            topBoardSoporteOnclick();
        } else if (event.data === "topBoardSobreNosotrosOnclick") {
            topBoardSobreNosotrosOnclick();
        }
    }
});


//TOPBOARD
function topBoardTsComunityBrawlOnclick() {
    if (window.location.href != "https://tumonulo.github.io/TSComunityBrawl/") {
        window.location.href = "https://tumonulo.github.io/TSComunityBrawl/";
    }
}
function topBoardInicioOnclick() {
    if (window.location.href != "https://tumonulo.github.io/TSComunityBrawl/") {
        window.location.href = "https://tumonulo.github.io/TSComunityBrawl/";
    }
    const middleBoardInicio = document.getElementById('middleBoardInicio');
    middleBoardInicio.scrollIntoView({ behavior: 'smooth' });
}
function topBoardDiscordOnclick() {
    if (window.location.href != "https://tumonulo.github.io/TSComunityBrawl/") {
        window.location.href = "https://tumonulo.github.io/TSComunityBrawl/";
    }
    const middleBoardDiscord = document.getElementById('middleBoardDiscord');
    const middleBoardDiscordPosition = middleBoardDiscord.getBoundingClientRect().top;
    const middleBoardDiscordPositionToScroll = window.scrollY + middleBoardDiscordPosition - 100;
    window.scrollTo({
        top: middleBoardDiscordPositionToScroll,
        behavior: 'smooth'
    });
}
function topBoardClubesOnclick() {
    if (window.location.href != "https://tumonulo.github.io/TSComunityBrawl/") {
        window.location.href = "https://tumonulo.github.io/TSComunityBrawl/";
    }
    const middleBoardClubes = document.getElementById('middleBoardClubes');
    const middleBoardClubesPosition = middleBoardClubes.getBoundingClientRect().top;
    const middleBoardClubesPositionToScroll = window.scrollY + middleBoardClubesPosition - 38;
    window.scrollTo({
        top: middleBoardClubesPositionToScroll,
        behavior: 'smooth'
    });
}
function topBoardEquipoCompetitivoOnclick() {
    if (window.location.href != "https://tumonulo.github.io/TSComunityBrawl/") {
        window.location.href = "https://tumonulo.github.io/TSComunityBrawl/";
    }
    const middleBoardEquipoCompetitivo = document.getElementById('middleBoardEquipoCompetitivo');
    const middleBoardEquipoCompetitivoPosition = middleBoardEquipoCompetitivo.getBoundingClientRect().top;
    const middleBoardEquipoCompetitivoPositionToScroll = window.scrollY + middleBoardEquipoCompetitivoPosition - 38;
    window.scrollTo({
        top: middleBoardEquipoCompetitivoPositionToScroll,
        behavior: 'smooth'
    });
}
function topBoardValoracionesOnclick() {
    if (window.location.href != "https://tumonulo.github.io/TSComunityBrawl/") {
        window.location.href = "https://tumonulo.github.io/TSComunityBrawl/";
    }
    const middleBoardValoraciones = document.getElementById('middleBoardValoraciones');
    const middleBoardValoracionesPosition = middleBoardValoraciones.getBoundingClientRect().top;
    const middleBoardValoracionesPositionToScroll = window.scrollY + middleBoardValoracionesPosition - 38;
    window.scrollTo({
        top: middleBoardValoracionesPositionToScroll,
        behavior: 'smooth'
    });
}
function topBoardRedesSocialesOnclick() {
    if (window.location.href != "https://tumonulo.github.io/TSComunityBrawl/") {
        window.location.href = "https://tumonulo.github.io/TSComunityBrawl/";
    }
    const middleBoardRedesSociales = document.getElementById('middleBoardRedesSociales');
    const middleBoardRedesSocialesPosition = middleBoardRedesSociales.getBoundingClientRect().top;
    const middleBoardRedesSocialesPositionToScroll = window.scrollY + middleBoardRedesSocialesPosition - 38;
    window.scrollTo({
        top: middleBoardRedesSocialesPositionToScroll,
        behavior: 'smooth'
    });
}
function topBoardSoporteOnclick() {
    if (window.location.href != "https://tumonulo.github.io/TSComunityBrawl/") {
        window.location.href = "https://tumonulo.github.io/TSComunityBrawl/";
    }
    const middleBoardSoporte = document.getElementById('middleBoardSoporte');
    const middleBoardSoportePosition = middleBoardSoporte.getBoundingClientRect().top;
    const middleBoardSoportePositionToScroll = window.scrollY + middleBoardSoportePosition - 38;
    window.scrollTo({
        top: middleBoardSoportePositionToScroll,
        behavior: 'smooth'
    });
}
function topBoardSobreNosotrosOnclick() {
    if (window.location.href != "https://tumonulo.github.io/TSComunityBrawl/") {
        window.location.href = "https://tumonulo.github.io/TSComunityBrawl/";
    }
    const middleBoardSobreNosotros = document.getElementById('middleBoardSobreNosotros');
    const middleBoardSobreNosotrosPosition = middleBoardSobreNosotros.getBoundingClientRect().top;
    const middleBoardSobreNosotrosPositionToScroll = window.scrollY + middleBoardSobreNosotrosPosition - 38;
    window.scrollTo({
        top: middleBoardSobreNosotrosPositionToScroll,
        behavior: 'smooth'
    });
}


//MIDDLEBOARDINICIO
function middleBoardInicioDiscordOnclick() {
    window.open("https://discord.gg/8nu3ZdDkp7", "_blank");
}
function middleBoardInicioClubesOnclick() {

}


//MIDDLEBOARDDISCORD
function middleBoardDiscordDiscordOnclick() {
    window.open("https://discord.gg/8nu3ZdDkp7", "_blank");
}
function middleBoardDiscordPostulacionesOnclick() {
    window.location.href = "./Postulaciones.html"
}


//MIDDLEBOARDCLUBES
function middleBoardClubesVerClubesOnclick() {
    window.location.href = "./Clubes.html";
}