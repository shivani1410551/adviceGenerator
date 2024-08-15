const Button = ({ handleBtnClick }) => {
  return (
    <div
      className="h-[60px] w-[60px] rounded-full bg-NeonGreen flex items-center justify-center z-20 fixed translate-x-[-50%] left-[50%] 
    sm:bottom-[7.5rem]
    md:bottom-[8.2]  lg:bottom-[8rem]
cursor-pointer
transition-shadow linear duration-300 
shade
    "
      onClick={handleBtnClick}
    >
      <img src="./images/icon-dice.svg" alt="dice" />
    </div>
  );
};

export default Button;
