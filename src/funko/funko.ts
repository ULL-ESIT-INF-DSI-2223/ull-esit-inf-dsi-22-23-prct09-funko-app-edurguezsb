// funko.ts

export enum FunkoType {
    Pop = "Pop!",
    PopRides = "Pop! Rides",
    VynilSoda = "Vynil Soda",
    VynilGold = "Vynil Gold",
  }
  
  export enum FunkoGenre {
    Animation = "Animación",
    MoviesTV = "Películas y TV",
    VideoGames = "Videojuegos",
    Sports = "Deportes",
    Music = "Música",
    Anime = "Ánime",
  }
  
  export class Funko {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public type: FunkoType,
      public genre: FunkoGenre,
      public franchise: string,
      public number: number,
      public exclusive: boolean,
      public specialFeatures: string,
      public marketValue: number
    ) {}
  }
  