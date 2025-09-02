const mongoose = require('mongoose')


module.exports = async () => {
  await mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}
