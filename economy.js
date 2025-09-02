//  (!) MADE THIS IN 2020-2022, DEPRECATED ON NEWER VERSIONS, STILL WORKS WITH D.JS 12
//  (!) THIS CODE SAW MANY CHANGES SO THERE CAN BE SOME JUNK LEFT HERE AND THERE. SORRY! NOTHING IS FATAL THOUGH, EVERYTHING IS WORKING FLAWLESSLY!
const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')

const coinsCache = {} // { 'guildId-userId': coins }

module.exports = (client) => {}

module.exports.addCoins = async (guildId, userId, coins) => {
  return await mongo().then(async (mongoose) => {
    try {
      console.log('Running findOneAndUpdate()')

      const result = await profileSchema.findOneAndUpdate(
        {
          guildId,
          userId,
        },
        {
          guildId,
          userId,
          $inc: {
            coins,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      console.log('RESULT:', result)

      coinsCache[`${guildId}-${userId}`] = result.coins

      return result.coins
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getCoins = async (guildId, userId) => {
  const cachedValue = coinsCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      console.log('Running findOne()')

      const result = await profileSchema.findOne({
        guildId,
        userId,
      })

      console.log('RESULT:', result)

      let coins = 0
      if (result) {
        coins = result.coins
      } else {
        console.log('Inserting a document')
        await new profileSchema({
          guildId,
          userId,
          coins,
        }).save()
      }

      coinsCache[`${guildId}-${userId}`] = coins

      return coins
    } finally {
      mongoose.connection.close()
    }
  })
}
