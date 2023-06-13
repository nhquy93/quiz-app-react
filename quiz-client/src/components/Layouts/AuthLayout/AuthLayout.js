import { Image } from "antd";
import "./AuthLayout.css";
import logo from "./../../../assets/quiz-icon.svg";

export function AuthLayout({ children }) {
  const background = (
    <div>
      <div className="d-flex">
        <h1 className="background-title">
          <Image src={logo} preview={false} />
        </h1>
      </div>
    </div>
  );

  return (
    <div className="root">
      <div className="left-section">{children}</div>
      <div className="d-none d-lg-flex right-section">{background}</div>
    </div>
  );
}
