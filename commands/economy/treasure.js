const Discord = require("discord.js");
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const Guild = require('../../guild');
const color = process.env.COLOR;
const prefix = process.env.PREFIX;
const humanizeDuration = require('humanize-duration');
const cooldowns = new Map();
const economy = require('../../economy')

module.exports = {
  commands: ['treasurehunt'],
  expectedArgs: ".",
  callback: async (message) => {
    const arrayOfUsersIds = ['8794328794879328794897', '789438729489732789'];

for (let i = 0; i < arrayOfUsersIds.length; i++) {
    if (message.author.id === arrayOfUsersIds[i]) return message.reply('❌ **Nu poti folosi comenzile de economie!**\n**REASON: blacklist**');
};
    console.log('s')
    const user = message.author
    const cooldown = cooldowns.get(message.author.id);
    if (cooldown) {
      const remaining = humanizeDuration(cooldown - Date.now());
    
      return message.reply(`**💰︲ Treasure Hunter**: Asteapta fraticu **${remaining}** ca sa cauti iar.`)
        .catch(console.error);
    }
    const mention = message.mentions.users.first()
	const randomNumber2 = Math.floor(Math.random() * 1751) + 250;
	const randomNumber = Math.floor(Math.random() * 4751) + 250;
	const treasuremoney = [
		[randomNumber2],
		[randomNumber],
		[randomNumber2],
		[randomNumber],
		[randomNumber2],
		[randomNumber],
		[randomNumber2]
	  ];
	const randomMoney = Math.floor(Math.random() * Math.floor(treasuremoney.length));
      let randomCoins = treasuremoney[randomMoney][0];
	const coins = randomCoins

    const guildId = message.guild.id
    const userId = message.author.id

    const newCoins = await economy.addCoins(guildId, userId, coins)

    const args = message.content.split(" ").slice(1);
    const embed = new MessageEmbed()
        .setColor(color)
        .setTitle('💰︲ Treasure Found!')
        .setThumbnail('https://opengameart.org/sites/default/files/styles/medium/public/gold_pile_0.png')
        .addField(`Ai gasit comoara secreta:`, `+ ${coins} <:newccoin:911788039603359774>`, true)
        .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
    message.channel.send(embed);
    cooldowns.set(message.author.id, Date.now() + 432000000);
    setTimeout(() => cooldowns.delete(message.author.id), 432000000);
    }
  }
