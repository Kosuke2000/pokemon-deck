export type Pokemon = {
  name: string;
  abilities: {
    ability: { name: string };
  }[];
  types: {
    type: { name: string };
  }[];
  sprites: {
    front_default: string;
  };
};

export type PokeCard = {
  pokemon: Pokemon;
  isRegistered: boolean;
};

export type PokeDeck = {
  pokeCards: PokeCard[];
};
