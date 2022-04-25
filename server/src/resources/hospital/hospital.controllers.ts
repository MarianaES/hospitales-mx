import { Hospital } from './hospital.model'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'

// @route GET /hospitals/
// @desc List of all hospitals & filter functionality
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

  await Hospital.find({ ...query })
    .limit(limit)
    .skip((page - 1) * limit)
    .exec((error, result) => {
      if (error) {
        return res.status(400).json(error)
      }

      Hospital.countDocuments({ ...query }).exec((countError, count) => {
        if (error) {
          return res.status(500).json(countError)
        }
        return res.status(200).json({
          totalItems: count,
          data: result,
          totalPages: Math.ceil(count / limit),
          currentPage: page,
        })
      })
    })
})
