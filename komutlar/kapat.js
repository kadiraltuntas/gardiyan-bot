const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  const komut = args.join(" ")
  
  let girişm = await db.fetch(`girism_${message.guild.id}`)
  let çıkışm = await db.fetch(`cikism_${message.guild.id}`)
  let gckanal = await db.fetch(`mgcK_${message.guild.id}`)
  let kayitk = await db.fetch(`kayitlar_${message.guild.id}`)
  let otorol = await db.fetch(`otorol_${message.guild.id}`)
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
  if (prefix == null) prefix = '-'
  let sayac = await db.fetch(`sayac_${message.guild.id}`)
  let duyuru = await db.fetch(`duyuruk_${message.guild.id}`)
  let sayaçgm = await db.fetch(`sayacgm_${message.guild.id}`)
  let sayaçcm = await db.fetch(`sayaccm_${message.guild.id}`)

  if (!komut) return message.channel.send(`${hayir} Lütfen kapatmak istediğiniz ayarı yazın. Ayarlar: \`çıkış-mesaj\`, \`giriş-mesaj\`, \`giriş-çıkış\`, \`log-kanal\`, \`otorol\`, \`prefix\`, \`sayaç\`, \`sayaç-giriş-mesaj\`, \`sayaç-çıkış-mesaj\` veya \`duyuru-kanal\` şeklinde olmalıdır.`)
  
  if (komut == 'giriş-mesaj') {
    if (!girişm) message.channel.send(`${hayir}Bu komut zaten ayarlanmamış.`)
    if (girişm) message.channel.send(`${evet}\`Çıkış mesaj\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${prefix}giriş-mesaj\` komutunu kullanabilirsiniz.`).then(db.delete(`girism_${message.guild.id}`))
  }
  
  if (komut == 'çıkış-mesaj') {
    if (!çıkışm) message.channel.send(`${hayir}Bu komut zaten ayarlanmamış.`)
    if (çıkışm) message.channel.send(`${evet}\`Giriş mesaj\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${prefix}çıkış-mesaj\` komutunu kullanabilirsiniz.`).then(db.delete(`cikism_${message.guild.id}`))
  }
  
  if (komut == 'giriş-çıkış') {
    if (!gckanal) message.channel.send(`${hayir}Bu komut zaten ayarlanmamış.`)
    if (gckanal) message.channel.send(`${evet}\`Giriş-çıkış kanalı\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${prefix}giriş-çıkış\` komutunu kullanabilirsiniz.`).then(db.delete(`mgcK_${message.guild.id}`))
                          }
  
  if (komut == 'log-kanal') {
    if (!kayitk) message.channel.send(`${hayir}Bu komut zaten ayarlanmamış.`)
    if (kayitk) message.channel.send(`${evet}\`Kayıt kanalı\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${prefix}log-kanal\` komutunu kullanabilirsiniz.`).then(db.delete(`kayitlar_${message.guild.id}`))
                             }
  
  if (komut == 'otorol') {
    if (!otorol) message.channel.send(`${hayir}Bu komut zaten ayarlanmamış.`)
    if (otorol) message.channel.send(`${evet}\`Otorol\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${prefix}otorol\` komutunu kullanabilirsiniz.`).then(db.delete(`otorol_${message.guild.id}`), db.delete(`rolK_${message.guild.id}`))
  }
  
  if (komut == 'prefix') { 
    if (!prefix) message.channel.send(`${hayir}Bu komut zaten ayarlanmamış.`)
    if (prefix) message.channel.send(`${evet}\`Prefix\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${prefix}prefix\` komutunu kullanabilirsiniz.`).then(db.delete(`prefix_${message.guild.id}`))
  }
  
  if (komut == 'sayaç') {
    if (!sayac) message.channel.send(`${hayir}Bu komut zaten ayarlanmamış.`)
    if (sayac) message.channel.send(`${evet}\`Sayaç\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${prefix}sayaç\` komutunu kullanabilirsiniz.`).then(db.delete(`sayac_${message.guild.id}`), db.delete(`sayacK_${message.guild.id}`))
  }
  
    if (komut == 'sayaçgm') {
    if (!sayaçgm) message.channel.send(`${hayir}Bu komutlar zaten ayarlanmamış.`)
    if (sayaçgm) message.channel.send(`${evet}\`Sayaç Giriş Mesajlar\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${prefix}sayaç-giriş-mesaj\` komutunu kullanabilirsiniz.`).then(db.delete(`sayacgm_${message.guild.id}`))
    }
  
      if (komut == 'sayaçcm') {
    if (!sayaçcm) message.channel.send(`${hayir}Bu komutlar zaten ayarlanmamış.`)
    if (sayaçcm) message.channel.send(`${evet}\`Sayaç Çıkış Mesajlar\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${prefix}sayaç-çıkış-mesaj\` komutunu kullanabilirsiniz.`).then(db.delete(`sayaccm_${message.guild.id}`))
      }
      
  if (komut == 'duyuru-kanal') {
    if (!duyuru) message.channel.send(`${hayir}Bu komut zaten ayarlanmamış.`)
    if (duyuru) message.channel.send(`${evet}\`Duyuru Kanal\` özelliği başarıyla kapatıldı. Tekrar ayarlamak için \`${prefix}duyuru-kanal\` komutunu kullanabilirsiniz.`).then(db.delete(`duyuruk_${message.guild.id}`))
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'ayarlar',
  permLevel: 0
};

exports.help = {
  name: 'kapat',
  description: 'Ayarladığınız komutlardan istediğinizi kapatır.',
  usage: 'kapat <komut>'
};