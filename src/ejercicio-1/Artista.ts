import { Discografia } from './Discografia';

/**
 * Clase que representa un artista
 */
export class Artista {
  nombre: string;
  oyentesMensuales: number;
  discografia: Discografia[];

  constructor(nombre: string, oyentesMensuales: number, discografia: Discografia[]) {
    this.nombre = nombre;
    this.oyentesMensuales = oyentesMensuales;
    this.discografia = discografia;
  }

/**
* Calcula el número total de reproducciones de todas las canciones del artista
* @returns Número total de reproducciones del artista
*/
  numReproduccionesTotal(): number {
    return this.discografia.reduce((acumulador, disco) => acumulador + disco.numReproduccionesTotal(), 0);
  }
/**

Agrega un disco a la discografía del artista
@param disco Objeto Discografia que se agregará a la discografía del artista
*/
  agregarDisco(disco: Discografia) {
    this.discografia.push(disco);
  }
}
