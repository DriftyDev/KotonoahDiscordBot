exports.run = (client, message, args, Discord) => {
  if(message.member.hasPermission("ADMINISTRATOR")){
	// Tomar la primera mención del mensaje
  let member = message.mentions.members.first(); // Array / arreglo

  let memberUsername = member.tag; // Nombre#1234

	// Kickear a la mención '@'
  member.kick().then((member) => {
    // Notificar al servidor de que el usuario ha sido kickeado
    message.channel.send('Ha sido kickeado del servidor.');
  });
}else {
  message.reply("No tienes permisos para ejecutar ese comando.");
  console.log("[INFO]: The command couldn't be executed because the user is not an administrator.");
}
};

/*
	var member = message.mentions.members.first();

    member.kick().then((member) => {
        // Success message
    });
 */