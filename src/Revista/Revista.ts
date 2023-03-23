// revista.ts
import { Subject, Observer } from "../Observer/Observer";

/**
 * La clase Revista implementa la interfaz Subject, lo que permite a sus instancias ser observadas.
 */
export class Revista implements Subject {
    private observers: Observer[] = [];

    /**
     * Suscribe un observador a la revista.
     * @param observer - El observador a suscribir.
     */
    public subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    /**
     * Desuscribe un observador de la revista.
     * @param observer - El observador a desuscribir.
     */
    public unsubscribe(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    /**
     * Notifica a todos los observadores suscritos de un nuevo número de la revista.
     * @param issue - El número de la revista a notificar.
     */
    public notify(issue: string): void {
        for (const observer of this.observers) {
            observer.update(issue);
        }
    }

    /**
     * Lanza un nuevo número de la revista y notifica a los suscriptores.
     * @param issue - El número de la revista lanzada.
     */
    public releaseNewIssue(issue: string): void {
        console.log(`Nuevo número de la revista: ${issue}`);
        this.notify(issue);
    }
}
