//  (!) MADE THIS IN 2020-2022, DEPRECATED ON NEWER VERSIONS, STILL WORKS WITH D.JS 12
//  (!) THIS CODE SAW MANY CHANGES SO THERE CAN BE SOME JUNK LEFT HERE AND THERE. SORRY! NOTHING IS FATAL THOUGH, EVERYTHING IS WORKING FLAWLESSLY!
const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const Guild = require('../../guild');
const color = process.env.COLOR;
const prefix = process.env.PREFIX;
const mongo = require('../../mongo')
const commandPrefixSchema = require('../../schemas/command-prefix-schema')

module.exports = {
    commands: ['alert'],
      permissions: 'ADMINISTRATOR',
    callback: async (message) => {
        if (!message.guild.id === '899340027719479347') {
            messag.reply('Aceasta comanda nu poate fi executata.')
        }
        if (message.guild.id === '899340027719479347') {
            if (!message.member.roles.cache.some(role => role.name.includes('ALERT'))) {
                let role = message.guild.roles.cache.find(r => r.id === "919999343145127957");
                message.guild.member(message.author).roles.add(role);
                const embed2 = new MessageEmbed()
                .setColor("#00ff00")
                .setTitle('ALERT')
                .setDescription("<:verde:909863626771410974> | **ENABLED**")
                .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
                message.channel.send(embed2);
              }
            if (message.member.roles.cache.some(role => role.name.includes('ALERT'))) {
                let role = message.guild.roles.cache.find(r => r.id === "919999343145127957");
                message.guild.member(message.author).roles.remove(role);
                const embed2 = new MessageEmbed()
                .setColor("ff0000")
                .setTitle('ALERT')
                .setDescription("<:rosu:909865200046473256> | **DISABLED**")
                .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
                message.channel.send(embed2);
              }
        }
    }
}
