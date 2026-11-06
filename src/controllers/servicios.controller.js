import * as serviciosService from '../services/servicios.service.js';

export function listarServicios(req, res) {
  res.json(serviciosService.listar());
}

export function obtenerServicio(req, res) {
  const id = Number(req.params.id);
  const servicio = serviciosService.buscarPorId(id);

  if (!servicio) {
    return res.status(404).json({ error: `No existe el servicio con id ${id}` });
  }

  res.json(servicio);
}

