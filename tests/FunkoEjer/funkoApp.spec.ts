import "mocha";
import { expect } from "chai";
import fs from "fs";
import path from "path";
import { Funko, FunkoType, FunkoGenre } from "../../src/FunkoEjer/funko/funko";
import { FunkoCollection } from "../../src/FunkoEjer/funkoCollection/funkoCollection";

describe('FunkoCollection', () => {
    let collection: FunkoCollection;
  
    beforeEach(() => {
      collection = new FunkoCollection('test');
    });
  
    afterEach(() => {
      const userDirectory = path.join(__dirname, 'collections', 'test');
      if (fs.existsSync(userDirectory)) {
        const files = fs.readdirSync(userDirectory);
        for (const file of files) {
          const filePath = path.join(userDirectory, file);
          fs.unlinkSync(filePath);
        }
        fs.rmdirSync(userDirectory);
      }
    });
  
    it('should add a new funko to the collection', () => {
      const funko = new Funko(1, 'Harry Potter', FunkoType.Vinyl, FunkoGenre.Movies);
      const result = collection.addFunko(funko);
  
      expect(result).toBeTruthy();
      expect(collection.getFunko(1)).toEqual(funko);
    });
  
    it('should update an existing funko in the collection', () => {
      const funko = new Funko(1, 'Harry Potter', FunkoType.Vinyl, FunkoGenre.Movies);
      collection.addFunko(funko);
  
      const updatedFunko = new Funko(1, 'Harry Potter with Scar', FunkoType.Vinyl, FunkoGenre.Movies);
      const result = collection.updateFunko(updatedFunko);
  
      expect(result).toBeTruthy();
      expect(collection.getFunko(1)).toEqual(updatedFunko);
    });
  
    it('should remove an existing funko from the collection', () => {
      const funko = new Funko(1, 'Harry Potter', FunkoType.Vinyl, FunkoGenre.Movies);
      collection.addFunko(funko);
  
      const result = collection.removeFunko(1);
  
      expect(result).toBeTruthy();
      expect(collection.getFunko(1)).toBeUndefined();
    });
  
    it('should return undefined when getting a non-existing funko from the collection', () => {
      const funko = new Funko(1, 'Harry Potter', FunkoType.Vinyl, FunkoGenre.Movies);
      collection.addFunko(funko);
  
      expect(collection.getFunko(2)).toBeUndefined();
    });
  
    it('should return the whole collection', () => {
      const funko1 = new Funko(1, 'Harry Potter', FunkoType.Vinyl, FunkoGenre.Movies);
      const funko2 = new Funko(2, 'Hermione Granger', FunkoType.Vinyl, FunkoGenre.Movies);
  
      collection.addFunko(funko1);
      collection.addFunko(funko2);
  
      expect(collection.getFunkos()).toEqual(new Map([[1, funko1], [2, funko2]]));
    });
  });