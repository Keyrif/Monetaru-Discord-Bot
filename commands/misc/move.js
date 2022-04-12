const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const Guild = require('../../guild');
const color = process.env.COLOR;
const prefix = process.env.PREFIX;
const mongo = require('../../mongo')
const commandPrefixSchema = require('../../schemas/command-prefix-schema')

module.exports = {
    commands: ['move'],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: "<client>",
      permissions: 'ADMINISTRATOR',
    callback: async (message) => {
      message.delete()
        if (!message.guild.id === '899340027719479347') {
            messag.reply('Aceasta comanda nu poate fi executata.')
        }
        if (message.guild.id === '899340027719479347') {
            let role = message.guild.roles.cache.get("899418729140592701");
            const autorTag = message.author.tag
            const membru = message.mentions.users.first()
            const server = "Graphic Design RO"
            message.channel.send(`**${membru}, acest ticket necesita atentia ownerului, te rugam sa astepti pana acesta raspunde!**\n\n<@882902341576196097>`)
        }
    }
}
