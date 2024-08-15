const Button = ({ handleBtnClick }) => {
  return (
    <div
      className="h-[60px] w-[60px] rounded-full bg-NeonGreen flex items-center justify-center z-20 absolute 
z-100 
sm:translate-y-[50px]
sm:left-[40%]
md:translate-y-[55px]
md:left-[45%]
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
