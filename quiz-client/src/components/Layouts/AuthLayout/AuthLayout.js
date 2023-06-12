import s from "./style.module.css";

export function AuthLayout({ children }) {
  const header = (
    <div className={s.header}>
      <h3 className={s.logoTitle}>QuizApp</h3>
    </div>
  );

  const background = (
    <div>
      <div className="d-flex">
        <h1 className={s.backgroundTitle}>QuizApp</h1>
      </div>
    </div>
  );

  return (
    <div className={s.root}>
      {header}
      <div className={s.leftSection}>{children}</div>
      <div className={`${s.rightSection} d-none d-lg-flex`}>{background}</div>
    </div>
  );
}
