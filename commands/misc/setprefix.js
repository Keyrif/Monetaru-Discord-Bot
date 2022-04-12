const mongoose = require('mongoose')
const Guild = require('../../guild.js')
const { MessageEmbed } = require('discord.js');
const mongo = require('../../mongo')
const commandPrefixSchema = require('../../schemas/command-prefix-schema')

// Importing command-base so we have access to the
// "updateCache" function which I forgot to cover in the video
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
