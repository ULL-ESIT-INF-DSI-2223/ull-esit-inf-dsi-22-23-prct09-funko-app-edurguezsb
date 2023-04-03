import { FunkoType } from '../Type/Type.js'
import { FunkoGenre } from '../Genre/Genre.js'


export interface BasicFunkoPopInfo {
  id: number
  name: string
  description: string
  type: FunkoType
  genre: FunkoGenre
}


export abstract class BasicFunkoPop implements BasicFunkoPopInfo {
  constructor(
    public readonly id: number,
    public name: string,
    public description: string,
    public type: FunkoType,
    public genre: FunkoGenre
  ) {}
}