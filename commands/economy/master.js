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
  commands: ['master'],
  expectedArgs: ".",
  callback: async (message) => {
    const arrayOfUsersIds = ['8794328794879328794897', '789438729489732789'];

for (let i = 0; i < arrayOfUsersIds.length; i++) {
    if (message.author.id === arrayOfUsersIds[i]) return message.reply('❌ **Nu poti folosi comenzile de economie!**\n**REASON: blacklist**');
};
    const user = message.author
    if (!message.member.roles.cache.some(role => role.name.includes('Master'))) {
      message.reply('<:bump:909822887404380240> Nu ai gradul de **Master**...asta e!')
    }
    const cooldown = cooldowns.get(message.author.id);
    if (cooldown) {
      const remaining = humanizeDuration(cooldown - Date.now());
    
      return message.channel.send(`<:bump:909822887404380240> Asteapta sefule **${remaining}** ca sa primesti iar.`)
        .catch(console.error);
    }
    if (message.member.roles.cache.some(role => role.name.includes('Master'))) {
    const mention = message.mentions.users.first()
    const coins = '1500'

    const guildId = message.guild.id
    const userId = message.author.id

    const newCoins = await economy.addCoins(guildId, userId, coins)

    const args = message.content.split(" ").slice(1);
    const embed = new MessageEmbed()
        .setColor(color)
        .setTitle('Master')
        .setThumbnail('https://i.imgur.com/qTfipOV.png')
        .addField(`Ai primit bonusul bine meritat:`, `+ ${coins} <:newccoin:911788039603359774>`, true)
        .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
    message.channel.send(embed);
    cooldowns.set(message.author.id, Date.now() + 86400000);
    setTimeout(() => cooldowns.delete(message.author.id), 86400000);
    }
  },
}
