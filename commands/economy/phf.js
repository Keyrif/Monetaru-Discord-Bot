const discord = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
const color = process.env.COLOR;
const humanizeDuration = require('humanize-duration');
const cooldowns = new Map();
const economy = require('../../economy')
module.exports = {
    commands: ['phf'],
    expectedArgs: "",
    callback: async (message) => {
        const cooldown = cooldowns.get(message.author.id);
        if (cooldown) {
          const remaining = humanizeDuration(cooldown - Date.now());
        
          return message.channel.send(`Asteapta fraticu **${remaining}** ca sa te joci iar.`)
            .catch(console.error);
        }
		let embed = new discord.MessageEmbed()
    .setColor(color)
		.setTitle("<:bump:909822887404380240> PIATRA - HARTIE - FOARFECA")
		.setDescription("Reactioneaza ca sa alegi o optiune.\n‎ \n🗻 - Piatra\n📰 - Hartie\n✂ - Foarfeca\n‎ ")
		.setFooter('Daca nu alegi o optiune in urmatoarele 5 secunde jocul o sa se anuleze!\nPoti sa te joci odata la 5 de secunde.')
		let msg = await message.channel.send(embed)
		await msg.react("🗻")
		await msg.react("📰")
    await msg.react("✂")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 5000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("<:bump:909822887404380240> PIATRA - HARTIE - FOARFECA")
            .setDescription('Rezultatele sunt urmatoarele:')
        		.addField("Ai ales:", `${reaction.emoji.name}`)
        		.addField("Am ales:", `${me}`)
			await msg.edit(result)
        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
					const mention = message.mentions.users.first()
					const randomNumber = Math.floor(Math.random() * -6) + -40;
					const coins = randomNumber
				
					const guildId = message.guild.id
					const userId = message.author.id
				
					const newCoins = await economy.addCoins(guildId, userId, coins)
				
					const args = message.content.split(" ").slice(1);
					const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
					const guild = client.guilds.cache.get(message.guild.id);
					const embedlose = new MessageEmbed() 
					.setColor(color)
					.setTitle('<:bump:909822887404380240> PIATRA - HARTIE - FOARFECA')
					.setDescription('‎\n**Ce prost esti, ai pierdut.** <:wait:907313522726281266>')
					.setThumbnail('https://i.imgur.com/qTfipOV.png')
					.addField(`‎`, ` ${coins} <:newccoin:911788039603359774>`, true)
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
				.setTitle('<:bump:909822887404380240> PIATRA - HARTIE - FOARFECA')
				.setDescription('‎\n**Egalitate.   <:wait:907313522726281266>**')
				.setThumbnail('https://i.imgur.com/qTfipOV.png')
				.addField(`‎`, ` + 0 <:newccoin:911788039603359774>`, true)
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
                .setTitle('<:bump:909822887404380240> PIATRA - HARTIE - FOARFECA')
                .setDescription('‎\n**Bravo, ai castigat!** <a:heart:775671967373197312>')
                .setThumbnail('https://i.imgur.com/qTfipOV.png')
                .addField(`‎`, `+ ${coins} <:newccoin:911788039603359774>`, true)
                .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
                return message.channel.send(embedwin);
            }
        })
        .catch(collected => {
                message.reply('\n<:bump:909822887404380240> Jocul a fost anulat deoarece nu ai raspuns la timp! 🔻');
            })
            cooldowns.set(message.author.id, Date.now() + 5000);
            setTimeout(() => cooldowns.delete(message.author.id), 5000);
}
}
