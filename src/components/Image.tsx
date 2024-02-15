import React from "react";
interface Props {
  src: string;
  alt: string;
}

export const Image: React.FC<Props> = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} className={"w-24 h-24 rounded-full md:w-36 md:h-36"} />
    </>
  );
};
