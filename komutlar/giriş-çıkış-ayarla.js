const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let channel = message.mentions.channels.first()
  
  
    if (!channel) {
        return message.channel.send(`Giriş-çıkış mesaj kanalı olarak ayarlamak istediğin kanalı etiketlemelisin.`)
    }
  
  if (!channel) return;
  
    db.set(`mgcK_${message.guild.id}`, channel.name)
    message.channel.send(` Giriş-çıkış mesaj kanalı başarıyla \`#${channel.name}\` olarak ayarlandı.`)
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['giriş-çıkış'],
  kategori: 'ayarlar',
    permLevel: 3
}

exports.help = {
    name: 'giriş-çıkış-ayarla',
    description: ' Giriş-çıkış mesaj kanalını ayarlar.',
    usage: 'giriş-çıkış-ayarla <#kanal>'
}