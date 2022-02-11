import axios from "axios";
import { VFC } from "react";
import useSWR from "swr";

import { useMockPokemon } from "@/hooks/useMockPokemon";

import { PokemonCard } from "@/components/model/PokemonCard/PokemonCard";

export const TopPageView: VFC = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon/turtwig",
    fetcher
  );

  console.log({ data });

  const [{ mockdata }, Decider] = useMockPokemon();

  return (
    <main>
      <Decider />
      <PokemonCard pokemon={mockdata} />
    </main>
  );
};
