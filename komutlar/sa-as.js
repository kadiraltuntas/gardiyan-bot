const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')






var pref = ayarlar.prefix;


exports.run = async (bot, message, args) => {
  const saas = await db.fetch(`saas_${message.guild.id}`);
  
  if (!args[0]) return message.channel.send(`:x: Aç yada kapat yazmalısın!! Örnek: \`${pref}sa-as aç\``)
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('`Yönetici` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'acik').then(i => {
     return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`:white_check_mark: Artık biri sa diyince otomatik olarak Aleyküm Selam diyecek.`).setColor("RANDOM"));
    })
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali').then(i => {
    return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`:white_check_mark: Artık biri sa diyince cevap vermicek...`).setColor("RANDOM"));
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  kategori: "ayarlar",
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'sa-as',
  description: 'Botun Sa-As Sistemini Ayarlar.',
  usage: 'sa-as <aç/kapat>'
};