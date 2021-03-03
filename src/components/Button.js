import "./Button.scss";
const TYPES = ["button", "submit", "reset"];
const COLORS = [
  "default",
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "dark",
];
const VARIANTS = ["solid", "outline", "text"];
const SIZES = ["small", "medium", "large"];

const Button = ({
  text,
  type,
  onClick,
  color,
  variant,
  size,
  disabled,
  disableShadow,
  startIcon,
  endIcon,
  icon,
  value,
}) => {
  const checkType = TYPES.includes(type) ? type : TYPES[0];
  const checkColor = COLORS.includes(color) ? color : COLORS[0];
  const checkVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const checkSize = SIZES.includes(size) ? size : SIZES[1];

  return (
    <>
      <button
        type={checkType}
        onClick={onclick}
        className={`btn btn--${checkColor}--${checkVariant} btn--${checkSize} ${
          disableShadow ? "disableShadow" : ""
        } ${startIcon ? "startIcon" : ""} ${endIcon ? "endIcon" : ""} ${
          icon ? "icon" : ""
        }`}
        disabled={disabled}
      >
        {startIcon && <i className="material-icons">{startIcon}</i>}
        {icon && <i className="material-icons">{icon}</i>}
        {text}
        {endIcon && <i className="material-icons">{endIcon}</i>}
      </button>
    </>
  );
};

export default Button;
