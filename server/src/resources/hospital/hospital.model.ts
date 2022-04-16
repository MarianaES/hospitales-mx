import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema(
  {
    _id: mongoose.SchemaTypes.ObjectId,
    code: { type: String, required: true },
    address: {
      state: {
        type: String,
        required: true,
      },
      municipality: {
        type: String,
        required: true,
      },
    },
    institution: {
      code: {
        type: String,
      },
      type: {
        type: String,
      },
      unit: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      status: {
        type: String,
      },
    },
    closing: {
      year: { type: Number },
    },
  },
  { timestamps: true },
)

export const Hospital = mongoose.model('hospital', hospitalSchema, 'hospitals')
