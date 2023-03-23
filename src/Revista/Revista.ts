import { Suscriptor } from '../Suscriptor/Suscriptor';


/**
 * Clase que representa a una revista.
 */
export class Revista {
  /**
   * El título de la revista.
   */
  public titulo: string;
  /**
   * Los números de la revista.
   */
  private _numeros: number[] = [];
  /**
   * Los suscriptores de la revista.
   */
  public suscriptores: Suscriptor[] = [];

  /**
   * Crea una instancia de la clase `Revista`.
   *
   * @param titulo El título de la revista.
   */
  constructor(titulo: string) {
    this.titulo = titulo;
  }

  /**
   * Agrega un número a la lista de números de la revista y notifica a los suscriptores.
   *
   * @param numero El número de la revista que ha sido lanzado al mercado.
   */
  public agregarNumero(numero: number) {
    this._numeros.push(numero);
    console.log(`[${this.titulo}] Nuevo número de revista lanzado al mercado: ${numero}`);
    this.notificarSuscriptores(numero);
  }

  /**
   * Registra a un suscriptor en la lista de suscriptores de la revista.
   *
   * @param suscriptor El suscriptor que se desea registrar en la lista de suscriptores de la revista.
   */
  public registrarSuscriptor(suscriptor: Suscriptor) {
    this.suscriptores.push(suscriptor);
  }

  /**
   * Elimina a un suscriptor de la lista de suscriptores de la revista.
   *
   * @param suscriptor El suscriptor que se desea eliminar de la lista de suscriptores de la revista.
   */
  public eliminarSuscriptor(suscriptor: Suscriptor) {
    const index = this.suscriptores.indexOf(suscriptor);
    if (index !== -1) {
      this.suscriptores.splice(index, 1);
    }
  }

  /**
   * Notifica a los suscriptores de la revista que se ha lanzado un nuevo número de la revista.
   *
   * @param numero El número de la revista que ha sido lanzado al mercado.
   */
  private notificarSuscriptores(numero: number) {
    this.suscriptores.forEach((suscriptor) => {
      suscriptor.actualizar(numero);
    });
  }
}