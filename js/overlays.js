require('dotenv'); //REQUIRE ES SOLO DE NODE.JS ASI QUE TENGO Q MIRAR COMO HACER BACKEND CON NODE.JS!!!!!
const tokenDiscordBot = process.env.TOKENDISCORDBOT;
const ID = ["#2C8QU2PLC", "#2UVYV998P", "#2UVYV998P", "#2R0L2CG9R", "#2G9U2P8L0", "#2G9U2P8L0", "#2VQLPVQJG"];


window.addEventListener("load", () => {
    middleBoardInicioOverlaySetValue();
});

async function middleBoardInicioOverlaySetValue() {
const middleBoardInicioOverlay = document.getElementById("middleBoardInicioOverlay");
     const randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 0) {
            const requestDiscordMembers = await fetch("https://discord.com/api/v10/guilds/1093864130030612521?with_counts=true", {
              method: "GET",
              headers: {
                "Authorization": `Bot ${tokenDiscordBot}`,
                "Content-Type": "application/json"
              }
            });    
            const responseDiscordMembers = await requestDiscordMembers.json();
            const middleBoardInicioOverlayValue0 = `Discord con ${responseDiscordMembers.approximate_member_count} miembros`;
            const middleBoardInicioOverlayValue0Format = /^Discord con \d+ miembros$/;
            if (middleBoardInicioOverlayValue0Format.test(middleBoardInicioOverlay.innerText)) {
                middleBoardInicioOverlaySetValue();
            } else {
                middleBoardInicioOverlay.innerText = middleBoardInicioOverlayValue0;
            }
    } else if (randomNumber === 1) {
            const requestDiscordMembersOnline = await fetch("https://discord.com/api/v10/guilds/1093864130030612521?with_counts=true", {
                method: "GET",
                headers: {
                    "Authorization": `Bot ${tokenDiscordBot}`,
                    "Content-Type": "application/json"
                }
            });
            const responseDiscordMembersOnline = await requestDiscordMembersOnline.json();
            const middleBoardInicioOverlayValue1 = `Discord con ${responseDiscordMembersOnline.approximate_presence_count} miembros activos`;
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