import "./ButtonPrimary.css";

export function ButtonPrimary({
  className,
  type,
  children,
  onClickButton,
  isDisabled,
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClickButton}
      type={type || "button"}
      className={`btn btn-primary btn-prim ${className}`}
    >
      {children}
    </button>
  );
}
