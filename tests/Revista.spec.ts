import { expect } from 'chai';
import { Revista } from '../src/Revista/Revista';
import { Suscriptor } from '../src/Suscriptor/Suscriptor'

// revista.test.ts

describe("Revista", () => {
    let revista: Revista;
    let suscriptor1: Suscriptor;
    let suscriptor2: Suscriptor;

    beforeEach(() => {
        revista = new Revista();
        suscriptor1 = new Suscriptor("Suscriptor 1");
        suscriptor2 = new Suscriptor("Suscriptor 2");
    });

    it("Suscribe suscriptores a la revista", () => {
        revista.subscribe(suscriptor1);
        revista.subscribe(suscriptor2);
        expect(revista["observers"]).to.deep.equal([suscriptor1, suscriptor2]);
    });

    it("Desuscribe suscriptores de la revista", () => {
        revista.subscribe(suscriptor1);
        revista.subscribe(suscriptor2);
        revista.unsubscribe(suscriptor1);
        expect(revista["observers"]).to.deep.equal([suscriptor2]);
    });

    it("Notifica a los suscriptores del nuevo número de la revista", () => {
        revista.subscribe(suscriptor1);
        revista.subscribe(suscriptor2);
        const issue = "Edición de Marzo 2023";

        const originalConsoleLog = console.log;
        let consoleOutput: string[] = [];

        // Sobreescribir console.log para capturar la salida
        console.log = (...args: any[]) => {
          consoleOutput.push(...args);
      };

      revista.releaseNewIssue(issue);

      // Restaurar console.log a su implementación original
      console.log = originalConsoleLog;

      expect(consoleOutput).to.deep.equal([
          `Nuevo número de la revista: ${issue}`,
          `Suscriptor 1 ha sido notificado del nuevo número de la revista: ${issue}`,
          `Suscriptor 2 ha sido notificado del nuevo número de la revista: ${issue}`
      ]);
  });
});
