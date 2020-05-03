const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(bot, message, args) => {
  db.fetch(`pre_${message.guild.id}`).then(async i => {
    if (i == 'aktif') {
					let prefix = await db.fetch(`prefix_${message.guild.id}`) || "-";
          let sunucuKomut = await db.fetch(`sunucuKomut_${message.guild.id}`) // If they didn't write none, set what they wrote as the message
                     let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                     if(!sunucuKomut) await db.set(`sunucuKomut_${message.guild.id}`, 'Bulunmuyor.')
                    // Fetch the new channel they mentione
                    // This will update the .text of the joinMessageDM_guildID object.
                     let welcomeEmbed = new Discord.RichEmbed()
                     .addField(`Mevcut özel komutlar.`, `\`${sunucuKomut}\``)
                     .setColor('GREEN')
                        message.channel.send(welcomeEmbed) // Finally, send in chat that they updated the channel.
      } else if (!i || i == 'deaktif') {
     message.channel.send('Bu Sunucuda Maalesef Premium Yok.')
       }
  })
                     }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['özelkomutlistesi','özelkomut-listesi','özel-komutlistesi'],
  kategori: 'premium komut',
  permLevel: 0
};

exports.help = {
  name: 'özel-komut-listesi',
  description: 'Sunucuya Özel Komutları Listeler.',
  usage: 'özel-komut-listesi'
};