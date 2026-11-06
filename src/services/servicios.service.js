const servicios = [
  { id: 1, nombre: 'Baño completo', duracionMin: 60, precio: 45000 },
  { id: 2, nombre: 'Corte de raza', duracionMin: 90, precio: 65000 },
  { id: 3, nombre: 'Spa relajante', duracionMin: 120, precio: 85000 },
  { id: 4, nombre: 'Corte de uñas', duracionMin: 20, precio: 15000 },
];

export function listar() {
  return servicios;
}

export function buscarPorId(id) {
  return servicios.find((s) => s.id === id);
}