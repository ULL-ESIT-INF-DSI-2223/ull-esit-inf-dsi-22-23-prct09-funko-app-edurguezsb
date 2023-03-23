import { expect } from 'chai';
import { Revista } from '../src/Revista/Revista';
import { Suscriptor } from '../src/Suscriptor/Suscriptor';

// Suscriptor.spec.ts

describe("Suscriptor", () => {
    let revista: Revista;
    let suscriptor: Suscriptor;

    beforeEach(() => {
        revista = new Revista();
        suscriptor = new Suscriptor("Suscriptor 1");
    });

    it("Actualiza el último número recibido cuando se notifica al suscriptor", () => {
        const numero = "Edición de Marzo 2023";
        suscriptor.update(numero);
        expect(suscriptor.ultimoNumeroRecibido).to.equal(numero);
    });

    it("Se suscribe a una revista", () => {
        revista.subscribe(suscriptor);
        expect(revista["observers"]).to.deep.equal([suscriptor]);
    });

    it("Se desuscribe de una revista", () => {
        revista.subscribe(suscriptor);
        revista.unsubscribe(suscriptor);
        expect(revista["observers"]).to.deep.equal([]);
    });
});
