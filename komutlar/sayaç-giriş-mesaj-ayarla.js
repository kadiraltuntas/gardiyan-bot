const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  const mesaj2 = await db.fetch(`sayacm_${message.guild.id}`);
  
  let mesaj = args.slice(0).join(' ')
  

  
      if (!mesaj) {
        return message.channel.send(` Sayaç giriş mesajını yazmalısın.`)
    }
  
    db.set(`sayacgm_${message.guild.id}`, mesaj)
    message.channel.send(` Sayaç giriş mesajı \`${mesaj}\` olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sayaç-giriş-mesaj','sayaç-giriş'],
  kategori: 'ayarlar',
    permLevel: 3
}

exports.help = {
    name: 'sayaç-giriş-mesaj-ayarla',
    description: 'Sayaç giriş mesajını ayarlar. (Kullanıcı isminin geleceği yere "{kullanıcı}", sayaç sayısın geleceği yere "{sayı}", kalan sayının geleceği yere "{kalan}" yazınız.)',
    usage: 'sayaç-giriş-mesaj-ayarla <yazı>'
}