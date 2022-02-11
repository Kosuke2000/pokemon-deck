import { VFC } from "react";

import { useMockPokemon } from "@/hooks/useMockPokemon";
import { useToggle } from "@/hooks/useToggle";

import { PokemonCard } from "@/components/model/PokemonCard/PokemonCard";

import { Modal } from "@/components/ui/Modal/Modal";

export const TopPageView: VFC = () => {
  // const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  // const { data, error } = useSWR(
  //   "https://pokeapi.co/api/v2/pokemon/turtwig",
  //   fetcher
  // );

  // console.log({ data });

  const [{ mockdata }, Decider] = useMockPokemon();
  const [isOpen, open, close] = useToggle();

  return (
    <main>
      <PokemonCard pokemon={mockdata} open={open} />
      {isOpen && <Modal Decider={Decider} close={close} />}
    </main>
  );
};
