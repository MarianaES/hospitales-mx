import mongoose from 'mongoose'

const { MONGODB_ATLAS_URI } = process.env

export default function connectDB() {
  if (!MONGODB_ATLAS_URI) {
    throw new Error('MongoDB URI missing')
  }

  mongoose.connect(MONGODB_ATLAS_URI).catch((error: string) => {
    throw new Error(error)
  })

  mongoose.connection
    .once('open', function () {
      // eslint-disable-next-line no-console
      console.log(
        `🌱 Successfully connected to MongoDB: ${mongoose.connection.host}`,
      )
    })
    .on('error', function (err: string) {
      // eslint-disable-next-line no-console
      console.log(`⛳️ Could not connect to MongoDB, error: ${err}`)
    })
}
