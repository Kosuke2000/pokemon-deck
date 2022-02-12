import { Select, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useReducer, VFC } from "react";
import { useForm } from "react-hook-form";

import { Spacer } from "@/components/ui/Spacer";

export const ACTION = [
  { type: "ピカチュウ", gobi: "チュウ" },
  { type: "ヒコザル", gobi: "ザル" },
  { type: "ポッチャマ", gobi: "チャマ" },
  { type: "ナエトル", gobi: "トル" },
  { type: "カビゴン", gobi: "ゴン" },
  { type: "アブソル", gobi: "ソル" },
  { type: "ラプラス", gobi: "ラス" },
] as const;

export const STORE = [
  { API_key: "pikachu" },
  { API_key: "chimchar" },
  { API_key: "piplup" },
  { API_key: "turtwig" },
  { API_key: "snorlax" },
  { API_key: "absol" },
  { API_key: "lapras" },
] as const;

export type Action = typeof ACTION[number];
export type State = typeof STORE[number];

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
    case ACTION[4].type:
      return STORE[4];
    case ACTION[5].type:
      return STORE[5];
    case ACTION[6].type:
      return STORE[6];
    default:
      return state;
  }
};

export interface DciderProps {
  close: () => void;
  open: () => void;
}

export const useAPI_key = () => {
  const [{ API_key }, dispatch] = useReducer<Reducertype>(reducer, {
    API_key: "pikachu",
  });

  const [gobi, setGobi] = useState<string>("チュウ");

  const Decider: VFC<DciderProps> = ({ close, open }) => {
    const { register, handleSubmit } = useForm();

    type Data = { [index: string]: number };
    const onSubmit: (data: Data) => void = (data: Data) => {
      data.index
        ? (dispatch(ACTION[data.index]),
          setGobi(ACTION[data.index].gobi),
          close())
        : open();
    };

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <Select placeholder="すきなポケモンは？" {...register("index")}>
            {ACTION.map((action, index) => (
              <option key={index} value={index}>
                {action.type}
              </option>
            ))}
          </Select>
          <Spacer size={2} />
          <Input
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
            type="submit"
            value="キミにきめた！"
          />
        </form>
        <Spacer size={4} />
      </>
    );
  };

  type ReturnType = [{ API_key: string }, VFC<DciderProps>, string];
  const r: ReturnType = [{ API_key }, Decider, gobi];

  return r;
};
