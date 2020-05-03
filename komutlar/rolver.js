  const Discord = require('discord.js');
var ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor(10038562));
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen bir kullanıcı ismi gir.\nÖrnek: >rol-ver <Kullanıcı> <Rol>`).setColor(10038562));
    let role = message.mentions.roles.first()

    if (!role) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen bir rol ismi gir!`).setColor(10038562));
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Bu rolü bulamıyorum veya rol ismi girmedin!`).setColor(10038562));

    if (rMember.roles.has(aRole.id)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu kullanıcı zaten bu role sahip!').setColor(10038562));
    await (rMember.addRole(aRole.id))
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${rMember} isimli üyeye \`${role.name}\` isimli rol başarıyla verildi`).setColor('RANDOM'));

};

module. exports.conf = {
  aliases: ['addrole'],
  kategori: "moderasyon",
  permLevel: 2
};

module.exports.help = {
  name: 'rol-ver',
  description: 'Belirtilen Kullanıcıya Rol Verir.',
  usage: 'rol-ver <Kullanıcı> <Rol>'
};