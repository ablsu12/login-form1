import { Image } from "./Image";
import { Input } from "./Input";
import { Button } from "./Button";

export const Card = () => {
  const profile = `${process.env.PUBLIC_URL}/assets/walter-white.jpg`;
  return (
    <div
      className={
        "w-3/5 h-1/2 flex flex-col items-center pt-12 rounded-xl md:w-1/2 xl:w-1/3 md:h-screen md:justify-center md:rounded-none " +
        "md:shadow-2xl bg-white"
      }
    >
      <Image src={profile} alt={"walter"} />
      <p className={"text-xs font-light font-sans py-2.5"}>Welcome Walter</p>
      <h1 className={"text-xl font-bold mb-6"}>Walter White</h1>
      <Input minWidth={6} maxWidth={12} placeholder={"Enter your passcode"} />
      <Button value={"Login"} btnHandler={() => {}} />
      <p
        className={"text-sm font-light font-sans py-2.5"}
        onClick={(): void => {}}
      >
        Forgot your password?!
      </p>
    </div>
  );
};
