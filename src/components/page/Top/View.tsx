import { VFC } from "react";

import { useMockPokemon } from "@/hooks/useMockPokemon";

import { PokemonCard } from "@/components/model/PokemonCard/PokemonCard";

export const TopPageView: VFC = () => {
  // const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  // const { data, error } = useSWR(
  //   "https://pokeapi.co/api/v2/pokemon/pikachu",
  //   fetcher
  // );

  // console.log({ data });
  const [{ mockdata }, Decider] = useMockPokemon();

  return (
    <main>
      <Decider />
      <PokemonCard pokemon={mockdata} />
    </main>
  );
};
