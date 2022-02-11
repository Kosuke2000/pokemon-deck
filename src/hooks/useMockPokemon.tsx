import { Select, Input } from "@chakra-ui/react";
import { useReducer, VFC } from "react";
import { useForm } from "react-hook-form";

import { Pokemon } from "@/types/PokemonCard";

import { mockPokemonList } from "@/mocks/Pokemon";

export const ACTION = [
  {
    type: "ピカチュウ",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  { type: "ヒコザル" },
  { type: "ポッチャマ" },
  { type: "ナエトル" },
] as const;

export const STORE = [
  { mockdata: mockPokemonList[0] },
  { mockdata: mockPokemonList[1] },
  { mockdata: mockPokemonList[2] },
  { mockdata: mockPokemonList[3] },
] as const;

export type Action = typeof ACTION[number];

const ActionStoreMap = ACTION.map((action, i) => {
  return { action: action, state: STORE[i] };
});

export const useMockPokemon = () => {
  type State = typeof STORE[number];

  type Reducertype = typeof reducer;

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case ACTION[0].type:
        return STORE[0];
      case ACTION[1].type:
        return STORE[1];
      case ACTION[2].type:
        return STORE[2];
      case ACTION[3].type:
        return STORE[3];
      default:
        return state;
    }
  };

  const [{ mockdata }, dispatch] = useReducer<Reducertype>(reducer, {
    mockdata: mockPokemonList[2],
  });

  const Decider: VFC = () => {
    const { register, handleSubmit } = useForm();

    type Data = { [index: string]: number };
    const onSubmit: (data: Data) => void = (data: Data) =>
      dispatch(ACTION[data.index]);

    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex" }}>
        <Select {...register("index")}>
          {ACTION.map((action, index) => (
            <option key={index} value={index}>
              {action.type}
            </option>
          ))}
        </Select>
        <Input type="submit" value="キミにきめた！" />
      </form>
    );
  };
  type ReturnType = [{ mockdata: Pokemon }, VFC];

  const r: ReturnType = [{ mockdata }, Decider];

  return r;
};