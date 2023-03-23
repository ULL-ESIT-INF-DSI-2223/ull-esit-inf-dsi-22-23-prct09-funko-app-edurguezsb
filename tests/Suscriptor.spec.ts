import { expect } from 'chai';
import { Revista } from '../src/Revista/Revista';
import { Suscriptor } from '../src/Suscriptor/Suscriptor';


describe('Suscriptor', () => {
  let revista: Revista;
  let suscriptor: Suscriptor;

  beforeEach(() => {
    revista = new Revista('Mi revista');
    suscriptor = new Suscriptor('Suscriptor 1');
  });

  describe('#actualizar', () => {
    it('debe actualizar la propiedad ultimoNumeroRecibido y mostrar un mensaje por consola', () => {
      const numero = 1;
      suscriptor.actualizar(numero);
      expect(suscriptor.ultimoNumeroRecibido).to.equal(numero);
    });
  });

  describe('#suscribirseARevista', () => {
    it('debe suscribir al suscriptor a la revista y registrar al suscriptor en la lista de suscriptores de la revista', () => {
      suscriptor.suscribirseARevista(revista);
      expect(revista.suscriptores).to.deep.equal([suscriptor]);
    });
  });

  describe('#desuscribirseDeRevista', () => {
    it('debe dar de baja al suscriptor de la revista y eliminar al suscriptor de la lista de suscriptores de la revista', () => {
      suscriptor.suscribirseARevista(revista);
      suscriptor.desuscribirseDeRevista(revista);
      expect(revista.suscriptores).to.deep.equal([]);
    });
  });
});
