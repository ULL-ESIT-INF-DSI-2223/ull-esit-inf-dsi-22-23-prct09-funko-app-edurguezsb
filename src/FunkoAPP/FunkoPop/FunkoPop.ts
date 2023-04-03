import chalk from "chalk"
import { BasicFunkoPop } from '../BasicFunkoPop/BasicFunkoPop.js'
import { FunkoType } from '../Type/Type.js'
import { FunkoGenre } from '../Genre/Genre.js'


export interface FunkoPopInfo {

  brand: string

  brandId: number

  marketPrice: number

  exclusive: boolean

  especial: string[]
}

export class FunkoPop extends BasicFunkoPop implements FunkoPopInfo {

  public marketPrice = 0;

  public exclusive = false

  public especial: string[] = []

  constructor(
    id: number,
    name: string,
    description: string,
    type: FunkoType,
    genre: FunkoGenre,
    public readonly brand: string,
    public readonly brandId: number,
  ) {
    super(id, name, description, type, genre)
  }

  public static print(funko: FunkoPop): void {
    console.table({ id: funko.id, name: funko.name, description: funko.description, type: funko.type, genre: funko.genre, brand: funko.brand, brandId: funko.brandId, exclusive: funko.exclusive, especial: funko.especial })
    if (funko.marketPrice < 10)
      console.log(chalk.greenBright(`Market Price: $${funko.marketPrice}`))
    else if (funko.marketPrice < 20)
      console.log(chalk.green(`Market Price: $${funko.marketPrice}`))
    else if (funko.marketPrice < 30)
      console.log(chalk.yellow(`Market Price: $${funko.marketPrice}`))
    else
      console.log(chalk.redBright(`Market Price: $${funko.marketPrice}`))
  }
}