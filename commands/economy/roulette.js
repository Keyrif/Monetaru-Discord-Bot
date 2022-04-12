// (!) THIS IS A TEST, ALPHA COMMAND THAT I NEVER FINISHED IT, I DO NOT RECOMMEND TO USE IT BUT GO AHEAD IF YOU REALLY WANT!

const discord = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
const color = process.env.COLOR;
const humanizeDuration = require('humanize-duration');
const cooldowns = new Map();
const economy = require('../../economy')
module.exports = {
    commands: ['ruleta'],
    expectedArgs: "",
    callback: async (message) => {
		message.reply("\n<:da1:874991371910520875> **Aceasta comanda este deocamdata in BETA si sunt posibilitati sa nu functioneze cum trebuie.**")
        const cooldown = cooldowns.get(message.author.id);
        if (cooldown) {
          const remaining = humanizeDuration(cooldown - Date.now());
        
          return message.channel.send(`CASINO: Asteapta fraticu **${remaining}** ca sa te joci iar.`)
            .catch(console.error);
        }
		let embed = new discord.MessageEmbed()
    	.setColor(color)
		.setTitle("<:da1:875041588827537419> CASINO - RULETA")
		.setDescription("Reactioneaza ca sa alegi o culoare.\n‎ \n🔴 - ROSU\n🟢 - VERDE\n⚫ - NEGRU\n‎ ")
		.setThumbnail('https://officialpsds.com/imageview/r1/8m/r18m8j_large.png?1521316502')
		.setFooter('Daca nu alegi o optiune in urmatoarele 60 secunde jocul o sa se anuleze!\nPoti sa te joci odata la 60 de secunde.')
		let msg = await message.channel.send(embed)
		await msg.react("🔴")
		await msg.react("🟢")
		await msg.react("⚫")

		const filter = (reaction, user) => {
            return ['🔴', '⚫', '🟢'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🔴', '⚫', '🟢']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("<:da1:875041588827537419> CASINO - RULETA")
            .setDescription('Rezultatele sunt urmatoarele:')
        		.addField("Ai ales:", `${reaction.emoji.name}`)
        		.addField("Am ales:", `${me}`)
			await msg.edit(result)
        		if ((me === "🔴" && reaction.emoji.name === "⚫") ||
                (me === "🟢" && reaction.emoji.name === "🔴") ||
                (me === "⚫" && reaction.emoji.name === "🟢")) {
					const mention = message.mentions.users.first()
					const randomNumber = Math.floor(Math.random() * -6) + -40;
					const coins = randomNumber
				
					const guildId = message.guild.id
					const userId = message.author.id
				
					const newCoins = await economy.addCoins(guildId, userId, coins)
					//var culori = [
					//	"NEGRU",
					//	"ROSU"
					//  ]
					//var rculori = answers[Math.floor(Math.random() * culori.length)];
					const args = message.content.split(" ").slice(1);
					const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
					const guild = client.guilds.cache.get(message.guild.id);
					const embedlose = new MessageEmbed() 
					.setColor(color)
					.setTitle('<:da1:875041588827537419> CASINO - RULETA')
					.setDescription(`‎\n**Ai avut ghinion si ai pierdut. Culoarea castigatoare era {rculori}**  <:wait:800487478725181461>`)
					.setThumbnail('https://officialpsds.com/imageview/r1/8m/r18m8j_large.png?1521316502')
					.addField(`‎`, ` ${coins} <:ccoin:907366654269349898>`, true)
					.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
					return message.channel.send(embedlose);
            } else if (me === reaction.emoji.name) {
				const mention = message.mentions.users.first()
				const randomNumber = Math.floor(Math.random() * -6) + -40;
				const coins = randomNumber
			
				const guildId = message.guild.id
				const userId = message.author.id
			
				const newCoins = await economy.addCoins(guildId, userId, coins)
			
				const args = message.content.split(" ").slice(1);
				const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
				const guild = client.guilds.cache.get(message.guild.id);
				const embedegalitate = new MessageEmbed() 
				.setColor(color)
				.setTitle('<:da1:875041588827537419> CASINO - RULETA')
				.setDescription('‎\n**Egalitate.   <:ceplm:874040671344926790>**')
				.setThumbnail('https://officialpsds.com/imageview/r1/8m/r18m8j_large.png?1521316502')
				.addField(`‎`, ` + 0 <:ccoin:907366654269349898>`, true)
				.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
                return message.reply(embedegalitate);
            } else {
                const mention = message.mentions.users.first()
                const randomNumber = Math.floor(Math.random() * 6) + 20;
                const coins = randomNumber
            
                const guildId = message.guild.id
                const userId = message.author.id
            
                const newCoins = await economy.addCoins(guildId, userId, coins)
            
                const args = message.content.split(" ").slice(1);
                const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
                const guild = client.guilds.cache.get(message.guild.id);
                const embedwin = new MessageEmbed() 
                .setColor(color)
                .setTitle('<:da1:875041588827537419> CASINO - RULETA')
                .setDescription('‎\n**Bravo, ai ales culoarea castigatoare!** <a:heart:775671967373197312>')
                .setThumbnail('https://officialpsds.com/imageview/r1/8m/r18m8j_large.png?1521316502')
                .addField(`‎`, `+ ${coins} <:ccoin:907366654269349898>`, true)
                .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
                return message.channel.send(embedwin);
            }
        })
        .catch(collected => {
                message.reply('\nJocul a fost anulat deoarece nu ai raspuns la timp! <a:no:825852465009786940>');
            })
            cooldowns.set(message.author.id, Date.now() + 60000);
            setTimeout(() => cooldowns.delete(message.author.id), 60000);
}
}
