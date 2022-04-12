const economy = require('../../economy')

module.exports = {
  commands: ['pay', 'send', 'transfer'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<persoana> <suma>",
  callback: async (message, arguments, text) => {
    const arrayOfUsersIds = ['8794328794879328794897', '789438729489732789'];

for (let i = 0; i < arrayOfUsersIds.length; i++) {
    if (message.author.id === arrayOfUsersIds[i]) return message.reply('❌ **Nu poti folosi comenzile de economie!**\n**REASON: blacklist**');
};
    const { guild, member } = message

    const target = message.mentions.users.first()
    if (!target) {
      message.reply('prostule, pai cui sa ii dau banii?')
      return
    }

    const coinsToGive = arguments[1]
    if (isNaN(coinsToGive)) {
      message.reply('prostule, cati bani sa ii dau?')
      return
    }

	if(message.author.id === target.id) 
	{
		message.reply('nu iti poti da bani singur.')
		return;
	}

    const coinsOwned = await economy.getCoins(guild.id, member.id)
    if (coinsOwned < coinsToGive) {
      message.reply(`ai de pula mea, nu ai \`${coinsToGive}\` tokenuri!`)
      return
    }

    const remainingCoins = await economy.addCoins(
      guild.id,
      member.id,
      coinsToGive * -1
    )
    const newBalance = await economy.addCoins(guild.id, target.id, coinsToGive)

    message.reply(
      `Bravo, ai trimis lui <@${target.id}> \`${coinsToGive}\` tokenuri! Acum are \`${newBalance}\` tokenuri si tu ai acum \`${remainingCoins}\` tokenuri!`
    )
  },
}
