import { Hospital } from './hospital.model'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'

// @route GET /hospitals/
// @desc List of all hospitals
// @access Private

export const getAllHospitals = asyncHandler(async (req, res) => {
  const hospitals = await Hospital.find()
  res.status(200).json({ data: hospitals })
})
