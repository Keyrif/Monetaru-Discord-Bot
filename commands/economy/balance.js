const Discord = require('discord.js')
const economy = require('../../economy')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
const color = process.env.COLOR;

module.exports = {
  commands: ['balance', 'bal', 'portofel'],
  maxArgs: 1,
  expectedArgs: "",
  callback: async (message) => {
    const arrayOfUsersIds = ['8794328794879328794897', '789438729489732789'];

for (let i = 0; i < arrayOfUsersIds.length; i++) {
    if (message.author.id === arrayOfUsersIds[i]) return message.reply('❌ **Nu poti folosi comenzile de economie!**\n**REASON: blacklist**');
};
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id

    const coins = await economy.getCoins(guildId, userId)
    const kyfra1 = (coins / 1000000)
    const gipsycoin = (kyfra1 + 0.0000173)
    const args = message.content.split(" ").slice(1);
    const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
    const guild = client.guilds.cache.get(message.guild.id);
    const embed = new MessageEmbed()
        .setColor(color)
        .setTitle(`<:bump:909822887404380240> Portofel - ${user.username}`)
        .setThumbnail('https://i.imgur.com/gMNxsgC.png')
        .setDescription(`**TOKENS:**\n » ${coins} <:newccoin:911788039603359774>\n`, true)
        .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true, size: 1024 })}`)
    message.channel.send(embed);
  },
}
