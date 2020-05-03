const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  const mesaj2 = await db.fetch(`sayacm_${message.guild.id}`);
  
  let mesaj = args.slice(0).join(' ')
  

  
      if (!mesaj) {
        return message.channel.send(` Sayaç çıkış mesajını yazmalısın.`)
    }
  
    db.set(`sayaccm_${message.guild.id}`, mesaj)
    message.channel.send(` Sayaç çıkış mesajı \`${mesaj}\` olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sayaç-çıkış-mesaj','sayaç-çıkış'],
  kategori: 'ayarlar',
    permLevel: 3
}

exports.help = {
    name: 'sayaç-çıkış-mesaj-ayarla',
    description: 'Sayaç çıkış mesajını ayarlar. (Kullanıcı isminin geleceği yere "{kullanıcı}", sayaç sayısın geleceği yere "{sayı}", kalan sayının geleceği yere "{kalan}" yazınız.)',
    usage: 'sayaç-çıkış-mesaj-ayarla <yazı>'
}