import { Router } from 'express'
import { getAllHospitals } from './hospital.controllers'

const router = Router()

router.route('/').get(getAllHospitals)

export default router
