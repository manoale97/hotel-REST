import { Reserva, Usuario } from "../../database/db.js";

export const getReservas = async (req, res) => {
  const reservas = await Reserva.findAll({ include: ['usuario', 'habitacion'] });
  res.json(reservas);
}

export const getUsuarios = async (req, res) => {
  const usuarios = await Usuario.findAll({ attributes: { exclude: ['password_hash'] } });
  res.json(usuarios);
}

export const updateRolUsuario = async (req, res) => {
  const { rol } = req.body;
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ error: 'No encontrado' });
  usuario.rol = rol;
  await usuario.save();
  res.json({ message: 'Rol actualizado' });
}

