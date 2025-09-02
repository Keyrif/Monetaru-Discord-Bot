//  (!) MADE THIS IN 2020-2022, DEPRECATED ON NEWER VERSIONS, STILL WORKS WITH D.JS 12
//  (!) THIS CODE SAW MANY CHANGES SO THERE CAN BE SOME JUNK LEFT HERE AND THERE. SORRY! NOTHING IS FATAL THOUGH, EVERYTHING IS WORKING FLAWLESSLY!
const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const Guild = require('../../guild');
const color = process.env.COLOR;
const prefix = process.env.PREFIX;
const mongo = require('../../mongo')
const commandPrefixSchema = require('../../schemas/command-prefix-schema')
const cooldowns = new Map();
const humanizeDuration = require('humanize-duration');
module.exports = {
    commands: ['report'],
    minArgs: 1,
    expectedArgs: "<mesaj>",
      permissions: 'ADMINISTRATOR',
    callback: async (message) => {
        const cooldown = cooldowns.get(message.author.id);
        if (cooldown) {
          const remaining = humanizeDuration(cooldown - Date.now());
        
          return message.channel.send(`<:bump:909822887404380240> Ai facut un report recent.\nTimp ramas: **${remaining}**`)
            .catch(console.error);
        }
        if (!message.guild.id === '899340027719479347') {
            messag.reply('Aceasta comanda nu poate fi executata.')
        }
        if (message.guild.id === '899340027719479347') {
        const reportchannel = message.guild.channels.cache.find(ch => ch.name.includes('reports'));
        if (message.author.bot) return;
        const SayMessage = message.content.split(' ').slice(1).join(' ');
        const randomNR = Math.floor(Math.random() * 423236546642324751) + 252623420;
        const embed = new MessageEmbed()
        .setColor("ff0000")
        .setTitle(`Report Serial Number: #${randomNR}`)
        .setDescription(`» Mesajul tau: **\`${SayMessage}\`**\n\n» Vei fi contactat in cel mai scurt timp posibil!`)
        .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
        message.channel.send(embed)
        message.channel.send("Report trimis cu succes!")
        const embeddone = new MessageEmbed()
        .setColor("ff0000")
        .setTitle(`Report by ${message.author.tag}`)
        .setDescription(`» Mesajul utilizatorului: **\`${SayMessage}\`**\n\n» User ID: ${message.author.id}\n» Report ID: ${randomNR}`)
        .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
        reportchannel.send(embeddone)
        reportchannel.send("<@&919999343145127957>\n» Poti activa/dezactiva alertele folosind comanda **.alert**")
        cooldowns.set(message.author.id, Date.now() + 3600000);
        setTimeout(() => cooldowns.delete(message.author.id), 3600000);
    }
    }

}
