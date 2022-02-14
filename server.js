const discord = require ("discord.js")
const client = new discord.Client()

client.on("ready", () => {
  console.log("I am ready, my master")
});


client.on("message", message => {
  if(message.content === "!ping") {
    return message.channel.send("Pong " + client.ws.ping)
  }
})

client.login("OTIyODYyNzQ5MDgyNTkxMjYy.YcHo6Q.r3gD3d8VppDPVJ1VgBU9y2mC4wA")
