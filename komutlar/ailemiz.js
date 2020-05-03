const Discord = require("discord.js")
exports.run = (client, message) => {
  const guildArray = client.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.setColor('#D97634')
      embed.setDescription(`Şu Anda Toplam **${client.guilds.size}** Sunucudayım!`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: "sunucular",
  description: "Botun Olduğu Sunucuları Gösterir.",
  usage: "sunucular"
};