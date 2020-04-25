exports.run = (client, message, args, Discord) => {
	// Tomar la primera mención del mensaje
  let member = message.mentions.members.first(); // Array / arreglo

  let memberUsername = member.tag; // Nombre#1234

	// Kickear a la mención '@'
  member.kick().then((member) => {
    // Notificar al servidor de que el usuario ha sido kickeado
    message.channel.send(memberUsername + ' ha sido kickeado del servidor.');
  });
};

/*
	var member = message.mentions.members.first();

    member.kick().then((member) => {
        // Success message
    });
 */