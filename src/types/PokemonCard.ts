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

export type Comments = {
  comment: string;
}[];
