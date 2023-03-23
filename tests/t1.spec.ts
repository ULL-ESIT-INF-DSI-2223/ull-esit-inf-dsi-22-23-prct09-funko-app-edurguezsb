// archivo: suma.test.ts
import { expect } from "chai";
import { suma } from "../src/e1/t";

describe("Función suma", () => {
    it("debería sumar correctamente dos números", () => {
        const resultado = suma(2, 3);
        expect(resultado).to.equal(5);
    });

    it("debería devolver el mismo número si se suma 0", () => {
        const resultado = suma(5, 0);
        expect(resultado).to.equal(5);
    });
});
