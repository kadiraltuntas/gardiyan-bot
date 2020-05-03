const Discord = require('discord.js');
const moment = require('moment');
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');

exports.run = async (bot, message, args) => {
  
  const db = require('quick.db');
  
  
  
  var m = await message.channel.send(`Lütfen bekleyiniz istatistikler alınıyor <a:loading:694850273046298644>`)
  
  var osType = await os.type();

		if (osType === 'Darwin') osType = 'macOS'
		else if (osType === 'Windows') osType = 'Windows'
		else osType = os.type();
  
    //--------------------------//
  
    var osBit = await os.arch();
  
    if (osBit === 'x64') osBit = '64 Bit'
    else if (osBit === 'x82') osBit = '32 Bit'
    else osBit = os.arch();
  
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(bot.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
      
      setTimeout(() => {
        const s = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`${bot.user.username} | İstatistikler`, bot.user.avatarURL)
        .addField('Gecikme süreleri',"Mesaj Gecikmesi: {ping1} milisaniye \nBot Gecikmesi: {ping2} milisaniye".replace("{ping1}", new Date().getTime() - message.createdTimestamp).replace("{ping2}", bot.ping), true)
		.addField('Çalışma süresi', `${duration}`, true)
        .addField('Genel veriler', stripIndents`
        **Müzik Çalınan Sunucu Sayısı:** ${bot.voiceConnections.size.toLocaleString()}
        **Kullanıcı Sayısı:**  ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
        **Sunucu Sayısı:** ${bot.guilds.size.toLocaleString()}
        **Kanal Sayısı:** ${bot.channels.size.toLocaleString()}
        `, true)
        .addField('Versiyonlar', stripIndents`
        **Discord.JS sürümü** v${Discord.version}
        **NodeJS sürümü** ${process.version}
        `, true)
        .addField('Kullanılan bellek boyutu', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
        .addField('İşletim sistemi', `${osType} ${osBit}`, true)
        
        .addField('İşlemci', `\`\`\`xl\n${os.cpus().map(i => `${i.model}`)[0]}\n\`\`\``)
        return m.edit(s)
        
        }, 3000)
        
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['i'],
    permLevel: 0,
    kategori: "bot",
 
  };
  
  exports.help = {
    name: 'istatistik',
    description: 'Botun istatistiklerini gösterir.',
    usage: 'istatistik',
  
  };