import { sequelize } from "../../database/db.js";
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
    const reservas = await sequelize.query(
      `SELECT r.*, h.* 
       FROM reservas r
       INNER JOIN habitaciones h ON r.habitacion_id = h.id
       WHERE r.usuario_id = ?`,
      {
        replacements: [req.usuario.id],
        type: sequelize.QueryTypes.SELECT,
        nest: true
      }
    );
    
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const obtenerAllReservas = async (req, res) => {
  try {
    const reservas = await sequelize.query(
      `SELECT r.id AS reserva_id,
        r.usuario_id,
        r.habitacion_id,
        r.fecha_inicio,
        r.fecha_fin,
        r.estado,
        h.id AS habitacion_real_id,
        h.numero,
        h.tipo,
        h.precio_noche,
        h.disponible 
       FROM reservas r
       INNER JOIN habitaciones h ON r.habitacion_id = h.id
       ORDER BY r.fecha_inicio DESC`,
      {
        type: sequelize.QueryTypes.SELECT,
        nest: true
      }
    );

    const reservasFormat = reservas.map(row => ({
      id: row.reserva_id,
      usuario_id: row.usuario_id,
      habitacion_id: row.habitacion_id,
      fecha_inicio: row.fecha_inicio,
      fecha_fin: row.fecha_fin,
      estado: row.estado,

      habitacion: {
        id: row.habitacion_real_id,
        numero: row.numero,
        tipo: row.tipo,
        precio_noche: row.precio_noche,
        disponible: row.disponible
      }
    }));
    
    res.json(reservasFormat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const obtenerReserva = async (req, res) => {
  try {
    const reservas = await sequelize.query(
      `SELECT r.*, u.*, h.* 
       FROM reservas r
       LEFT JOIN usuarios u ON r.usuario_id = u.id
       LEFT JOIN habitaciones h ON r.habitacion_id = h.id
       WHERE r.id = ?`,
      {
        replacements: [req.params.id],
        type: sequelize.QueryTypes.SELECT,
        nest: true
      }
    );
    
    const reserva = reservas[0]; // La primera coincidencia
    
    if (!reserva) {
      return res.status(404).json({ error: 'No encontrada' });
    }
    
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