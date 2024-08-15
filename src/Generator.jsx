import Button from "./Button";
import { useState, useEffect } from "react";
const Generator = () => {
  const [data, setData] = useState({
    id: "",
    advice: "",
  });
  const [click, setClick] = useState(0);
  useEffect(() => {
    async function adviceGenerator() {
      const res = await fetch("	https://api.adviceslip.com/advice");
      const data = await res.json();

      setData({
        id: data.slip.id,
        advice: data.slip.advice,
      });
    }
    adviceGenerator();
  }, [click]);
  function handleBtnClick() {
    setClick(click + 1);
  }
  return (
    <>
      {" "}
      <div
        className="bg-DarkGrayishBlue rounded-lg md:max-w-[30rem] md:min-h-[18rem] shadow-lg relative md:p-6 md:space-y-8 
        sm:mx-4  sm:space-y-6 sm:py-8 sm:px-4
 sm:max-w-[18rem] sm:min-h-[18rem]

      "
      >
        <p
          className="text-NeonGreen font-base text-xs text-center uppercase tracking-[0.25em]
        "
        >
          advice#{data.id}
        </p>
        <h1
          className="text-LightCyan font-extrabold md:text-[1.25rem]
    tracking-[0.05em] text-center
    sm:text-[1.15rem]
    "
        >
          {data.advice}
        </h1>
        <img
          src="./images/pattern-divider-desktop.svg"
          alt="divider desktop"
          className="mx-auto sm:hidden md:block"
        />
        <img
          src="./images/pattern-divider-mobile.svg"
          alt="divider mobile"
          className="mx-auto md:hidden"
        />
      </div>
      <Button handleBtnClick={handleBtnClick} />
    </>
  );
};

export default Generator;
