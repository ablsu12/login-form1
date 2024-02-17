import React from "react";

interface Icon {
  src: string;
  alt: string;
  clickHandler: () => void;
}

export const Icon: React.FC<Icon> = ({ src, alt, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={
        "absolute right-5 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 px-9 bg-none border-none"
      }
    >
      <img src={src} alt={alt} className={"w-4 h-4"} />
    </button>
  );
};
