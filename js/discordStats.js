require('dotenv'); //REQUIRE ES SOLO DE NODE.JS ASI QUE TENGO Q MIRAR COMO HACER BACKEND CON NODE.JS!!!!!
const tokenDiscordBot = process.env.TOKENDISCORDBOT;

window.addEventListener("load", () => {
    middleBoardDiscordStatsCalculate();
});

async function middleBoardDiscordStatsCalculate() {
    const requestDiscordStats = await fetch("https://discord.com/api/v10/guilds/1093864130030612521?with_counts=true", {
        method: "GET",
        headers: {
          "Authorization": `Bot ${tokenDiscordBot}`,
          "Content-Type":"application/json"
        }
      });    
      const responseDiscordStats = await resquestDiscordStats.json();
      console.log(responseDiscordStats.approximate_member_count);
      middleBoardDiscordStatsSetValue(`members${responseDiscordStats.approximate_member_count}`);
      middleBoardDiscordStatsSetValue(`membersCountOnline${responseDiscordStats.approximate_member_count}`);
    }

function middleBoardDiscordStatsSetValue(number) {
  if (number.startsWith("membersCount")) {
    const middleBoardDiscorMembersCountContainer = document.getElementById("middleBoardDiscord-1.0");
    const middleBoardDiscorMembersCountContainerValue = number.replace('members', '').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    middleBoardDiscorMembersCountContainer.innerText = middleBoardDiscorMembersCountContainerValue;
  } else if (number.startsWith("membersCountOnline")) {
    const middleBoardDiscorMembersCountOnlineContainer = document.getElementById("middleBoardDiscord-1.1");
    const middleBoardDiscorMembersCountOnlineContainerValue = number.replace('membersCountOnline', '').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    middleBoardDiscorMembersCountOnlineContainer.innerText = middleBoardDiscorMembersCountOnlineContainerValue;
  }
}