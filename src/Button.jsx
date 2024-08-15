const Button = ({ handleBtnClick }) => {
  return (
    <div
      className="h-[60px] w-[60px] rounded-full bg-NeonGreen flex items-center justify-center z-20 fixed 
      translate-y-[32px]
sm:top-[24rem]
xl:top-[26rem]
2xl:top-[28rem]
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
