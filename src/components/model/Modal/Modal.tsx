import { VFC } from "react";

import { DciderProps } from "@/hooks/useMockPokemon";

export interface ModalProps {
  close: () => void;
  Decider: VFC<DciderProps>;
}

export const Modal: VFC<ModalProps> = ({ close, Decider }) => {
  return (
    <div
      className={`flex overflow-y-hidden fixed top-0 left-0 z-10 justify-center items-center w-screen h-screen bg-slate-200/75`}
    >
      <div
        className={`flex flex-col justify-center items-center py-8 px-4 w-4/5 h-2/5 bg-white  rounded shadow`}
      >
        <h2 className="pb-6 text-2xl font-bold">
          いっしょにたびするポケモンをえらんでね
        </h2>
        <Decider close={close} />
        <button
          onClick={close}
          className="py-2 px-4 font-semibold text-blue-700 hover:text-white bg-transparent hover:bg-blue-500 rounded border border-blue-500 hover:border-transparent"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
