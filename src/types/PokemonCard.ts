export type Pokemon = {
  name: string;
  abilities: {
    ability: string;
  }[];
  types: {
    type: string;
  }[];
  sprite: string;
};

export type PokeCard = {
  pokemon: Pokemon;
  isRegistered: boolean;
};

export type PokeDeck = {
  pokeCards: PokeCard[];
};
