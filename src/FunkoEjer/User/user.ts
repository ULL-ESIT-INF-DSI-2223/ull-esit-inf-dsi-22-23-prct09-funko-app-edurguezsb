import * as fs from 'fs';
import { Funko } from '../funko/funko';

type FunkoList = Funko[];

export class User {
  private readonly username: string;
  private funkoList: FunkoList = [];

  constructor(username: string) {
    this.username = username;
    this.loadFunkoList();
  }

  private get filePath(): string {
    return `./users/${this.username}.json`;
  }

  private loadFunkoList(): void {
    try {
      const data = fs.readFileSync(this.filePath);
      this.funkoList = JSON.parse(data.toString()) as FunkoList;
    } catch (error) {
      if (error instanceof Error) {
        if ('code' in error && error.code === 'ENOENT') {
          console.log(`User "${this.username}" does not have a Funko list yet.`);
        } else {
          console.error(`Failed to load Funko list for user "${this.username}": ${error.message}`);
        }
      } else {
        throw new Error(`Unknown error occurred while loading Funko list for user "${this.username}": ${error}`);
      }
    }
  }
  
  

  private saveFunkoList(): void {
    try {
      const data = JSON.stringify(this.funkoList);
      fs.writeFileSync(this.filePath, data);
    } catch (error) {
      console.error(`Failed to save Funko list for user "${this.username}".`);
    }
  }

  addFunko(funko: Funko): void {
    const found = this.funkoList.find(({ id }) => id === funko.id);

    if (found) {
      console.log(`Funko with ID ${funko.id} already exists in ${this.username}'s collection.`);
      return;
    }

    this.funkoList.push(funko);
    console.log(`New Funko added to ${this.username}'s collection!`);
    this.saveFunkoList();
  }

  updateFunko(funko: Funko): void {
    const index = this.funkoList.findIndex(({ id }) => id === funko.id);

    if (index === -1) {
      console.log(`Funko with ID ${funko.id} not found in ${this.username}'s collection.`);
      return;
    }

    this.funkoList[index] = funko;
    console.log(`Funko with ID ${funko.id} updated in ${this.username}'s collection!`);
    this.saveFunkoList();
  }

  removeFunko(id: number): void {
    const index = this.funkoList.findIndex((funko) => funko.id === id);

    if (index === -1) {
      console.log(`Funko with ID ${id} not found in ${this.username}'s collection.`);
      return;
    }

    this.funkoList.splice(index, 1);
    console.log(`Funko with ID ${id} removed from ${this.username}'s collection!`);
    this.saveFunkoList();
  }

  getFunkoList(): FunkoList {
    return this.funkoList;
  }

  getFunko(id: number): Funko | undefined {
    return this.funkoList.find((funko) => funko.id === id);
  }
}
