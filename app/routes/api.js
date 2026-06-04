import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API REST del Hotel grupo4' });
});

export default router;