import express from 'express';
import { Habitacion } from '../../database/db.js';
import { getHabitacion, getHabitaciones } from '../controllers/habitacionesController.js';

const router = express.Router();

router.get('/', getHabitaciones);

router.get('/:id', getHabitacion);

export default router;