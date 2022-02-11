import { useState } from "react";

import { useToggle } from "./useToggle";

export const useAnime = () => {
  const [u, setU] = useState("");
  const [isOpen, open, close] = useToggle();

  const onOpen = () => {
    setTimeout(() => {
      open;
    }, 500);
  };

  const onCancel = () => {
    setU("animate-fade-out");
    setTimeout(() => {
      close;
    }, 500);
  };

  type ReturnType = [() => void, () => void];
  const r: ReturnType = [onOpen, onCancel];

  return r;
};
