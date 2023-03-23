import { Revista } from '../Revista/Revista';


/**
 * Clase que representa a un suscriptor de la revista.
 */
export class Suscriptor {
    /**
     * El nombre del suscriptor.
     */
    private _nombre: string;
    /**
     * Las revistas a las que está suscrito el suscriptor.
     */
    private _revistasSuscritas: Revista[] = [];
    /**
     * El último número de la revista que recibió el suscriptor.
     */
    public ultimoNumeroRecibido: number = 0;
  
    /**
     * Crea una instancia de la clase `Suscriptor`.
     *
     * @param nombre El nombre del suscriptor.
     */
    constructor(nombre: string) {
      this._nombre = nombre;
    }
  
    /**
     * Actualiza la propiedad `ultimoNumeroRecibido` del suscriptor y muestra un mensaje por consola.
     *
     * @param numero El número de la revista que ha sido lanzado al mercado.
     */
    public actualizar(numero: number) {
      this.ultimoNumeroRecibido = numero;
      console.log(`[${this._nombre}] Nuevo número de revista recibido: ${numero}`);
    }
  
    /**
     * Suscribe al suscriptor a una revista y registra al suscriptor en la lista de suscriptores de la revista.
     *
     * @param revista La revista a la que se desea suscribir el suscriptor.
     */
    public suscribirseARevista(revista: Revista) {
      this._revistasSuscritas.push(revista);
      revista.registrarSuscriptor(this);
      console.log(`[${this._nombre}] Suscrito a la revista "${revista.titulo}"`);
    }
  
    /**
     * Da de baja al suscriptor de una revista y lo elimina de la lista de suscriptores de la revista.
     *
     * @param revista La revista de la que se desea darse de baja el suscriptor.
     */
    public desuscribirseDeRevista(revista: Revista) {
      const index = this._revistasSuscritas.indexOf(revista);
      if (index !== -1) {
        this._revistasSuscritas.splice(index, 1);
        revista.eliminarSuscriptor(this);
        console.log(`[${this._nombre}] Dado de baja de la revista "${revista.titulo}"`);
      }
    }
  }
  