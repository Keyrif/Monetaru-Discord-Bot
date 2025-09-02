//  (!) MADE THIS IN 2020-2022, DEPRECATED ON NEWER VERSIONS, STILL WORKS WITH D.JS 12
//  (!) THIS CODE SAW MANY CHANGES SO THERE CAN BE SOME JUNK LEFT HERE AND THERE. SORRY! NOTHING IS FATAL THOUGH, EVERYTHING IS WORKING FLAWLESSLY!
const Discord = require('discord.js')
const economy = require('../../economy')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
const color = process.env.COLOR;

module.exports = {
	commands: ['azterix', 'azterixcard'],
	maxArgs: 1,
	expectedArgs: "",
	callback: async (message) => {
    const arrayOfUsersIds = ['8794328794879328794897', '789438729489732789'];

for (let i = 0; i < arrayOfUsersIds.length; i++) {
    if (message.author.id === arrayOfUsersIds[i]) return message.reply('❌ **Nu poti folosi comenzile de economie!**\n**REASON: blacklist**');
};
		const target = message.author
		const targetId = target.id
		const guildId = message.guild.id
		const userId = target.id
		const coins = await economy.getCoins(guildId, userId)
		if (coins <= 999) {
			const azterixembed = new MessageEmbed()
				.setColor('#919191')
				.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
				.setImage('https://i.imgur.com/dwW1sQf.png')
				.setFooter(`For more:  .azterixinfo`)
			message.channel.send(azterixembed)
			return
		}
		if (coins <= 9999) {99
			const azterixembed = new MessageEmbed()
				.setColor('#986144')
				.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
				.setImage('https://i.imgur.com/ZoZ7acG.png')
				.setFooter(`For more:  .azterixinfo`)
			message.channel.send(azterixembed)
			return
		}
		if (coins <= 24999) {
			const azterixembed = new MessageEmbed()
				.setColor('#fafa1e')
				.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
				.setImage('https://i.imgur.com/FKb6HJj.png')
				.setFooter(`For more:  .azterixinfo`)
			message.channel.send(azterixembed)
			return
		}
		if (coins <= 49999) {
			const azterixembed = new MessageEmbed()
				.setColor(color)
				.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
				.setImage('https://i.imgur.com/rgaw4XI.png')
				.setFooter(`For more:  .azterixinfo`)
			message.channel.send(azterixembed)
			return
		}
		if (coins <= 99999) {
			const azterixembed = new MessageEmbed()
				.setColor('#ff0000')
				.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
				.setImage('https://i.imgur.com/25u1Sed.png')
				.setFooter(`For more:  .azterixinfo`)
			message.channel.send(azterixembed)
			return
		}
    if (coins >= 99999) {
			const azterixembed = new MessageEmbed()
				.setColor(color)
				.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
				.setImage(`https://i.imgur.com/BtPIMYQ.gif`)
				.setFooter(`For more:  .azterixinfo`)
			message.channel.send(azterixembed)
			return
		}
	}
}
