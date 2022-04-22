import { Hospital } from './hospital.model'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'

// @route GET /hospitals/
// @desc List of all hospitals
// @access Private

export const getAllHospitals = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query as any

  try {
    const hospitals = await Hospital.find()
      .limit(limit)
      .skip((page - 1) * limit)

    const count = await Hospital.countDocuments()

    res.status(200).json({
      totalItems: limit,
      data: hospitals,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    })
  } catch (err) {
    console.error(err)
  }
})
