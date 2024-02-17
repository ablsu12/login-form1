import React, { ReactNode } from "react";

interface Overlay {
  isOverlayOpen: boolean;
  children?: ReactNode;
}
export const Overlay: React.FC<Overlay> = ({ isOverlayOpen, children }) => {
  return (
    <div
      className={`${isOverlayOpen ? "flex" : "hidden"} absolute z-30 w-screen h-screen bg-black opacity-90`}
    >
      {children}
    </div>
  );
};
