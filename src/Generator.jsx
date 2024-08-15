import Button from "./Button";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import Loader from "./Loader";
const Generator = () => {
  const [data, setData] = useState({
    id: "",
    advice: "",
  });
  const [click, setClick] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    try {
      async function adviceGenerator() {
        const res = await fetch("	https://api.adviceslip.com/advice");
        const data = await res.json();
        setData({
          id: data.slip.id,
          advice: data.slip.advice,
        });
      }
      adviceGenerator();
    } catch (e) {
      console.log("error in fetching", e);
    }
    setIsLoading(false);
  }, [click]);
  function handleBtnClick() {
    setClick(click + 1);
  }
  const scaleAnimation = useSpring({
    from: { transform: "scale(0.95)" },
    to: { transform: "scale(1)" },
    reset: true,
    config: { tension: 210, friction: 50 },
  });
  return (
    <>
      {" "}
      <animated.main
        style={scaleAnimation}
        className="bg-DarkGrayishBlue rounded-lg max-w-[35rem] 
        h-[15rem]
        shadow-lg  md:p-6 md:space-y-8 
        sm:mx-4  sm:space-y-6 sm:py-8 sm:px-4
relative
      "
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <animated.p
              style={scaleAnimation}
              className="text-NeonGreen font-base text-xs text-center uppercase tracking-[0.25em]
        "
            >
              advice#{data.id}
            </animated.p>
            <animated.h1
              style={scaleAnimation}
              className="text-LightCyan font-extrabold md:text-[1.25rem]
    tracking-[0.05em] text-center
    sm:text-[1.15rem]
    "
            >
              {data.advice}
            </animated.h1>
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
            <Button handleBtnClick={handleBtnClick} />
          </>
        )}
      </animated.main>
    </>
  );
};

export default Generator;
