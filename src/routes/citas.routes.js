import { Router } from 'express';
import {
  crearCita,
  listarCitas,
  obtenerCita,
  cambiarEstadoCita,
  eliminarCita,
} from '../controllers/citas.controller.js';

const router = Router();

router.post('/', crearCita);
router.get('/', listarCitas);
router.get('/:id', obtenerCita);
router.patch('/:id', cambiarEstadoCita);
router.delete('/:id', eliminarCita);

export default router;