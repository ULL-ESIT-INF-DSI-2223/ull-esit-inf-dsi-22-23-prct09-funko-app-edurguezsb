// observer.ts

/**
 * La interfaz Observer define las operaciones que deben ser implementadas por todos los suscriptores.
 */
export interface Observer {
    update(issue: string): void;
}

/**
 * La interfaz Subject define las operaciones que deben ser implementadas por todos los objetos observables.
 */
export interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(issue: string): void;
}
