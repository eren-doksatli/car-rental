import { ButtonProps } from "../../types";

const CustomButton = ({
  title,
  btnType,
  designs,
  handleClick,
  rIcon,
}: ButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-btn transition bg-primary-blue rounded-full hover:bg-blue-800 text-white ${designs}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} alt="right-arrow" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
