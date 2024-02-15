import React from "react";
interface Input {
  type: string;
  minWidth: number,
  maxWidth: number,
  placeholder: string;
}

export const Input: React.FC<Input> = ({ type,minWidth,maxWidth, placeholder }) => {
  return (
    <>
      <input
        type={type}
        minLength={minWidth}
        maxLength={maxWidth}
        placeholder={placeholder}
        className={
          "w-3/4 h-10 placeholder:text-xs bg-gray-300 outline-none rounded px-4 shadow-2xl my-2.5 md:w-3/5 md:placeholder:text-sm"
        }
      />
    </>
  );
};
