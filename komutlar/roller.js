const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {

  let prefix = ayarlar.prefix;
  if (!message.content.startsWith(prefix)) return;



    let serverembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField("Roller",` ${message.guild.roles.size} Rol  \n Sunucu Rolleri : ${message.guild.roles.array()}`,true)
    .setTimestamp()
    .setFooter(`${message.author.username} Tarafından İstendi.`,message.author.displayAvatarURL);

    message.channel.send(serverembed);
}

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
  kategori: "kullanıcı",
   permLevel: 0
 };

module.exports.help = {
  name:"roller",
  description: 'sunucu rollerini gösterir.',
  usage: 'roller'
}