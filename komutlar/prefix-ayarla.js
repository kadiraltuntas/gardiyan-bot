const Discord = require('discord.js');
var ayarlar = require('../ayarlar.json');
const db = require('quick.db');
exports.run = async (client, message, args, func) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = '-'
  
  let preffix = db.fetch(`prefix_${message.guild.id}`)
  
  
  if (!args[0])
    return message.channel.send(` Bir prefix girmelisin.`)
  db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send(` Prefix başarıyla \`${args[0]}\` olarak ayarlandı.`)
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['prefix'],
    permLevel: 0,
    kategori: "ayarlar"
};
  
  exports.help = {
    name: 'prefix-ayarla',
    description: 'Botun Sunucudaki Prefixini Değiştirir.',
    usage: 'prefix-ayarla <yeni prefix>'
};