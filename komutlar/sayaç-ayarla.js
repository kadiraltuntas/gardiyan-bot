const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
  
  const sayac = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
     
  
  
  if(!args[0]) {
    message.channel.send(` Bir Sayı Yazman Lazım! Kullanım: \`${ayarlar.prefix}sayaç-ayarla 50 <#kanal>\``);
    return
  }
  
  if(!sayackanal) {
   message.channel.send(` Sayaç Kanalını Etiketlemelisin! Kullanım: \`${ayarlar.prefix}sayaç-ayarla 50 <#kanal>\``)
  }
  
  if (!sayackanal) return;
  
  
  
  if(isNaN(args[0])) {
    message.channel.send(` Bir Sayı Yazman Lazım! Kullanım: \`${ayarlar.prefix}sayaç-ayarla 50 <#kanal>\``)
    return
  }
 
        if(args[0] <= message.guild.members.size) {
                message.channel.send(` Sunucudaki Kullanıcı Sayısından (${message.guild.members.size}) Daha Yüksek Bir Değer Girmelisin.`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanal.name)
  
  message.channel.send(` Sayaç \`${args[0]}\`, Sayaç Kanalı \`#${sayackanal.name}\` Olarak Ayarlandı.`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayaç'],
  kategori: 'ayarlar',
        permLevel: 3
}
 
exports.help = {
        name: 'sayaç-ayarla',
        description: 'Sunucu İçin Sayaç Ayarlar.',
        usage: 'sayaç-ayarla <sayı> <#kanal> / sıfırla'
}