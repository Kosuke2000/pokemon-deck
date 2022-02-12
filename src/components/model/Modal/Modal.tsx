import { VFC } from "react";

import { DciderProps } from "@/hooks/useAPI_key";
import { useBudouX } from "@/hooks/useBudouX";

export interface ModalProps {
  open: () => void;
  close: () => void;
  Decider: VFC<DciderProps>;
}

export const Modal: VFC<ModalProps> = ({ open, close, Decider }) => {
  const { parse } = useBudouX();

  return (
    <div
      className={`flex px-2 overflow-y-hidden fixed top-0 left-0 z-10 justify-center items-center w-screen h-screen bg-slate-200/75`}
    >
      <div
        className={`flex flex-col justify-center items-center px-6  py-8  min-w-min min-h-max  bg-white  rounded shadow`}
      >
        <h2 className="pb-6 text-2xl font-bold text-center">
          {parse("いっしょにたびするポケモンをえらんでね")}
        </h2>
        <Decider open={open} close={close} />
        <button
          onClick={close}
          className="py-2 px-4 font-semibold text-blue-400 hover:text-white bg-transparent hover:bg-blue-400 rounded border border-blue-500 hover:border-transparent"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
