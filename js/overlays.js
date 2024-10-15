const ID = ["#2C8QU2PLC", "#2UVYV998P", "#2UVYV998P", "#2R0L2CG9R", "#2G9U2P8L0", "#2G9U2P8L0", "#2VQLPVQJG"]


window.addEventListener("load", () => {
    middleBoardInicioOverlaySetValue();
});

function middleBoardInicioOverlaySetValue() {
const middleBoardInicioOverlay = document.getElementById("middleBoardInicioOverlay");
     const randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 0) {
        const middleBoardInicioOverlayValue0 = `Discord con x miembros`;
        if (middleBoardInicioOverlayValue0 === middleBoardInicioOverlay.innerText) {
            middleBoardInicioOverlaySetValue();
        } else {
            middleBoardInicioOverlay.innerText = middleBoardInicioOverlayValue0;
        }
    } else if (randomNumber === 1) {
        const middleBoardInicioOverlayValue1 = `Discord con x miembros activos`;
        if (middleBoardInicioOverlayValue1 === middleBoardInicioOverlay.innerText) {
            middleBoardInicioOverlaySetValue();
        } else {
            middleBoardInicioOverlay.innerText = middleBoardInicioOverlayValue1;
        }
    } else if (randomNumber === 2) {// ZERO GAy
        const middleBoardInicioOverlayValue2 = `${ID.length} clubes de Brawl Stars`;
        if (middleBoardInicioOverlayValue2 === middleBoardInicioOverlay.innerText) {
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