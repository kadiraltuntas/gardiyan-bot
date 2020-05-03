const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
//
let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
if(message.member.id !== message.guild.owner.id) return message.channel.send('Bu komutu sadece sunucu sahibi kullanabilir.')  
  let aktif = await db.fetch(`bottemizle_${message.guild.id}`)
  if (aktif) {
    db.delete(`bottemizle_${message.guild.id}`)
    message.channel.send(`Koruma sistemi devre dışı bırakıldı.`)
  }
 
  if (!aktif) {
    db.set(`bottemizle_${message.guild.id}`, 'aktif')
    message.channel.send(`Koruma sistemi aktif edildi.`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botkoruma'],
  kategori: 'koruma',
  permLevel: 0

};

exports.help = {
  name: 'botkoruma',
  description: 'Sunucuya bot eklendiğinde atılmasını sağlayan sistemi başarıyla aktifleştirirsiniz/kapatırsınız.',
  usage: 'botkoruma'
};