const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const Guild = require('../../guild');
const color = process.env.COLOR;
const prefix = process.env.PREFIX;
const mongo = require('../../mongo')
const commandPrefixSchema = require('../../schemas/command-prefix-schema')

module.exports = {
    commands: ['textspoof'],
    minArgs: 2,
    maxArgs: 2,
    expectedArgs: "<visibleText> <invisibleText>",
    callback: async (message) => {
		const args = message.content.trim().split(/ +/g);
		const visibleText = args[1]
		const invisibleText = args[2]
		message.channel.send(`<:bump:909822887404380240> **Text-Spoofed! Result:**\n\`\`\`${visibleText}||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| ${invisibleText}\`\`\`\n\nCopy the above text and you are done!\nWARNING: Not working on mobile!`)
    }
}
