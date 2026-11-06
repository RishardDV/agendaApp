const citas = [];
let siguienteId = 1;

export function crear(datos) {
  const cita = {
    id: siguienteId,
    servicioId: datos.servicioId,
    clienteNombre: datos.clienteNombre,
    clienteTelefono: datos.clienteTelefono,
    profesional: datos.profesional,
    fechaHora: datos.fechaHora,
    estado: 'PENDIENTE',
    notas: datos.notas,
  };
  siguienteId++;
  citas.push(cita);
  return cita;
}

export function listar() {
  return citas;
}

export function buscarPorId(id) {
  return citas.find((c) => c.id === id);
}

export function cambiarEstado(id, estado){
  const cita = buscarPorId(id);
  if(!cita){
      return undefined;
  }
  cita.estado = estado;
  return  cita;
}