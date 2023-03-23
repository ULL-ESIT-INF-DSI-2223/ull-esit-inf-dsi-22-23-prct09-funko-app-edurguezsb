import { Observer } from "../Observer/Observer";

/**
 * Clase Suscriptor que implementa la interfaz Observer.
 * Permite a sus instancias suscribirse a instancias de la clase Revista.
 */
export class Suscriptor implements Observer {
    private name: string;
    public ultimoNumeroRecibido: string;
    /**
     * Constructor de la clase Suscriptor.
     * @param {string} name - Nombre del suscriptor.
     */
    constructor(name: string) {
        this.name = name;
        this.ultimoNumeroRecibido = '';
    }

    /**
     * Método update, que se llama cuando se notifica a un suscriptor sobre un nuevo número de la revista.
     * @param {string} issue - Nombre o identificador del nuevo número de la revista.
     */
    public update(issue: string): void {
        this.ultimoNumeroRecibido = issue;
        console.log(`${this.name} ha sido notificado del nuevo número de la revista: ${issue}`);
    }
}
