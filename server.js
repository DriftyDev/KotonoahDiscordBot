const Discord = require("discord.js");
const  client = new Discord.Client();
const datos = require("./datos.json");
const {Client, Attachment} = require("discord.js");
let prefix = datos.prefix


client.on("ready", () => {
console.log("Encendido")
client.user.setActivity('Hyliedz Retro', { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});

client.on("message", (message) => {
if(message.content.startsWith(prefix+"secret")){
  const embed = new Discord.MessageEmbed()
  .setDescription("**COMANDOS SECRETOS**")
  .addField("**Vanliedz**", "`!hr MUERTE AL DIOS VANLIEDZ`")
  .addField("**Invocar a Vanliedz**", "`!hr Van inv`")

  message.channel.send({embed});

}

if(message.content.startsWith(prefix+"MUERTE AL DIOS VANLIEDZ")){
  message.channel.send({embed: {
    color: 3447003,
    description: "**MUERTE A TI PVTO**"
  }
});
}

if(message.content.startsWith(prefix+"meme")){
  number = 13;
  var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
  switch (random) {
      case 1: message.channel.send("**Meme**", {files: ["./images/1.jpg"]}); break;
      case 2: message.channel.send("**Meme**", {files: ["./images/2.jpg"]}); break;
      case 3: message.channel.send("**Meme**", {files: ["./images/3.jpg"]}); break;
      case 4: message.channel.send("**Meme**", {files: ["./images/4.jpg"]}); break;
      case 5: message.channel.send("**Meme**", {files: ["./images/5.gif"]}); break;
      case 6: message.channel.send("**Meme**", {files: ["./images/6.gif"]}); break;
      case 7: message.channel.send("**Meme**", {files: ["./images/meme1.jpg"]}); break;
      case 8: message.channel.send("**Meme**", {files: ["./images/meme2.jpg"]}); break;
      case 9: message.channel.send("**Meme**", {files: ["./images/meme3.jpg"]}); break;
      case 10: message.channel.send("**Meme**", {files: ["./images/meme4.jpg"]}); break;
      case 11: message.channel.send("**Meme**", {files: ["./images/meme5.jpg"]}); break;
      case 12: message.channel.send("**Meme**", {files: ["./images/meme6.jpg"]}); break;
      case 13: message.channel.send("**Meme**", {files: ["./images/meme7.jpg"]}); break;
      case 14: message.channel.send("**Meme**", {files: ["./images/meme8.jpg"]}); break;
  }

  }


if(message.content.startsWith(prefix+"Van inv")){
  var Mensajes
  message.channel.send("Has invocado a **Vanliedz**", {files: ["./images/1.jpg"]});
  }





if(message.content.startsWith(prefix+"help")){
  const embed = new Discord.MessageEmbed()
  .setDescription("**Ayuda**")
  .addField("**Moderación**", "`!hr m help`")
  .addField("**Memes**", "`!hr meme` **(BUSCO MEMES HAY SOLO 14)**")
  .addField("**Perritos :D**", "`!hr dog`")

  message.channel.send({embed});
}
if(message.content.startsWith(prefix+"m help")){
  const embed = new Discord.MessageEmbed()
  .setDescription("**Ayuda de Moderación**")
  .addField("**Banear**", "`!hr ban [Persona]`")
  .addField("**Limpiar chat**", "`!hr tempban [Persona]` **(DESARROLLO)**")
  .addField("**Kickear**", "`!hr kick [Persona]`")
  .addField("**Limpiar chat**", "`!hr clear [Número de mensajes]` **(DESARROLLO)**")

  message.channel.send({embed});
}


  
});
client.on("message", message => {
  if(message.content.indexOf(datos.prefix) !== 0) return;

  // Definiendo los argumentos
  const args = message.content.slice(datos.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Procesador de comandos
  try {
    console.log("[INFO]: " + message.author.tag + " executed '" + command + "'");
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args, Discord);
  } catch (err) {
  }

  
});
client.login(datos.token);
