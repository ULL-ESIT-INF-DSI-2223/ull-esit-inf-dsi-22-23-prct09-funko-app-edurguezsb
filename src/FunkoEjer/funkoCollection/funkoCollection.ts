import fs from "fs";
import path from "path";
import { Funko, FunkoType, FunkoGenre } from "../funko/funko";


export class FunkoCollection {
  private _user: string;
  private _collection: Map<number, Funko>;

  constructor(user: string) {
    this._user = user;
    this._collection = new Map<number, Funko>();
    this.loadCollection();
  }

  private get userDirectory(): string {
    return path.join(__dirname, "collections", this._user);
  }

  private loadCollection(): void {
    if (!fs.existsSync(this.userDirectory)) {
      fs.mkdirSync(this.userDirectory, { recursive: true });
    }

    const files = fs.readdirSync(this.userDirectory);
    for (const file of files) {
      const filePath = path.join(this.userDirectory, file);
      const rawData = fs.readFileSync(filePath, "utf-8");
      const funkoData: Funko = JSON.parse(rawData);
      this._collection.set(funkoData.id, funkoData);
    }
  }

  private saveFunko(funko: Funko): void {
    const filePath = path.join(this.userDirectory, `${funko.id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(funko, null, 2));
  }

  private deleteFunkoFile(id: number): void {
    const filePath = path.join(this.userDirectory, `${id}.json`);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  public addFunko(funko: Funko): boolean {
    if (this._collection.has(funko.id)) {
      return false;
    }
    this._collection.set(funko.id, funko);
    this.saveFunko(funko);
    return true;
  }

  public updateFunko(funko: Funko): boolean {
    if (!this._collection.has(funko.id)) {
      return false;
    }
    this._collection.set(funko.id, funko);
    this.saveFunko(funko);
    return true;
  }

  public removeFunko(id: number): boolean {
    if (!this._collection.has(id)) {
      return false;
    }
    this._collection.delete(id);
    this.deleteFunkoFile(id);
    return true;
  }

  public getFunko(id: number): Funko | undefined {
    return this._collection.get(id);
  }

  public getFunkos() {
    return this._collection;
  }
}