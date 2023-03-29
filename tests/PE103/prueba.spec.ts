import 'mocha';
import { expect } from 'chai';
import suma from '../../src/PE103/prueba';

describe('suma', () => {
  it('debe sumar dos números positivos', () => {
    const resultado = suma(2, 3);
    expect(resultado).to.equal(5);
  });

  it('debe sumar un número positivo y uno negativo', () => {
    const resultado = suma(-2, 3);
    expect(resultado).to.equal(1);
  });

  it('debe sumar dos números negativos', () => {
    const resultado = suma(-2, -3);
    expect(resultado).to.equal(-5);
  });
});
