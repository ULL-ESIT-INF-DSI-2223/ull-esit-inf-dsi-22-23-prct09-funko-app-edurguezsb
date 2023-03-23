import { expect } from 'chai';
import { Revista } from '../src/Revista/Revista';
import { Suscriptor } from '../src/Suscriptor/Suscriptor'


describe('Revista', () => {
  describe('#agregarNumero', () => {
    it('debe agregar un número a la lista de números de la revista y notificar a los suscriptores', () => {
      const revista = new Revista('Mi revista');
      const suscriptor1 = new Suscriptor('Suscriptor 1');
      const suscriptor2 = new Suscriptor('Suscriptor 2');

      revista.registrarSuscriptor(suscriptor1);
      revista.registrarSuscriptor(suscriptor2);

      const numeros = revista.agregarNumero(1);

      expect(numeros).to.deep.equal([1]);
      expect(suscriptor1.ultimoNumeroRecibido).to.equal(1);
      expect(suscriptor2.ultimoNumeroRecibido).to.equal(1);
    });
  });

  describe('#registrarSuscriptor', () => {
    it('debe registrar un suscriptor en la lista de suscriptores de la revista', () => {
      const revista = new Revista('Mi revista');
      const suscriptor = new Suscriptor('Suscriptor 1');

      const suscriptores = revista.registrarSuscriptor(suscriptor);

      expect(suscriptores).to.deep.equal([suscriptor]);
    });
  });

  describe('#eliminarSuscriptor', () => {
    it('debe eliminar un suscriptor de la lista de suscriptores de la revista', () => {
      const revista = new Revista('Mi revista');
      const suscriptor1 = new Suscriptor('Suscriptor 1');
      const suscriptor2 = new Suscriptor('Suscriptor 2');

      revista.registrarSuscriptor(suscriptor1);
      revista.registrarSuscriptor(suscriptor2);

      const suscriptores = revista.eliminarSuscriptor(suscriptor1);

      expect(suscriptores).to.deep.equal([suscriptor2]);
    });
  });
});
