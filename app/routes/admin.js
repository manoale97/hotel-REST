import express from 'express';
import { Reserva, Usuario } from '../../database/db.js';
import { verificarToken, verificarAdmin, verificarAdminEmpleado } from '../auth/jwt.js';
import { getReservas, getUsuarios, updateRolUsuario } from '../controllers/adminController.js';

const router = express.Router();
router.use(verificarToken);

//rutas solo admin
router.get('/usuarios', verificarAdmin, getUsuarios);
router.put('/usuarios/:id/rol', verificarAdmin, updateRolUsuario);

//rutas admin o empleado
router.get('/reservas', verificarAdminEmpleado, getReservas);

export default router;