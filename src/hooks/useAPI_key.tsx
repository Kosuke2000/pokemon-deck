import { Select, Input } from "@chakra-ui/react";
import { useReducer, VFC } from "react";
import { useForm } from "react-hook-form";

export const ACTION = [
  { type: "ピカチュウ" },
  { type: "ヒコザル" },
  { type: "ポッチャマ" },
  { type: "ナエトル" },
] as const;

export const STORE = [
  { API_key: "pikachu" },
  { API_key: "chimchar" },
  { API_key: "piplup" },
  { API_key: "turtwig" },
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
    default:
      return state;
  }
};

export interface DciderProps {
  close: () => void;
}

export const useAPI_key = () => {
  const [{ API_key }, dispatch] = useReducer<Reducertype>(reducer, {
    API_key: "turtwig",
  });

  const Decider: VFC<DciderProps> = ({ close }) => {
    const { register, handleSubmit } = useForm();

    type Data = { [index: string]: number };
    const onSubmit: (data: Data) => void = (data: Data) => {
      dispatch(ACTION[data.index]);
      close();
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex" }}>
        <Select placeholder="すきなポケモンは？" {...register("index")}>
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

  type ReturnType = [{ API_key: string }, VFC<DciderProps>];
  const r: ReturnType = [{ API_key }, Decider];

  return r;
};
