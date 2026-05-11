import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import habitacionesRoutes from './routes/habitaciones.js';
import reservasRoutes from './routes/reservas.js';
import adminRoutes from './routes/admin.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/habitaciones', habitacionesRoutes);
app.use('/api/reservas', reservasRoutes);
app.use('/api/admin', adminRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', api: 'REST', port: process.env.PORT });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔐 REST API en http://localhost:${PORT}`);
});