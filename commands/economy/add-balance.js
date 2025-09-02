const economy = require('../../economy')

module.exports = {
  commands: ['addbalance', 'addbal'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<@user> <suma>",
  permissionError: '<:bump:909822887404380240> Nu ai gradul administrativ necesar.',
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments) => {
    const arrayOfUsersIds = ['8794328794879328794897', '789438729489732789'];

for (let i = 0; i < arrayOfUsersIds.length; i++) {
    if (message.author.id === arrayOfUsersIds[i]) return message.reply('❌ **Nu poti folosi comenzile de economie!**\n**REASON: blacklist**');
};
    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('<:bump:909822887404380240> Nu ai specificat o persoana.')
      return
    }

    const coins = arguments[1]
    if (isNaN(coins)) {
      message.reply('<:bump:909822887404380240> Numar invalid.')
      return
    }

    const guildId = message.guild.id
    const userId = mention.id

    const newCoins = await economy.addCoins(guildId, userId, coins)

    message.reply(
      `\n<:bump:909822887404380240> Ai dat lui <@${userId}> \`${coins}\` <:ccoin:907366654269349898>\n<:bump:909822887404380240> Acum detine \`${newCoins}\` <:ccoin:907366654269349898>`
    )
  },
}
