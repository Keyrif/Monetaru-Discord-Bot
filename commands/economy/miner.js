const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const Guild = require('../../guild');
const color = process.env.COLOR;
const prefix = process.env.PREFIX;
const quiz = require('../../quiz2.json');
const humanizeDuration = require('humanize-duration');
const cooldowns = new Map();
const economy = require('../../economy')
module.exports = {
  commands: ['mine'],
  expectedArgs: ".",
  callback: async (message, arguments) => {
    const arrayOfUsersIds = ['8794328794879328794897', '789438729489732789'];

for (let i = 0; i < arrayOfUsersIds.length; i++) {
    if (message.author.id === arrayOfUsersIds[i]) return message.reply('❌ **Nu poti folosi comenzile de economie!**\n**REASON: blacklist**');
};
    let user = message.author;
    const item = quiz[Math.floor(Math.random() * quiz.length)];
    //const filter = m => (m.content.includes('discord') && m.author.id != client.user.id);
    const filter = response => {
      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase() && response.author.id === user.id);
    };
    const collector = message.channel.createMessageCollector(filter, { time: 15000 });

    collector.on('collect', m => {
      console.log(`Collected ${m.content}`);
    });

    collector.on('end', collected => {
      console.log(`Collected ${collected.size} items`);
    });
    const cooldown = cooldowns.get(message.author.id);
    if (cooldown) {
      const remaining = humanizeDuration(cooldown - Date.now());

return message.reply(`**⛏️︲ Miner:** Trebuie sa astepti \`${remaining}\` ca sa muncesti iar.`)
        .catch(console.error);
    }
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('⛏️︲ Mining...')
      .setDescription(item.question)
      .setThumbnail('https://art.pixilart.com/7b7bd37bb742cd4.png')
      .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
    message.channel.send(embed).then(() => {
      message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
        .then(collected => {
          const randomNumber = Math.floor(Math.random() * 31) + 50;
          const coins = randomNumber
      
          const guildId = message.guild.id
          const userId = message.author.id
          const newCoins = economy.addCoins(guildId, userId, coins)
          const embed2 = new MessageEmbed()
          .setColor(color)
          .setTitle('⛏️︲ Miner')
          .setThumbnail('https://art.pixilart.com/7b7bd37bb742cd4.png')
          .addField(`Ai minat ca ultimul sclav si ai primit:`, `+ ${coins} <:newccoin:911788039603359774>`, true)
          .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
          message.channel.send(embed2);
        })
        .catch(collected => {
          message.channel.send(`${message.author}, ti-a expirat timpul mosule.`);
        });
    });
    cooldowns.set(message.author.id, Date.now() + 1800000);
    setTimeout(() => cooldowns.delete(message.author.id), 1800000);
  }
}
