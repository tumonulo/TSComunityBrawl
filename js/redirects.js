function topBoardTsComunityBrawlOnclick() {
    if (window.location.href !== "https://tumonulo.github.io/TSComunityBrawl/") {
        window.location.href = "https://tumonulo.github.io/TSComunityBrawl/";
    }
}
function topBoardInicioOnclick() {
    const middleBoardInicio = document.getElementById('middleBoardInicio');
    middleBoardInicio.scrollIntoView({ behavior: 'smooth' });
}

function topBoardDiscordOnclick() {
    const middleBoardDiscord = document.getElementById('middleBoardDiscord');
    const middleBoardDiscordPosition = middleBoardDiscord.getBoundingClientRect().top;
    const middleBoardDiscordPositionToScroll = window.scrollY + middleBoardDiscordPosition - 88;
    window.scrollTo({
        top: middleBoardDiscordPositionToScroll,
        behavior: 'smooth'
    });
}
function topBoardClubesOnclick() {
    const middleBoardClubes = document.getElementById('middleBoardClubes');
    const middleBoardClubesPosition = middleBoardClubes.getBoundingClientRect().top;
    const middleBoardClubesPositionToScroll = window.scrollY + middleBoardClubesPosition - 88;
    window.scrollTo({
        top: middleBoardClubesPositionToScroll,
        behavior: 'smooth'
    });
}
function topBoardEquipoCompetitivoOnclick() {
    const middleBoardEquipoCompetitivo = document.getElementById('middleBoardEquipoCompetitivo');
    const middleBoardEquipoCompetitivoPosition = middleBoardEquipoCompetitivo.getBoundingClientRect().top;
    const middleBoardEquipoCompetitivoPositionToScroll = window.scrollY + middleBoardEquipoCompetitivoPosition - 88;
    window.scrollTo({
        top: middleBoardEquipoCompetitivoPositionToScroll,
        behavior: 'smooth'
    });
}
function topBoardRedesSocialesOnclick() {
    const middleBoardRedesSociales = document.getElementById('middleBoardRedesSociales');
    const middleBoardRedesSocialesPosition = middleBoardRedesSociales.getBoundingClientRect().top;
    const middleBoardRedesSocialesPositionToScroll = window.scrollY + middleBoardRedesSocialesPosition - 88;
    window.scrollTo({
        top: middleBoardRedesSocialesPositionToScroll,
        behavior: 'smooth'
    });
}
function topBoardSoporteOnclick() {
    const middleBoardSoporte = document.getElementById('middleBoardSoporte');
    const middleBoardSoportePosition = middleBoardSoporte.getBoundingClientRect().top;
    const middleBoardSoportePositionToScroll = window.scrollY + middleBoardSoportePosition - 88;
    window.scrollTo({
        top: middleBoardSoportePositionToScroll,
        behavior: 'smooth'
    });
}
function topBoardSobreNosotrosOnclick() {
    const middleBoardSobreNosotros = document.getElementById('middleBoardSobreNosotros');
    const middleBoardSobreNosotrosPosition = middleBoardSobreNosotros.getBoundingClientRect().top;
    const middleBoardSobreNosotrosPositionToScroll = window.scrollY + middleBoardSobreNosotrosPosition - 88;
    window.scrollTo({
        top: middleBoardSobreNosotrosPositionToScroll,
        behavior: 'smooth'
    });
}

function middleBoardInicioDiscordOnclick() {
    window.open("https://discord.gg/8nu3ZdDkp7", "_blank");
}
function middleBoardInicioClubesOnclick() {

}