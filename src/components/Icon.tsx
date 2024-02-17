import React from "react";

interface Icon {
  src: string;
  alt: string;
  clickHandler: () => void;
}

export const Icon: React.FC<Icon> = ({ src, alt, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={"absolute right-0 top-6 px-2 bg-none border-none"}>
      <img src={src} alt={alt} className={"w-4 h-4"} />
    </button>
  );
};
