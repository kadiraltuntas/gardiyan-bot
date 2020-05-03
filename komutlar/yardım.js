const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
	if (!args[0]) {
		const help = {}
		client.commands.forEach((command) => {
			const cat = command.conf.kategori;
			if (!help.hasOwnProperty(cat)) help[cat] = [];
			help[cat].push(`\`${command.help.name}\``);
		})
		var str = ''
		for (const kategori in help) {
			str += `**${kategori.charAt(0).toUpperCase() + kategori.slice(1)}** ${help[kategori].join(" | ")}\n\n`
		}

		const embed = new Discord.RichEmbed()
			.setAuthor(`${client.user.username} Komutları`)
			.setDescription(`= Komut Listesi =\n[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]\n\n${str}`)
			.setTimestamp()
			.setColor("RANDOM")
		message.channel.send({embed})
		return
	}
	let command = args[0]
	if (client.commands.has(command)) {
		command = client.commands.get(command)
		var yetki = command.conf.permLevel.toString()
			.replace("0", `Yetki gerekmiyor.`)
			.replace("1", `Mesajları Yönet yetkisi gerekiyor.`)
			.replace("2", `Üyeleri At-Engelle yetkisi gerekiyor.`)
			.replace("3", `Yönetici yetkisi gerekiyor.`)
			.replace("4", `Bot sahibi yetkisi gerekiyor.`)
		const embed = new Discord.RichEmbed()
			.addField('Komut', command.help.name, false)
			.addField('Açıklama', command.help.description, false)
			.addField('Kullanabilmek için Gerekli Yetki', `\`${yetki}\``)  
			.addField('Doğru Kullanım', `\`${ayarlar.prefix}${command.help.usage}\``)
			.addField('Alternatifler', command.conf.aliases[0] ? command.conf.aliases.join(', ') : 'Bulunmuyor')
			.setTimestamp()
			.setColor("RANDOM")
		message.channel.send({embed})
	} else {
		const embed = new Discord.RichEmbed()
			.setDescription(`${args[0]} diye bir komut bulunamadı. Lütfen geçerli bir komut girin. Eğer komutları bilmiyorsanız ${ayarlar.prefix}yardım yazabilirsiniz.`)
			.setTimestamp()
			.setColor("RANDOM")
		message.channel.send({embed})
	}
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['h', 'halp', 'help', 'y', 'komutlar','tümkomutlar'],
	permLevel: 0,
	kategori: 'bot'
}

exports.help = {
	name: 'yardım',
	description: 'Tüm komutları gösterir.',
	usage: 'yardım [komut]'
}