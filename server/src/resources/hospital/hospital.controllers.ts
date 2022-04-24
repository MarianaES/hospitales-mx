import { Hospital } from './hospital.model'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'

// @route GET /hospitals/
// @desc List of all hospitals
// @access Private

export const getAllHospitals = asyncHandler(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    state,
    municipality,
    code,
    type,
  } = req.query as any

  const query = {} as Record<string, any>

  if (state) {
    query['address.state'] = state
    query['address.municipality'] = municipality
    query['institution.code'] = code
  }

  if (type) {
    query['institution.unit'] = type
  }

  try {
    const hospitals = await Hospital.find({ ...query })
      .limit(limit)
      .skip((page - 1) * limit)

    const count = await Hospital.countDocuments()

    res.status(200).json({
      totalItems: hospitals.length,
      data: hospitals,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    })
  } catch (err) {
    console.error(err)
  }
})
