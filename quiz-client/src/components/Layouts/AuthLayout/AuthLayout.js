import { Image } from "antd";
import "./AuthLayout.css";
import logo from "./../../../assets/quiz-icon-white.svg";

export function AuthLayout({ children }) {
  return (
    <div className="root">
      <div className="left-section">{children}</div>
      <div className="d-none d-lg-flex right-section">
        <Image src={logo} preview={false} />
      </div>
    </div>
  );
}
