import s from "./style.module.css";

export function ButtonPrimary({ className, type, children, onClickButton, isDisabled }) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClickButton}
      type={type || "button"}
      className={`btn btn-primary ${s.button} ${className}`}
    >
      {children}
    </button>
  );
}
