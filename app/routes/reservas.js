import express from 'express';
import { Reserva } from '../../database/db.js';
import { verificarToken } from '../auth/jwt.js';
import { borrarReserva, crearReservas, obtenerReserva, obtenerReservas } from '../controllers/reservasController.js';

const router = express.Router();

router.post('/', verificarToken, crearReservas);

router.get('/', verificarToken, obtenerReservas);

// VULNERABLE A IDOR
router.get('/:id', verificarToken, obtenerReserva);

// VULNERABLE A IDOR
router.delete('/:id', verificarToken, borrarReserva);

export default router;