import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export function generarToken(usuario) {
  return jwt.sign(
    { id: usuario.id, email: usuario.email, rol: usuario.rol, origen: 'REST' },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  );
}

export function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido' });
  }
}

export function verificarAdmin(req, res, next) {
  if (req.usuario.rol !== 'admin') {
    return res.status(403).json({ error: 'Requiere admin' });
  }
  next();
}

// Middleware para admin o empleado
export function verificarAdminEmpleado(req, res, next) {
  if (req.usuario.rol !== 'admin' && req.usuario.rol !== 'empleado') {
    return res.status(403).json({ error: 'Requiere admin o empleado' });
  }
  next();
}