enum FunkoType {
  POP = "Pop!",
  POP_RIDES = "Pop! Rides",
  VINYL_SODA = "Vynil Soda",
  VINYL = "Vynil",
  MOVIE_MOMENTS = "Movie Moments",
  ROCK_CANDY = "Rock Candy",
  DORBZ = "Dorbz",
}

enum FunkoGenre {
  ANIMATION = "Animation",
  MOVIES_AND_TV = "Movies & TV",
  VIDEO_GAMES = "Video Games",
  SPORTS = "Sports",
  MUSIC = "Music",
  ANIME = "Anime",
}

interface FunkoProps {
  id: number;
  name: string;
  description: string;
  type: FunkoType;
  genre: FunkoGenre;
  franchise: string;
  number: number;
  exclusive: boolean;
  specialFeatures: string;
  marketValue: number;
}

class Funko {
  private props: FunkoProps;

  constructor(props: FunkoProps) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get type() {
    return this.props.type;
  }

  get genre() {
    return this.props.genre;
  }

  get franchise() {
    return this.props.franchise;
  }

  get number() {
    return this.props.number;
  }

  get exclusive() {
    return this.props.exclusive;
  }

  get specialFeatures() {
    return this.props.specialFeatures;
  }

  get marketValue() {
    return this.props.marketValue;
  }
}

export { Funko, FunkoType, FunkoGenre, FunkoProps };
