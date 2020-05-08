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
  .addField("**Matar a Kotonoah**", "`!hr MUERTE A KOTONOAH`")

  message.channel.send({embed});

}

if(message.content.startsWith(prefix+"MUERTE AL DIOS VANLIEDZ")){
  message.channel.send({embed: {
    color: 3447003,
    description: "**MUERTE A TI PVTO**"
  }
});
}

if(message.content.startsWith(prefix+"MUERTE A KOTONOAH")){
  message.channel.send({embed: {
    color: 3447003,
    description: "**NO-O QUIERO-O MOR-ÍR-R**"
  }
});
}

if(message.content.startsWith(prefix+"meme")){
  number = 20;
  var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
  switch (random) {
      case 1: message.channel.send("**Compra miembro**", {files: ["./images/1.jpg"]}); break;
      case 2: message.channel.send("**COVID-19**", {files: ["./images/2.jpg"]}); break;
      case 3: message.channel.send("**Mute**", {files: ["./images/3.jpg"]}); break;
      case 4: message.channel.send("**Expresiones de users**", {files: ["./images/4.jpg"]}); break;
      case 5: message.channel.send("**C-O-F-F-I-N  D-A-N-C-E**", {files: ["./images/5.gif"]}); break;
      case 6: message.channel.send("**¡Alto!, ¡FBI!, Wacho**", {files: ["./images/6.gif"]}); break;
      case 7: message.channel.send("**Meme**", {files: ["./images/meme1.jpg"]}); break;
      case 8: message.channel.send("**Meme**", {files: ["./images/meme2.jpg"]}); break;
      case 9: message.channel.send("**Meme**", {files: ["./images/meme3.jpg"]}); break;
      case 10: message.channel.send("**Meme**", {files: ["./images/meme4.jpg"]}); break;
      case 11: message.channel.send("**Meme**", {files: ["./images/meme5.jpg"]}); break;
      case 12: message.channel.send("**Meme**", {files: ["./images/meme6.jpg"]}); break;
      case 13: message.channel.send("**Meme**", {files: ["./images/meme7.jpg"]}); break;
      case 14: message.channel.send("**Meme**", {files: ["./images/meme8.jpg"]}); break;
      case 15: message.channel.send("**Drifty...**", {files: ["./images/meme10.png"]}); break;
      case 16: message.channel.send("**Spook...**", {files: ["./images/meme9.jpg"]}); break;
      case 17: message.channel.send("**Eze...**", {files: ["./images/meme11.jpg"]}); break;
      case 18: message.channel.send("**Xray.png...**", {files: ["./images/meme12.jpg"]}); break;
      case 19: message.channel.send("**Ban.exe...**", {files: ["./images/meme13.jpg"]}); break;
      case 20: message.channel.send("**hacker.exe**", {files: ["./images/meme14.jpg"]}); break;
  }

  }


if(message.content.startsWith(prefix+"Van inv")){
  message.channel.send("Has invocado a **Vanliedz**", {files: ["./images/1.jpg"]});
  }


  if(message.content.startsWith(prefix+"kg")){
    message.channel.send("Hola, soy **Kotonoah** y he abandonado este servidor, porque necesito actualizarme para volverme a meter ve a este link"+" https://www.kotonoah.tk");
    }





if(message.content.startsWith(prefix+"help")){
  const embed = new Discord.MessageEmbed()
  .setDescription("**Ayuda**")
  .addField("**Moderación**", "`!hr m help`")
  .addField("**Memes**", "`!hr meme`")
  .addField("**Perritos :D**", "`!hr dog`")

  message.channel.send({embed});
}
if(message.content.startsWith(prefix+"m help")){
  const embed = new Discord.MessageEmbed()
  .setDescription("**Ayuda de Moderación**")
  .addField("**Banear**", "`!hr ban [Persona]`")
  .addField("**Banear por un tiempo**", "`!hr tempban [Persona] [Tiempo]` **(DESARROLLO)**")
  .addField("**Kickear**", "`!hr kick [Persona]`")
  .addField("**Limpiar chat**", "`!hr clear [Número de mensajes]` **(DESARROLLO)**")
  .addField("**Mutear**", "`!hr mute [Persona]` **(DESARROLLO)**")
  .addField("**Mutear por un tiempo**", "`!hr tempmute [Persona] [Tiempo]` **(DESARROLLO)**")
  .addField("**Unmutear**", "`!hr unmute [Persona]` **(DESARROLLO)**")

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
