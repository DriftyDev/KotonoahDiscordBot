exports.run = (client, message, args, Discord) => {
	// Tomar la primera mención del mensaje
  let member = message.mentions.members.first(); // Array / arreglo

  let memberUsername = member.tag; // Nombre#1234

	// Banear a la mención '@'
  member.ban().then((member) => {
    // Notificar al servidor de que el usuario ha sido baneado
    message.channel.send(memberUsername + ' baneado del servidor.');
  });
};

/*
	var member = message.mentions.members.first();

    member.ban().then((member) => {
        // Success message
    });
 */