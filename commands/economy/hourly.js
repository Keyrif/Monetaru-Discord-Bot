//  (!) MADE THIS IN 2020-2022, DEPRECATED ON NEWER VERSIONS, STILL WORKS WITH D.JS 12
//  (!) THIS CODE SAW MANY CHANGES SO THERE CAN BE SOME JUNK LEFT HERE AND THERE. SORRY! NOTHING IS FATAL THOUGH, EVERYTHING IS WORKING FLAWLESSLY!
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
  commands: ['hourly'],
  expectedArgs: ".",
  callback: async (message, arguments) => {
    const arrayOfUsersIds = ['8794328794879328794897', '789438729489732789'];

for (let i = 0; i < arrayOfUsersIds.length; i++) {
    if (message.author.id === arrayOfUsersIds[i]) return message.reply('❌ **Nu poti folosi comenzile de economie!**\n**REASON: blacklist**');
};
    const cooldown = cooldowns.get(message.author.id);
    if (cooldown) {
      const remaining = humanizeDuration(cooldown - Date.now());
    
      return message.channel.send(`<:bump:909822887404380240> Asteapta fraticu **${remaining}** ca sa cersesti iar.`)
        .catch(console.error);
    }
    const mention = message.mentions.users.first()
    const randomNumber = Math.floor(Math.random() * 11) + 20;
    const coins = randomNumber

    const guildId = message.guild.id
    const userId = message.author.id

    const newCoins = await economy.addCoins(guildId, userId, coins)

    const args = message.content.split(" ").slice(1);
    const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
    const guild = client.guilds.cache.get(message.guild.id);
    const embed = new MessageEmbed()
        .setColor(color)
        .setTitle('Hourly')
        .setThumbnail('https://i.imgur.com/qTfipOV.png')
        .addField(`Ai cersit in statia de STB si ai primit:`, `+ ${coins} <:newccoin:911788039603359774>`, true)
        .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
    message.channel.send(embed);
    cooldowns.set(message.author.id, Date.now() + 3600000);
    setTimeout(() => cooldowns.delete(message.author.id), 3600000);
  },
}
