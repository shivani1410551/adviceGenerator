const Button = ({ handleBtnClick }) => {
  return (
    <div
      className="h-[60px] w-[60px] rounded-full bg-NeonGreen flex items-center justify-center z-20 fixed 
sm:bottom-[12.25rem]
base:bottom-[4.5rem]
md:bottom-[8rem]
xl:bottom-[7.85rem]
2xl:bottom-[8rem]
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
