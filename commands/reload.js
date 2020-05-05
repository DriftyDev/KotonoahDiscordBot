exports.run = (client, message, args, Discord) => {
    // Checks if the user has an administrator role
    if(message.member.hasPermission("ADMINISTRATOR")){
      // Notify the developers
      console.log("[IMPORTANT]: " + message.author.tag + " está recargando los comandos.");
      try{
        // Delete cache
        delete require.cache[require.resolve('./server.js')];
        delete require.cache[require.resolve('./kick.js')];
        delete require.cache[require.resolve('./dog.js')];
        delete require.cache[require.resolve('./ban.js')];
        delete require.cache[require.resolve('./unban.js')];

      }catch(err){
        console.error(err);
      }
      // Notify developers and command issuer
      console.log("[IMPORTANT]: Commands reloaded succesfully. Finishing reloads.");
      message.send("¡Recargado correctamente," + message.author.tag);
      try{
        // Finish by deleting this command's cache
        delete require.cache[require.resolve('./reload.js')];
      }catch(err){
        console.error(err);
      }
      // Notify developers
      console.log("[IMPORTANT]: Reloads finished.");
    } else {
      message.reply("No tienes permisos para ejecutar ese comando.");
      console.log("[INFO]: The command couldn't be executed because the user is not an administrator.");
    }
  }
  