const Button = ({ handleBtnClick }) => {
  return (
    <div
      className="h-[60px] w-[60px] rounded-full bg-NeonGreen flex items-center justify-center z-20 fixed translate-x-[-50%] left-[50%] 
sm:bottom-[12.5rem]
base:bottom-[20rem]
md:bottom-[5rem]
xl:bottom-[7.5rem]
xxl:bottom-[9.55rem]
cursor-pointer
transition-shadow linear duration-300 
shade

    "
      onClick={handleBtnClick}
    >
      <img
        src="./images/icon-dice.svg"
        alt="dice"
        className="hover:animate-spin"
      />
    </div>
  );
};

export default Button;
