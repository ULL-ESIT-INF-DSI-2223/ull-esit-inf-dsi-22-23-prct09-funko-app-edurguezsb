import fs from 'fs'
import chalk from 'chalk'
import { FunkoPop } from '../FunkoPop/FunkoPop.js'


export interface UserInfo {
  name: string
  collection: FunkoPop[]
  addFunko(funkoPop: FunkoPop): string
  modifyFunko(funkoPop: FunkoPop): string
  removeFunko(funkoPop: FunkoPop): string
  listFunkos(): void
  searchFunko(funkoPop: FunkoPop): string
  save(): void
  load(): void
}

export class User implements UserInfo {
  public collection: FunkoPop[]

  constructor(public readonly name: string, ...funkoPops: FunkoPop[]) {
    this.collection = funkoPops
  }

  public addFunko(funkoPop: FunkoPop): string {
    const notSameId = this.collection.filter((f) => f.id !== funkoPop.id)
    if (notSameId.length !== this.collection.length)
      return chalk.red(
        `Already exists a Funko Pop with id ${funkoPop.id} in ${this.name}'s collection`
      )
    this.collection.push(funkoPop)
    return chalk.green(`${funkoPop.name} added to ${this.name}'s collection`)
  }

  public modifyFunko(funkoPop: FunkoPop): string {
    const notSameId = this.collection.filter((f) => f.id !== funkoPop.id)
    if (notSameId.length === this.collection.length)
      return chalk.red(
        `Funko Pop with id ${funkoPop.id} not in ${this.name}'s collection`
      )
    this.collection = this.collection.map((f) =>
      f.id === funkoPop.id ? funkoPop : f
    )
    return chalk.green(
      `Funko Pop with id ${funkoPop.id} modified in ${this.name}'s collection`
    )
  }

  public removeFunko(funkoPop: FunkoPop): string {
    const notSameId = this.collection.filter((f) => f.id !== funkoPop.id)
    if (notSameId.length === this.collection.length)
      return chalk.red(
        `Funko Pop with id ${funkoPop.id} not in ${this.name}'s collection`
      )
    this.collection = notSameId
    return chalk.green(
      `${funkoPop.name} removed from ${this.name}'s collection`
    )
  }

  public listFunkos(): void {
    this.collection.forEach((funkoPop) => FunkoPop.print(funkoPop))
  }

  public searchFunko(funkoPop: FunkoPop): string {
    const notSameId = this.collection.filter((f) => f.id !== funkoPop.id)
    if (notSameId.length === this.collection.length)
      return chalk.red(`${funkoPop.name} not in ${this.name}'s collection`)

    const result = this.collection.find((f) => f.id === funkoPop.id)
    if (result) FunkoPop.print(result)

    return chalk.green(`${funkoPop.name} found in ${this.name}'s collection`)
  }

  public save(): void {
    const data = JSON.stringify(this)
    fs.writeFileSync(`./data/users/${this.name}.json`, data)
  }

  public load(): void {
    const file = fs.readFileSync(`./data/users/${this.name}.json`, 'utf-8')
    const user = JSON.parse(file)
    this.collection = user.collection
  }
}