import "mocha";
import { expect } from "chai";
import { Funko, FunkoType, FunkoGenre, FunkoProps } from "../../src/FunkoEjer/funko/funko";

describe("Funko class", () => {
  it("debería crear un nuevo objeto Funko", () => {
    const funkoProps = {
      id: 1,
      name: "Harry Potter",
      description: "Este es el Funko Pop de Harry Potter!",
      type: FunkoType.POP,
      genre: FunkoGenre.MOVIES_AND_TV,
      franchise: "Harry Potter",
      number: 0o1,
      exclusive: true,
      specialFeatures: "Brilla en la oscuridad",
      marketValue: 100,
    };

    const funko = new Funko(funkoProps);

    expect(funko).to.be.an.instanceOf(Funko);
    expect(funko.id).to.equal(funkoProps.id);
    expect(funko.name).to.equal(funkoProps.name);
    expect(funko.description).to.equal(funkoProps.description);
    expect(funko.type).to.equal(funkoProps.type);
    expect(funko.genre).to.equal(funkoProps.genre);
    expect(funko.franchise).to.equal(funkoProps.franchise);
    expect(funko.number).to.equal(funkoProps.number);
    expect(funko.exclusive).to.equal(funkoProps.exclusive);
    expect(funko.specialFeatures).to.equal(funkoProps.specialFeatures);
    expect(funko.marketValue).to.equal(funkoProps.marketValue);
  });
});
