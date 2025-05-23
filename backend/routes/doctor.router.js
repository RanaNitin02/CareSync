import express from 'express';
import {updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctor, getDoctorProfile} from '../controllers/doctor.controller.js'

import { authenticate, restrict } from '../auth/verifyToken.js';

import reviewRouter from './review.router.js'

const router = express.Router();

router.use('/:doctorId/reviews', reviewRouter);

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor);
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);

router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile)

export default router 