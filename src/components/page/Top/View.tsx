import axios from "axios";
import { VFC } from "react";
import useSWR from "swr";

import { useAPI_key } from "@/hooks/useAPI_key";
import { useToggle } from "@/hooks/useToggle";

import { Pokemon } from "@/types/PokemonCard";

import { Modal } from "@/components/model/Modal/Modal";
import { PokemonCard } from "@/components/model/PokemonCard/PokemonCard";

export const TopPageView: VFC = () => {
  const [{ API_key }, Decider] = useAPI_key();
  const [isOpen, open, close] = useToggle();

  const url = `https://pokeapi.co/api/v2/pokemon/${API_key}`;
  const fetcher = (api_key: string) =>
    axios.get(api_key).then((res) => res.data);
  const { data, error } = useSWR<Pokemon>(url, fetcher);

  if (error) return <p>error</p>;
  if (!data) return <p>Loding...</p>;

  const abilities = data?.abilities;
  console.log({ data });

  return (
    <main>
      <PokemonCard pokemon={data} open={open} />
      {isOpen && <Modal Decider={Decider} close={close} />}
    </main>
  );
};
