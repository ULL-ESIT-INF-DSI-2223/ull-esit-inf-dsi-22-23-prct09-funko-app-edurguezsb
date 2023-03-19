// Clase para representar una ruta
class Ruta {
    id: number;
    nombre: string;
    inicio: Coordenada;
    fin: Coordenada;
    longitud: number; // en kilómetros
    desnivelMedio: number;
    usuarios: number[]; // IDs de los usuarios que han realizado la ruta
    tipoActividad: 'bicicleta' | 'corriendo';
    calificacionMedia: number;
  }