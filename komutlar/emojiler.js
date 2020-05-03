const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setTitle(`» Sunucuda Bulunan Emojiler`)
            .setDescription(`${message.guild.emojis.map(e=>e.toString()).join(" **|** ") ? message.guild.emojis.map(e=>e.toString()).join(" **|** ") : 'Bu sunucuda hiç emoji bulunmuyor.'}`)
            return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: 'emojiler',
  category: 'sunucu',
  description: 'Bulunduğunuz sunucudaki emojileri gösterir.',
  usage: 'emojiler'
};