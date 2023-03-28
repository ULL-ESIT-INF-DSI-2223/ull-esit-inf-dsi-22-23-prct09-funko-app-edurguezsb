import { FunkoCollection } from "../funkoCollection/funkoCollection";
import { Funko, FunkoType, FunkoGenre } from "../funko/funko";
import chalk from "chalk";

export function addFunko(args: any) {
  const collection = new FunkoCollection(args.user);
  const funko = new Funko(args);
  if (collection.addFunko(funko)) {
    console.log(chalk.green("New Funko added to the collection!"));
  } else {
    console.log(chalk.red("Funko already exists in the collection!"));
  }
}

export function updateFunko(args: any) {
  const collection = new FunkoCollection(args.user);
  const funko = new Funko(args);
  if (collection.updateFunko(funko)) {
    console.log(chalk.green("Funko updated in the collection!"));
  } else {
    console.log(chalk.red("Funko not found in the collection!"));
  }
}

export function removeFunko(args: any) {
  const collection = new FunkoCollection(args.user);
  if (collection.removeFunko(args.id)) {
    console.log(chalk.green("Funko removed from the collection!"));
  } else {
    console.log(chalk.red("Funko not found in the collection!"));
  }
}

export function listFunkos(args: any) {
  const collection = new FunkoCollection(args.user);
  const funkos = collection.getFunkos();
  console.log(`${args.user} Funko Pop collection`);
  console.log("--------------------------------");
  funkos.forEach(funko => {
    console.log(funko.toString());
    console.log("--------------------------------");
  });
}

export function showFunko(args: any) {
  const collection = new FunkoCollection(args.user);
  const funko = collection.getFunko(args.id);
  if (funko) {
    console.log(funko.toString());
  } else {
    console.log(chalk.red("Funko not found in the collection!"));
  }
}
