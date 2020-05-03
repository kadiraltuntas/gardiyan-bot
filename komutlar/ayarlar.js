const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');

exports.run = async (client, message, args, member) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = '-'

  let kufurfiltre = await db.fetch(`kufur_${message.guild.id}`)
  let kufurYazi;
  if (kufurfiltre == null) kufurYazi = `Ayarlamak İçin \`${prefix}küfür-filtresi aç\``
  if (kufurfiltre == 'acik') kufurYazi = 'Açık!'
  if (kufurfiltre == 'kapali') kufurYazi = `Ayarlamak İçin \`${prefix}küfür-filtresi aç\``
  //
    
   let reklamfiltre = await db.fetch(`reklam_${message.guild.id}`)
  let reklamYazi;
  if (reklamfiltre == null) reklamYazi = `Ayarlamak İçin \`${prefix}reklam-filtresi aç\``
  if (reklamfiltre == 'acik') reklamYazi = 'Açık!'
  if (reklamfiltre == 'kapali') reklamYazi = `Ayarlamak İçin \`${prefix}reklam-filtresi aç\``
  //
  
  
  
  let saas = await db.fetch(`saas_${message.guild.id}`)
  let saasYazi;
  if (saas == null) saasYazi = `Ayarlamak İçin \`${prefix}sa-as aç\``
  if (saas == 'acik') saasYazi = 'Açık!'
  if (saas == 'kapali') saasYazi = `Ayarlamak İçin \`${prefix}sa-as aç\``
  
  //

  
   let dKanal = await db.fetch(`duyuruk_${message.guild.id}`);
  let dKanalyazi;
  if (dKanal == null) dKanalyazi = `Ayarlamak İçin \`${prefix}duyuru-kanal-ayarla <#kanal>\``
  else dKanalyazi = `#${dKanal}`
  //

  let modKanal = await db.fetch(`kayitlar_${message.guild.id}`);
  let modKanalyazi;
  if (modKanal == null) modKanalyazi = `Ayarlamak İçin \`${prefix}log-ayarla <#kanal>\``
  else modKanalyazi = `#${modKanal}`
  //
  
  let otomesaj = await db.fetch(`otorolm_${message.guild.id}`);
  let otorolmesajyazi;
  if (otomesaj == null) otorolmesajyazi = `Ayarlamak İçin \`${prefix}otorol-mesaj-ayarla <mesaj>\``
  else otorolmesajyazi = '```' + otomesaj + '```'
  //
  
   let sayacgmesaj = await db.fetch(`sayacgm_${message.guild.id}`);
  let sayacgmesajyazi;
  if (sayacgmesaj == null) sayacgmesajyazi = `Ayarlamak İçin \`${prefix}sayaç-giriş-mesaj-ayarla <mesaj>\``
  else sayacgmesajyazi = '```' + sayacgmesaj + '```'
  //
  
  let sayaccmesaj = await db.fetch(`sayaccm_${message.guild.id}`);
  let sayaccmesajyazi;
  if (sayaccmesaj == null) sayaccmesajyazi = `Ayarlamak İçin \`${prefix}sayaç-çıkış-mesaj-ayarla <mesaj>\``
  else sayaccmesajyazi = '```' + sayaccmesaj + '```'
  
  //
  let hgKanal = await db.fetch(`mgcK_${message.guild.id}`);
  let hgKanalyazi;
  if (hgKanal == null) hgKanalyazi = `Ayarlamak İçin \`${prefix}giriş-çıkış <#kanal>\``
  else hgKanalyazi = `#${hgKanal}`
  //
  //
  let giris = await db.fetch(`girism_${message.guild.id}`);
  let girisYazi;
  if (giris == null) girisYazi = `Giriş Mesajı Ayarlanmamış, Ayarlamak İçin \`${prefix}giriş-mesaj-ayarla <mesaj>\``
  else girisYazi = '```' + giris + '```'
  //
  
    let cikis = await db.fetch(`cikism_${message.guild.id}`);
  let cikisYazi;
  if (cikis == null) cikisYazi = `Çıkış Mesajı Ayarlanmamış, Ayarlamak İçin \`${prefix}çıkış-mesaj-ayarla <mesaj>\``
  else cikisYazi = '```' + cikis + '```'
  //
  let otorolKanal = await db.fetch(`rolK_${message.guild.id}`);
  let otorolKanalyazi;
  if (otorolKanal == null) otorolKanalyazi = `Ayarlamak İçin \`${prefix}otorol <@rol> <#kanal>\``
  else otorolKanalyazi = `#${otorolKanal}`
  //
  let sayac = await db.fetch(`sayac_${message.guild.id}`);
  let sayacs;
  if (sayac == null) sayacs = `Ayarlamak İçin \`${prefix}sayaç <sayı> <#kanal>\``
  else sayacs = `${sayac}`
  //
  let sayacKanal = await db.fetch(`sayacK_${message.guild.id}`);
  let sayacKanalyazi;
  if (sayacKanal == null) sayacKanalyazi = `Ayarlamak İçin \`${prefix}sayaç <sayı> <#kanal>\``
  else sayacKanalyazi = `#${sayacKanal}`
  //
 
  
  let duyuruKanal = await db.fetch(`duyuruk_${message.guild.id}`);
  let duyuruKanalyazi;
  if (duyuruKanal == null) duyuruKanalyazi = `Ayarlamak İçin \`${prefix}duyuru-kanal-ayarla <#kanal>\``
  else duyuruKanalyazi = `#${duyuruKanal}`
  
  
  //
  
        
  let otorol = await db.fetch(`otorol_${message.guild.id}`)
  let autorole;
  if (otorol == null) autorole = `Ayarlamak İçin \`${prefix}otorol <@rol> <#kanal>\``
  else autorole = `@${otorol}`
  
  const ayarlar = new Discord.RichEmbed()
      .setColor(0xFF7C00)
  .setTitle(`${message.guild.name} Adlı Sunucunun Ayarları`)
      .addField("Otorol", `${autorole}`, true)
      .addField("Otorol mesaj kanalı", `${otorolKanalyazi}`, true)
  .addField("Otorol mesajı", `${otorolmesajyazi}`, true)
  .addField("Duyuru kanalı", `${dKanalyazi}`, true)
  .addField("Mod log kanalı", `${modKanalyazi}`, true)
  .addField("Küfür engelleme", `${kufurYazi}`, true)
  .addField("Reklam engelleme", `${reklamYazi}`, true)
      .addField("Sayaç mesaj kanalı", `${sayacKanalyazi}`, true)
      .addField("Sayaç", `${sayacs}`, true)
  .addField("Sayaç giriş mesajı", `${sayacgmesajyazi}`, true)
  .addField("Sayaç çıkış mesajı", `${sayaccmesajyazi}`, true)
      .addField("Duyuru kanalı", `${duyuruKanalyazi}`, true)
     .addField("Mesajlı hoşgeldin kanalı", `${hgKanalyazi}`, true)
      .addField("Selamün Aleyküm filtresi", `${saasYazi}`, true)
      .addField("Hoşgeldin mesaj", `${girisYazi}`, true)
  .addField("Görüşürüz mesaj", `${cikisYazi}`, true)
      .setFooter(`${client.user.username}`, client.user.avatarURL)
  .setThumbnail(message.guild.iconURL)
      message.channel.send(ayarlar)
};
	
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'ayarlar',
  permLevel: 0
 };
 
 exports.help = {
 name: 'ayarlar',
 description: 'Bot İçin Sunucuyu Ayarlarını Gösterir.',
 usage: 'ayarlar'
 }