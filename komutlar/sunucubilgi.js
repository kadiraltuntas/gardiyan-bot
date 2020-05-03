const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const moment = require('moment');

exports.run = async (client, message, params) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = '-'
  
  var verti = message.guild.verificationLevel;
   const vertific = ['Yok', 'Düşuk', 'Orta', 'Yüksek', 'En Yüksek'];
  
  var konum = ''
        if(message.guild.region === "russia") {
            var konum = 'Rusya :flag_ru:'
        }
        if(message.guild.region === "us-west") {
            var konum = 'Batı Amerika :flag_us: '
        }
        if(message.guild.region === "us-south") {
            var konum = 'Güney Amerika :flag_us: '
        }
        if(message.guild.region === "us-east") {
            var konum = 'Doğu Amerika :flag_us: '
        }
        if(message.guild.region === "us-central") {
            var konum = 'Amerika :flag_us: '
        }
        if(message.guild.region === "brazil") {
            var konum = 'Brezilya :flag_br:'
        }
        if(message.guild.region === "singapore") {
            var konum = 'Singapur :flag_sg:'
        }
        if(message.guild.region === "sydney") {
            var konum = 'Sidney :flag_sh:'
        }
        if(message.guild.region === "eu-west") {
            var konum = 'Batı Avrupa :flag_eu:'
        }
        if(message.guild.region === "eu-south") {
            var konum = 'Güney Avrupa :flag_eu:'
        }
        if(message.guild.region === "eu-east") {
            var konum = 'Doğu Avrupa :flag_eu:'
        }
        if(message.guild.region === "eu-central") {
            var konum = 'Avrupa :flag_eu:'
        }
        if(message.guild.region === "hongkong") {
            var konum = 'Hong Kong :flag_hk: '
        }
        if(message.guild.region === "japan") {
            var konum = 'Japonya :flag_jp:'
        }
        var tarih = ''
        if(moment(message.guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(message.guild.createdAt).format('DD')} Ocak ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(message.guild.createdAt).format('DD')} Şubat ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(message.guild.createdAt).format('DD')} Mart ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(message.guild.createdAt).format('DD')} Nisan ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(message.guild.createdAt).format('DD')} Mayıs ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
        if(moment(message.guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(message.guild.createdAt).format('DD')} Haziran ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(message.guild.createdAt).format('DD')} Temmuz ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(message.guild.createdAt).format('DD')} Ağustos ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(message.guild.createdAt).format('DD')} Eylül ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(message.guild.createdAt).format('DD')} Ekim ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(message.guild.createdAt).format('DD')} Kasım ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(message.guild.createdAt).format('DD')} Aralık ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
   const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(`${message.guild.name} - Sunucu Bilgileri`)
   .setThumbnail(message.guild.iconURL, true)
   .addField('» İsim', message.guild.name, true)
   .addField('» ID', message.guild.id, true)
   .addField('» Bölgesi', konum, true)
   .addField('» Sahibi', message.guild.owner, true)
   .addField('» Üyeler ['+message.guild.memberCount+']', `<:onlinek:520096446050074638> Çevrimiçi: ${message.guild.members.filter(m => m.user.presence.status === "online").size} \n<:dndk:520096438319972352> Rahatsız Etmeyin: ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} \n<:bostak:520096436575010829> Boşta: ${message.guild.members.filter(m => m.user.presence.status === "idle").size} \n<:offlinek:520096445886496773> Çevrımdışı/Görünmez: ${message.guild.members.filter(m => m.user.presence.status === "offline").size} \n<:botTagk:520096437716123668> Bot: ${message.guild.members.filter(m => m.user.bot).size}`, true)
   .addField('» Kanallar ['+message.guild.channels.size+']', `📝Yazı: ${message.guild.channels.filter(c => c.type === "text").size} \n🔊Sesli: ${message.guild.channels.filter(c => c.type === "voice").size} \n📋Kategori: ${message.guild.channels.filter(c => c.type === "category").size} \n💤AFK Kanalı: ${message.guild.afkChannel ? message.guild.afkChannel : 'Bulunmuyor.'}`, true)
   .addField('» Roller ['+message.guild.roles.size+']', `\`${prefix}roller\` yazarak görebilirsiniz.`, true)
   .addField('» Emojiler ['+message.guild.emojis.size+']', `\`${prefix}emojiler\` yazarak görebilirsiniz.`, true)
   .addField('» AFK Zaman Aşımı', message.guild.afkTimeout, true)
   .addField('» Oluşturma Tarihi', tarih)
   .addField('Doğrulama seviyesi', `${vertific[message.guild.verificationLevel]}`, true)
   .setFooter('Sunucu Bilgi', message.guild.iconURL)
   .setTimestamp()
   
   message.channel.send(embed);
};

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ["sunucu"],
   kategori: "kullanıcı",
   permLevel: 0
 };

 exports.help = {
   name: 'sunucu-bilgi',
   description: 'Bulunduğunuz sunucu hakkında bilgi verir.',
   usage: 'sunucu-bilgi'
 };