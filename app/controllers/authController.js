import { Usuario } from "../../database/db.js";
import { generarToken } from "../auth/jwt.js";

export const authController = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const usuario = await Usuario.findOne({ where: { email } });
    
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    
    const passwordValido = await usuario.validarPassword(password);
    if (!passwordValido) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    
    const token = generarToken(usuario);
    res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}