const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  message.channel.send('Bu Komut Yapım Aşamasında!')
};
  
 /* let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  db.fetch(`pre_${message.guild.id}`).then(i => {
    if (i == 'aktif') {
    let brol = message.mentions.roles.first()
    if (!brol) return message.channel.send(` Bot otorol olarak ayarlamak istediğin rolü etiketlemelisin. \`${prefix}bototorol @Bot\``)
    db.set(`bototorol_${message.guild.id}`, brol.name)
    message.channel.send(` Bot otorol \`${brol.name}\` olarak ayarlandı.`)
  }
    
    if (i == 'kapali') return message.channel.send(`Bu sunucuda premium aktif değil.`)
  })

};*/
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['bot-oto-rol'],
  kategori: 'premium komut',
    permLevel: 0
}

exports.help = {
    name: 'bototorol',
    description: 'Sunucuya giren bota seçtiğiniz rolü otomatik verir.',
    usage: 'bototorol <@rol>'
}