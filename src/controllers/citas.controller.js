import * as citasServices from '../services/citas.service.js';

export function crearCita(req, res){
    const cita = citasServices.crear(req.body);
    res.status(201).json(cita);
}   

export function listarCitas(req, res) {
  res.json(citasServices.listar());
}

export function obtenerCita(req, res) {
  const id = Number(req.params.id);
  const cita = citasServices.buscarPorId(id);

  if (!cita) {
    return res.status(404).json({ error: `No existe la cita con id ${id}` });
  }

  res.json(cita);
}

export function cambiarEstado(req, res){
    const id = Number(req.params.id);
    const cita = citasServices.cambiarEstado(id, req.body.estado);

    if(!cita){
        return res.status(404).json({ error: `No existe la cita con id ${id}`});
    }
    res.json(cita);
}

