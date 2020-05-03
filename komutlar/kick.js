const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require('fs'); 

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri Engelle** iznine sahip olmalısın!`);
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.reply(`:x: Lütfen Bir Kullanıcı Belirtin! Örn: \`${ayarlar.prefix}kick @Carry Kick Örnek\``).catch(console.error);
  if (reason.length < 1) return message.reply(':x: Lütfen Bir Sebep Belirtiniz Yoksa Maalesef Sunucudan Atamam.!');

  if (!message.guild.member(user).kickable) return message.reply('Maalesef Yetkilileri Sunucudan Atamam! Sunucudan Atmam İçin Botun Yetkisini Sunucudan Atılacak Kişinin Yetkisinin Üstüne Taşıyınız.');
  message.guild.member(user).kick();

  return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`» Başarıyla **${message.author.username}#${message.author.discriminator}** Tarafından **${user.username}#${user.discriminator}** Adlı Kullanıcı **${reason}** Sebebi İle Sunucudan Atıldı.`).setColor("0x00AE86").setTimestamp());
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  kategori: 'moderasyon',
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'Belirtilen Kişiyi Sunucudan Kickler.',
  usage: 'kick <@kullanıcı> <sebep>'
};
