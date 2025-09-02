//  (!) MADE THIS IN 2020-2022, DEPRECATED ON NEWER VERSIONS, STILL WORKS WITH D.JS 12
//  (!) THIS CODE SAW MANY CHANGES SO THERE CAN BE SOME JUNK LEFT HERE AND THERE. SORRY! NOTHING IS FATAL THOUGH, EVERYTHING IS WORKING FLAWLESSLY!
const mongoose = require('mongoose')
const Guild = require('../../guild.js')
const { MessageEmbed } = require('discord.js');
const mongo = require('../../mongo')
const commandPrefixSchema = require('../../schemas/command-prefix-schema')

const commandBase = require('../../command-base')

module.exports = {
  commands: 'setprefix%%%%%%ajsdpqd02ud802udashdajlhdssjahdo2hd2hajsdha',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "<prefix>",
  permissionError: 'Nu ai permisiunea \`ADMINISTRATOR\`, asta e.',
  permissions: 'ADMINISTRATOR',
  callback: async (client, message, args) => {

      
        const settings = await Guild.findOne({
            guildID: message.guild.id
        }, (err, guild) => {
            if (err) console.error(err)
            if (!guild) {
                const newGuild = new Guild({
                    _id: mongoose.Types.ObjectId(),
                    guildID: message.guild.id,
                    guildName: message.guild.name,
                    prefix: process.env.PREFIX
                })

                newGuild.save()
                    .then(result => console.log(result))
                    .catch(err => console.error(err));

                return message.channel.send('Acest server nu era in baza noastra de date! L-am adaugat.');
            }
        });

        if (args.length < 1) {
            return message.channel.send(`Model: \`setprefix #\` \nPrefixul actual al acestui server este \`${settings.prefix}\`\nPrefixul trebuie sa contina maxim \`1\` caracter.`);
        };
        if (args[0].length < 1) {
            return message.channel.send(`Model: \`setprefix #\` \nPrefixul actual al acestui server este \`${settings.prefix}\`\nPrefixul trebuie sa contina maxim \`1\` caracter.`);
        };
        if (args[0].length > 1) {
            return message.channel.send(`Model: \`setprefix #\` \nPrefixul actual al acestui server este \`${settings.prefix}\`\nPrefixul trebuie sa contina maxim \`1\` caracter.`);
        };
        
        await settings.updateOne({
            prefix: args[0]
        });

        return message.channel.send(`Prefixul a fost schimbat. Prefixul nou este: \`${args[0]}\``);
    }
}
