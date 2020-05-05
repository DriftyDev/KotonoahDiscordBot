exports.run = (client, message, args, Discord) => {
  if(message.member.hasPermission("ADMINISTRATOR")){
    // Notify the developers
    console.log("[IMPORTANT]: " + message.author.tag + " ha baneado a alguien");
    message.channel.send(message.author.tag +", baneando...");
    try{
    // Tomar la primera mención del mensaje
    let member = message.mentions.members.first(); // Array / arreglo
  
    let memberUsername = member.tag; // Nombre#1234
  
    // Banear a la mención '@'
    member.ban().then((member) => {
      message.channel.send(message.author.tag + "Baneando...");
    });  // Notificar al servidor de que el usuario ha sido baneado
    
  
    }catch(err){
      console.error(err);
    }
    // Notify developers and command issuer
    console.log("[IMPORTANT]: Finalmente ha baneado correctamente");
    message.reply("Has baneado correctamente");
    try{
      // Finish by deleting this command's cache
      
    }catch(err){
      console.error(err);
    }
    // Notify developers
    console.log("[IMPORTANT]: Reloads finished.");
  } else {
    message.reply("No tienes permisos para ejecutar ese comando.");
    console.log("[INFO]: The command couldn't be executed because the user is not an administrator.");
  }

  
};

/*
	var member = message.mentions.members.first();

    member.ban().then((member) => {
        // Success message
    });
 */
