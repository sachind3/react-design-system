import "./Input.scss";

const TYPES = [
  "text",
  "button",
  "email",
  "number",
  "submit",
  "reset",
  "password",
  "date",
  "file",
];
const SIZES = ["small", "medium", "large"];

const Input = ({
  size,
  type,
  placeholder,
  disabled,
  value,
  id,
  label,
  error,
  startIcon,
  endIcon,
  helpertext,
}) => {
  const checkType = TYPES.includes(type) ? type : TYPES[0];
  const checkSize = SIZES.includes(size) ? size : SIZES[1];
  return (
    <>
      <div
        className={`input-group ${startIcon ? "input-startIcon" : ""} ${
          endIcon ? "input-endIcon" : ""
        }`}
      >
        {label && (
          <label htmlFor={id} className={`${error ? "label-error" : ""}`}>
            {label}
          </label>
        )}
        <div className="input-control">
          <input
            id={id}
            type={checkType}
            className={`input input--${checkSize} ${
              error ? "input-error" : ""
            }`}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
          />
          {startIcon && (
            <i className={`material-icons ${startIcon ? "startIcon" : ""}`}>
              {startIcon}
            </i>
          )}
          {endIcon && (
            <i className={`material-icons ${endIcon ? "endIcon" : ""}`}>
              {endIcon}
            </i>
          )}
          {helpertext && <span className="helpertext">{helpertext}</span>}
        </div>
      </div>
    </>
  );
};

export default Input;
