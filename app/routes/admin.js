import express from 'express';
import { Reserva, Usuario } from '../../database/db.js';
import { verificarToken, verificarAdmin } from '../auth/jwt.js';
import { getReservas, getUsuarios, updateRolUsuario } from '../controllers/adminController.js';

const router = express.Router();
router.use(verificarToken);
router.use(verificarAdmin);

router.get('/reservas', getReservas);

router.get('/usuarios', getUsuarios);

router.put('/usuarios/:id/rol', updateRolUsuario);

export default router;