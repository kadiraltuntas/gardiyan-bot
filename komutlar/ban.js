const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const fs = require('fs'); 

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri Engelle** iznine sahip olmalısın!`);
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  
   let prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = '-'

  if (message.mentions.users.size < 1) return message.channel.send(`:x: Lütfen bir kullanıcı belirt! Örn: \`${prefix}ban @Gardiyan Ban Örnek\``).catch(console.error);
  if (reason.length < 1) return message.channel.send(':x: Lütfen bir sebep belirt! Yoksa kişiyi banlayamam!');
  
  if (!message.guild.member(user).bannable) return message.channel.send('Maalesef yetkilileri banlayamam! Banlanacak kişinin yetkisini düşürmelisin!');

  message.guild.ban(user, 2);

 return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`» Başarıyla **${message.author.username}#${message.author.discriminator}** Tarafından **${user.username}#${user.discriminator}** Adlı Kullanıcı **${reason}** Sebebi İle Banlandı.`).setColor("0x00AE86").setTimestamp());
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasakla'],
  kategori: 'moderasyon',
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Belirtilen Kişiyi Banlar.',
  usage: 'ban <@kullanıcı> <sebep>'
};
