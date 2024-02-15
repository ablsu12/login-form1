import React from "react";
interface Button {
  value: string;
  btnHandler: () => void;
}
export const Button: React.FC<Button> = ({ value, btnHandler }) => {
  return (
    <>
      <button
        onClick={btnHandler}
        className={
          "w-3/4 h-10 rounded px-2 shadow-2xl my-2.5 md:w-3/5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold font-mono"
        }
      >
        {value}
      </button>
    </>
  );
};
