import { Reserva } from "../../database/db.js";

export const crearReservas = async (req, res) => {
  try {
    const { habitacion_id, fecha_inicio, fecha_fin } = req.body;
    const reserva = await Reserva.create({
      usuario_id: req.usuario.id,
      habitacion_id,
      fecha_inicio,
      fecha_fin,
      estado: 'activa'
    });
    res.status(201).json(reserva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll({
      where: { usuario_id: req.usuario.id },
      include: ['habitacion']
    });
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const obtenerReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id, {
      include: ['usuario', 'habitacion']
    });
    if (!reserva) return res.status(404).json({ error: 'No encontrada' });
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const borrarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) return res.status(404).json({ error: 'No encontrada' });
    await reserva.update({ estado: 'cancelada' });
    res.json({ message: 'Cancelada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}