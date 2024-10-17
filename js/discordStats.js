require('dotenv'); //REQUIRE ES SOLO DE NODE.JS ASI QUE TENGO Q MIRAR COMO HACER BACKEND CON NODE.JS!!!!!
const tokenDiscordBot = process.env.TOKENDISCORDBOT;

window.addEventListener("load", () => {
    middleBoardDiscordStatsSetValue();
});

async function middleBoardDiscordStatsSetValue() {
    const requestDiscordStats = await fetch("https://discord.com/api/v10/guilds/1093864130030612521?with_counts=true", {
        method: "GET",
        headers: {
          "Authorization": `Bot ${tokenDiscordBot}`,
          "Content-Type":"application/json"
        }
      });    
      const responseDiscordStats = await resquestDiscordStats.json();
      //pasar-al-html y ponerlo con k y .
    }
