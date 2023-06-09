import s from "./style.module.css";

export function Input({ type, onTextChange, placeholder, id }) {
  return (
    <>
      <input
        id={id}
        type={type || "text"}
        className={s.input}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
}
