const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  db.fetch(`pre_${message.guild.id}`).then(i => {
    if (i == 'acik') {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('Herkesten rol alabilmem için bir rol etiketle!')

  
   const embed = new Discord.RichEmbed()
     .setDescription(`Herkesten ${rol} adlı rol alındı!`)
        .setColor(rol.hexColor)
   
   
   message.guild.members.forEach(u => {
u.removeRole(rol)
   })
  // message.channel.send('Herkese **'+ rol.name +'** adlı rol verildi!')
  message.channel.send(embed)
      }
    if (i == 'deaktif') return message.channel.send(`Bu sunucuda premium aktif değil.`)
  })
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['herkesten-rol-al'],
    permLevel: 0,
  kategori: 'moderasyon',
}

exports.help = {
    name: 'toplu-rol-al',
    description: 'Toplu Olarak Rolleri Üyelerden Alır.',
    usage: 'toplu-rol-al <@rol>'
}