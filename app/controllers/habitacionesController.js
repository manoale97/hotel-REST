import { Habitacion } from "../../database/db.js";

export const getHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitacion.findAll();
    res.json(habitaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const getHabitacion = async (req, res) => {
  try {
    const habitacion = await Habitacion.findByPk(req.params.id);
    if (!habitacion) return res.status(404).json({ error: 'No encontrada' });
    res.json(habitacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}