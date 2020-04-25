const Discord = require("discord.js");
const  client = new Discord.Client();
const datos = require("./datos.json");
const {Client, Attachment} = require("discord.js");
let prefix = datos.prefix


client.on("ready", () => {
console.log("Encendido")
});

client.on("guildMemberAdd", (member) => {

  console.log("Un nuevo usuario ha venido")
  memeber.send("¡Bienvenido a **Hyliedz Retro**!");
});

client.on("message", (message) => {
if(message.content.startsWith(prefix+"secret")){
  const embed = new Discord.MessageEmbed()
  .setDescription("**COMANDOS SECRETOS**")
  .addField("**Vanliedz**", "`!hr MUERTE AL DIOS VANLIEDZ`")

  message.channel.send({embed});

}

if(message.content.startsWith(prefix+"MUERTE AL DIOS VANLIEDZ")){
  message.channel.send({embed: {
    color: 3447003,
    description: "**MUERTE A TI PVTO**"
  }
});
}

if(message.content.startsWith("2999")){
  message.channel.send({embed: {
    color: 3447003,
    description: "¡**3000**! ¡Gané!"
  }
});
}

client.on("message", message =>{
var Mensajes = ["Tienes razón", "Probablemente", "Definitivamente si", "Definitivamente no", "Ni de coña bro", "Si", "No"]
var aleatorio = Math.floor(Math.random()*(Mensajes.length));
if(message.content.startsWith(prefix+"8ball")){
  message.channel.send(Mensajes[aleatorio]);

}
})



if(message.content.startsWith(prefix+"help")){
  const embed = new Discord.MessageEmbed()
  .setDescription("**Ayuda**")
  .addField("**Moderación**", "`!hr kick [Persona]`")
  .addField("**Memes**", "`!hr meme`")
  .addField("**Búsquedas**", "`!hr search [Cosa]` **(DESARROLLO)**")
  .addField("**Prefijo**", "`!hr prefix [Prefijo]` **(DESARROLLO)**")

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

  if(command == 'prefix') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes los permisos necesarios.")
    if(!args[0]) return message.channel.send("¡Tienes que poner un prefix!")
    prefix_db.agregar('${message.guild.id}', args[0])
    return message.channel.send("El prefix acaba de ser cambiado a"+args[0])
  }
  
});
client.login(datos.token);
