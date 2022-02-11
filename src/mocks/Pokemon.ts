import { Pokemon } from "@/types/PokemonCard";

export const mockPikachu: Pokemon = {
  name: "ピカチュウ",
  abilities: [
    { ability: { name: "10万ボルト" } },
    { ability: { name: "100万ボルト" } },
  ],
  types: [{ type: { name: "electric" } }],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
};

export const mockHicozaru: Pokemon = {
  name: "ヒコザル",
  abilities: [
    { ability: { name: "ひのこ" } },
    { ability: { name: "100万ボルト" } },
  ],
  types: [{ type: { name: "electric" } }],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
  },
};

export const mockPocchama: Pokemon = {
  name: "ポッチャマ",
  abilities: [
    { ability: { name: "みずでっぽう" } },
    { ability: { name: "100万ボルト" } },
  ],
  types: [{ type: { name: "electric" } }],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
  },
};

export const mockNaetoru: Pokemon = {
  name: "ナエトルくん",
  abilities: [
    { ability: { name: "ひぐちカッター" } },
    { ability: { name: "100万ボルト" } },
  ],
  types: [{ type: { name: "electric" } }],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
  },
};

export const mockPokemonList = [
  mockPikachu,
  mockHicozaru,
  mockPocchama,
  mockNaetoru,
];
