const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let discorol = message.mentions.roles.first()
  
  if(args[0] === "sıfırla") {
    if(!args[0]) {
      message.channel.send(` Ayarlanmayan Şeyi Sıfırlayamazsın.`)
      return
    }
    
    db.delete(`discorol_${message.guild.id}`)
    message.channel.send(` Disco Rolü Başarıyla Sıfırlandı.`)
    return
  }

  if (!discorol) {
    return message.channel.send(` Disco Rol Olarak Ayarlamak İstediğin Rolü Etiketlemelisin.`)
    }
    
  
  
  db.set(`discorol_${message.guild.id}`, discorol.name)
  
    message.channel.send(` Disco Rolü \`${discorol.name}\` Olarak Ayarlandı.`)
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['disco-rol'],
  kategori: 'ayarlar',
    permLevel: 0
}

exports.help = {
    name: 'disco-rol-ayarla',
    description: 'Disco Rolünü Ayarlar.',
    usage: 'disco-rol-ayarla <@rol>'
}