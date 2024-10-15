require('dotenv');
const tokenDiscordBot = process.env.TOKENDISCORDBOT;
const ID = ["#2C8QU2PLC", "#2UVYV998P", "#2UVYV998P", "#2R0L2CG9R", "#2G9U2P8L0", "#2G9U2P8L0", "#2VQLPVQJG"];


window.addEventListener("load", () => {
    middleBoardInicioOverlaySetValue();
});

function middleBoardInicioOverlaySetValue() {
const middleBoardInicioOverlay = document.getElementById("middleBoardInicioOverlay");
     const randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 0) {
        (async () => {
            const requestDiscordMembers = fetch("", => {
                headers {

                } BODY: String.json
            })




            const middleBoardInicioOverlayValue0 = `Discord con x miembros`;
            const middleBoardInicioOverlayValue0Format = /^Discord con \d+ miembros$/;
            if (middleBoardInicioOverlayValue0Format.test(middleBoardInicioOverlay.innerText)) {
                middleBoardInicioOverlaySetValue();
            } else {
                middleBoardInicioOverlay.innerText = middleBoardInicioOverlayValue0;
            }
        })()
    } else if (randomNumber === 1) {
        const middleBoardInicioOverlayValue1 = `Discord con x miembros activos`;
        const middleBoardInicioOverlayValue1Format = /^Discord con \d+ miembros activos$/;
        if (middleBoardInicioOverlayValue1Format.test(middleBoardInicioOverlay.innerText)) {
            middleBoardInicioOverlaySetValue();
        } else {
            middleBoardInicioOverlay.innerText = middleBoardInicioOverlayValue1;
        }
    } else if (randomNumber === 2) {
        const middleBoardInicioOverlayValue2 = `${ID.length} clubes de Brawl Stars`;
        const middleBoardInicioOverlayValue2Format = /^\d+clubes de Brawl Stars$/;
        if (middleBoardInicioOverlayValue2Format.test(middleBoardInicioOverlay.innerText)) {
            middleBoardInicioOverlaySetValue();
        } else {
            middleBoardInicioOverlay.innerText = middleBoardInicioOverlayValue2;
        }
        } else if (randomNumber === 3) {
            const middleBoardInicioOverlayValue3 = "ha salido 3";
        if (middleBoardInicioOverlayValue3 === middleBoardInicioOverlay.innerText) {
            middleBoardInicioOverlaySetValue();
        } else {
            middleBoardInicioOverlay.innerText = middleBoardInicioOverlayValue3;
        }
    }
}