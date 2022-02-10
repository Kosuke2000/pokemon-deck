import axios from "axios";
import { VFC } from "react";
import useSWR from "swr";

import { PokemonCard } from "@/components/model/PokemonCard/PokemonCard";

import { mockPikachu } from "@/mocks/Pokemon";

export const TopPageView: VFC = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon/pikachu",
    fetcher
  );

  console.log({ data });

  return (
    <main>
      <PokemonCard pokemon={mockPikachu} />
    </main>
  );
};
