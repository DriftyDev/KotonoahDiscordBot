
const Discord = require('discord.js');
const client = new Discord.Client();
const datos = require("./datos.json");
const {Client, Attachment} = require("discord.js");
let prefix = datos.prefix


client.on("ready", () => {
console.log("Encendido")
client.user.setActivity('Hyliedz Retro', { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on("message", (message) => {
if(message.content.startsWith(prefix+"secret")){
  const embed = new Discord.MessageEmbed()
  .setDescription("**COMANDOS SECRETOS**")
  .addField("**Vanliedz**", "`!hr MUERTE AL DIOS VANLIEDZ`")
  .addField("**Invocar a Vanliedz**", "`!hr Van inv`")
  .addField("**Matar a Kotonoah**", "`!hr MUERTE A KOTONOAH`")
  .addField("**Besar a alguien**", "`!hr kiss [Persona]`")
  .addField("**Adivinar cuando perderás la virginidad**", "`!hr virgen`")
  .addField("**Adivinar tu edad mental**", "`!hr mentalidad`")
  .addField("**Adivinar tu IQ**", "`!hr IQ`")


  message.channel.send({embed});

}

let member = message.mentions.members.first();



if(message.content.startsWith(prefix+"MUERTE AL DIOS VANLIEDZ")){
  ({embed: {
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

if(message.content.startsWith(prefix+"virgen")){
  number1 = 70;
  var random1 = Math.floor (Math.random() * (number1 - 1 + 1)) + 1;
 
    message.channel.send({embed: {
      color: 3447003,
      description: "**La perderás con " + random1 + " años**"
    }
  });
  }

  if(message.content.startsWith(prefix+"mentalidad")){
  number2 = 125;
  var random2 = Math.floor (Math.random() * (number2 - 1 + 1)) + 1;
      message.channel.send({embed: {
        color: 3447003,
        description: "**Tu edad mental es de " + random2 + " años**"
      }
    });
    }

    if(message.content.startsWith(prefix+"IQ")){
      number3 = 230;
      var random3 = Math.floor (Math.random() * (number3 - 1 + 1)) + 1;
          message.channel.send({embed: {
            color: 3447003,
            description: "**Tu IQ es de " + random3 + "**"
          }
        });
        }

 

if(message.content.startsWith(prefix+"meme")){
  number = 62;
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
      case 21: message.channel.send("**Spook.exe**", {files: ["./images/meme15.jpg"]}); break;
      case 22: message.channel.send("**Katto.exe**", {files: ["./images/meme16.jpg"]}); break;
      case 23: message.channel.send("**Meme**", {files: ["./images/meme17.jpg"]}); break;
      case 24: message.channel.send("**Meme**", {files: ["./images/meme18.jpg"]}); break;
      case 25: message.channel.send("**Meme**", {files: ["./images/meme19.jpg"]}); break;
      case 26: message.channel.send("**Meme**", {files: ["./images/meme20.jpg"]}); break;
      case 27: message.channel.send("**Meme**", {files: ["./images/meme21.jpg"]}); break;
      case 28: message.channel.send("**Meme**", {files: ["./images/meme22.jpg"]}); break;
      case 29: message.channel.send("**Meme**", {files: ["./images/meme23.jpg"]}); break;
      case 30: message.channel.send("**Meme**", {files: ["./images/meme24.jpg"]}); break;
      case 31: message.channel.send("**Meme**", {files: ["./images/meme25.jpg"]}); break;
      case 32: message.channel.send("**Meme**", {files: ["./images/meme26.jpg"]}); break;
      case 33: message.channel.send("**Meme**", {files: ["./images/meme27.jpg"]}); break;
      case 34: message.channel.send("**Meme**", {files: ["./images/meme28.jpg"]}); break;
      case 35: message.channel.send("**Meme**", {files: ["./images/meme29.jpg"]}); break;
      case 36: message.channel.send("**Meme**", {files: ["./images/meme30.jpg"]}); break;
      case 37: message.channel.send("**Meme**", {files: ["./images/meme31.jpg"]}); break;
      case 38: message.channel.send("**Meme**", {files: ["./images/meme32.jpg"]}); break;
      case 39: message.channel.send("**Meme**", {files: ["./images/meme33.jpg"]}); break;
      case 40: message.channel.send("**Meme**", {files: ["./images/meme34.jpg"]}); break;
      case 41: message.channel.send("**Meme**", {files: ["./images/meme35.jpg"]}); break;
      case 42: message.channel.send("**Meme**", {files: ["./images/meme36.jpg"]}); break;
      case 43: message.channel.send("**Meme**", {files: ["./images/meme37.jpg"]}); break;
      case 45: message.channel.send("**Meme**", {files: ["./images/meme38.jpg"]}); break;
      case 46: message.channel.send("**Meme**", {files: ["./images/meme39.jpg"]}); break;
      case 47: message.channel.send("**Meme**", {files: ["./images/meme40.jpg"]}); break;
      case 48: message.channel.send("**Meme**", {files: ["./images/meme41.jpg"]}); break;
      case 49: message.channel.send("**Meme**", {files: ["./images/meme42.jpg"]}); break;
      case 50: message.channel.send("**Meme**", {files: ["./images/meme43.jpg"]}); break;
      case 51: message.channel.send("**Meme**", {files: ["./images/meme44.jpg"]}); break;
      case 52: message.channel.send("**Meme**", {files: ["./images/meme45.jpg"]}); break;
      case 53: message.channel.send("**Meme**", {files: ["./images/meme46.jpg"]}); break;
      case 54: message.channel.send("**Meme**", {files: ["./images/meme47.jpg"]}); break;
      case 55: message.channel.send("**Meme**", {files: ["./images/meme48.jpg"]}); break;
      case 56: message.channel.send("**Meme**", {files: ["./images/meme49.jpg"]}); break;
      case 57: message.channel.send("**Meme**", {files: ["./images/meme50.jpg"]}); break;
      case 58: message.channel.send("**Meme**", {files: ["./images/meme51.jpg"]}); break;
      case 59: message.channel.send("**Meme**", {files: ["./images/meme52.jpg"]}); break;
      case 60: message.channel.send("**Meme**", {files: ["./images/meme53.jpg"]}); break;
      case 61: message.channel.send("**Meme**", {files: ["./images/meme54.jpg"]}); break;
      case 62: message.channel.send("**Meme**", {files: ["./images/meme55.jpg"]}); break;
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




client.on("message", message => {
  if(message.content.indexOf(datos.prefix) !== 0) return;

  // Definiendo los argumentos
  const args = message.content.slice(datos.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Procesador de comandos
  try {
    console.log("[INFORMACIÓN]: " + "@" + message.author.tag + " ha ejecutado el comando '" + command + "'");
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args, Discord);
  } catch (err) {
  }

});
});
client.login(datos.token);
