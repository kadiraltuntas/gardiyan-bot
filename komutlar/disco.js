const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, msg, args) => {
  


  if (!msg.member.hasPermission ("ADMINISTRATOR")) return msg.reply(`${hayir} Bu Komutu Kullanmak İçin **Yönetici** İznine Sahip Olmalısın!`);
  
  let discoR = await db.fetch(`discorol_${msg.guild.id}`);
   setInterval(() => {
  msg.guild.roles.find('name', discoR).setColor("RANDOM");
   }, 5000);
msg.channel.send(`${evet} Disco Başladı!`)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['disko'],
  kategori: 'ayarlar',
    permLevel: 3
}

exports.help = {
    name: 'disco',
    description: 'Disco',
    usage: 'disco'
}
     