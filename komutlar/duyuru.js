const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(` Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply(' Duyurmam İçin Birşey Yazmalısınız');
    message.delete();
  
let prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = '-' 
    let duyuru = await db.fetch(`duyuruk_${message.guild.id}`);
    const kanalduyuru = message.guild.channels.find('name', duyuru)
      if (!kanalduyuru) return;
  if (!kanalduyuru) return message.reply(` Lütfen \`${prefix}duyuru-kanal-ayarla\` Komutu İle Duyuru Kanalını Ayarlayın.`);
    kanalduyuru.send(`${mesaj}`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru'],
  kategori : 'moderasyon',
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'Ayarlanan Duyuru Kanalına Duyuru Gönderir.',
  usage: 'duyuru <Duyuruda Yazıcak Şey>'
};
