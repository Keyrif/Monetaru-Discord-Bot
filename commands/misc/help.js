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
  commands: ['help'],
  expectedArgs: "",
  callback: async (message) => {
	const embed = new MessageEmbed()
	.setColor(color)
	.setTitle('**<:bump:909822887404380240> MENIU DE AJUTOR**')
	.setDescription('Lista de comenzi disponibile:')
	.addField(`» Economie  `, `\`${prefix}balance\`\n\`${prefix}hourly\`\n\`${prefix}daily\`\`\n\`${prefix}boost\`\n\`${prefix}pay\`\n\`.master\``, true)
	.addField(`» Joburi`, `\`${prefix}jobs\`\n\`${prefix}work\`\n\`${prefix}mine\`\n\`${prefix}treasurehunt\`\n\`.phf\``, true)
	.addField(`» Casino`, `\`${prefix}ruleta\``, true)
	.addField(`» Diverse`, `\n\`${prefix}azterix\`\n\`${prefix}azterixinfo\`\n\`${prefix}ping\`\n\`${prefix}getinvite\`\n\`.textspoof\``, true)
	
	const embedx = new MessageEmbed()
	.setColor(color)
	.setTitle('<:bump:909822887404380240> **MENIU DE AJUTOR** [ADMIN]')
	.setDescription('Lista de comenzi disponibile:')
	.addField(`» Economie  `, `\`${prefix}balance\`\n\`${prefix}hourly\`\n\`${prefix}daily\`\n\`${prefix}boost\`\n\`${prefix}pay\`\n\`.master\``, true)
	.addField(`» Joburi`, `\`${prefix}jobs\`\n\`${prefix}work\`\n\`${prefix}mine\`\n\`${prefix}treasurehunt\`\n\`.phf\``, true)
	.addField(`» Diverse`, `\n\`${prefix}azterix\`\n\`${prefix}azterixinfo\`\n\`.ping\`\n\`${prefix}getinvite\`\n\`.textspoof\``, true)
	.addField(`» Casino`, `\`${prefix}ruleta\`\n\`${prefix}ping\``, true)
	.addField(`» Admin`, `\`${prefix}addbalance\`\n\`${prefix}setup\``, true)
if (!message.member.hasPermission("ADMINISTRATOR")) {
		message.channel.send(embed)
    return
	  }
if (message.member.guild.me.hasPermission("ADMINISTRATOR")) {
		message.channel.send(embedx)
	  }
  }
}
