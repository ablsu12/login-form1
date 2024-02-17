import React, { useState } from "react";
import { Icon } from "./Icon";

const showIcon = `${process.env.PUBLIC_URL}/assets/showIcon.png`;
const hideIcon = `${process.env.PUBLIC_URL}/assets/hideIcon.png`;

interface Input {
  minWidth: number;
  maxWidth: number;
  placeholder: string;
}

export const Input: React.FC<Input> = ({ minWidth, maxWidth, placeholder }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={"w-full relative"}>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength={minWidth}
        maxLength={maxWidth}
        placeholder={placeholder}
        className={
          "w-3/4 h-10 placeholder:text-xs bg-gray-300 outline-none rounded px-4 shadow-2xl my-2.5 md:w-3/5 md:placeholder:text-sm"
        }
      />
      <Icon
        src={!showPassword ? showIcon : hideIcon}
        alt={"eye"}
        clickHandler={() => {
          setShowPassword((prevState) => !prevState);
        }}
      />
    </div>
  );
};
