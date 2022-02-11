import { Pokemon } from "@/types/PokemonCard";

export const mockPikachu: Pokemon = {
  name: "ピカチュウ",
  abilities: [{ ability: "10万ボルト" }, { ability: "100万ボルト" }],
  types: [{ type: "electric" }],
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
};

export const mockHicozaru: Pokemon = {
  name: "ヒコザル",
  abilities: [{ ability: "ひのこ" }, { ability: "100万ボルト" }],
  types: [{ type: "electric" }],
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
};

export const mockPocchama: Pokemon = {
  name: "ポッチャマ",
  abilities: [{ ability: "みずでっぽう" }, { ability: "100万ボルト" }],
  types: [{ type: "electric" }],
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
};

export const mockNaetoru: Pokemon = {
  name: "ナエトルくん",
  abilities: [{ ability: "ひぐちカッター" }, { ability: "100万ボルト" }],
  types: [{ type: "electric" }],
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
};

export const mockPokemonList = [
  mockPikachu,
  mockHicozaru,
  mockPocchama,
  mockNaetoru,
];
