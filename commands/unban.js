exports.run = (client, message, args, Discord) => {

  if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("No tienes permisos para hacer eso!")

  let bannedMember = await bot.fetchUser(args[0])
      if(!bannedMember) return message.channel.send("Di a un usuario al que desbanear!")

      let reason = args.slice(1).join(" ")
      if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("NO tengo permiso para desbanear/banear usuarios!")
      message.delete()
      try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMebmer.tag} ha sido desbaneado`)
      } catch(e) {
        console.log(e.message)
      }

      let embed = new Discord.RichEmbed()
      .setColor(colours.redlight)
      .setAuthor(`${message.guild.name} Mensajes de Mod`, message.guild.iconURL)
      .addField("Tipo de moderación:", "UNBAN")
      .addField("Moderado en:", `${bannedMember.username} (${bannedMember.id})`)
      .addField("Moderador:", message.author.username)
      .addField("Razón:", reason)
      .addField("Fecha:", message.createdAt.toLocaleString())

          let sChannel = message.find(c => c.name === "general")
          sChannel.send(embed)

}

module.exports.config = {
  name: "unban",
  aliases: ["ub"]
}