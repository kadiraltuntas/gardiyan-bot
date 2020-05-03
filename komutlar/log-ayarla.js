const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let kayitk = message.mentions.channels.first()
  
    if (!kayitk) {
          return message.channel.send(`Kayıt Kanalı Olarak Ayarlamak İstediğin Kanalı Etiketlemelisin. Örn: \`${ayarlar.prefix}log-ayarla <#kanal>\``)
    }
  
  if (!kayitk) return;

 db.set(`kayitlar_${message.guild.id}`, kayitk.name)
  
   
    message.channel.send(` Başarıyla Log Kanalı \`#${kayitk.name}\` Olarak Ayarlandı!`)
  

}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['log-ayarla'],
  kategori: "ayarlar",
    permLevel: 3
}

exports.help = {
    name: 'log-kanal-ayarla',
    category: 'ayarlar',
    description: 'Log kanalını ayarlar.',
    usage: 'log-kanal-ayarla <#kanal>'
}