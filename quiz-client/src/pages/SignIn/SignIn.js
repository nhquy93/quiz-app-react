import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";
import { Input } from "../../components/Input/Input";
import { useState } from "react";
// import { AuthAPI } from "../../api/auth";
import { setUser } from "../../store/auth/auth-slice";
import { useDispatch } from "react-redux";
import { toast } from "../../utils/sweet-alert";
import { AuthLayout } from "../../components/Layouts/AuthLayout/AuthLayout";
import { ParticipantAPI } from "../../api/participant-api";

export function SignIn(props) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const user = await ParticipantAPI.create({email, userName});
      dispatch(setUser(user));
      await toast("success", "Auth succeed");
      navigate("/");
    } catch (err) {
      console.log("Auth failed");
      await toast("error", "Invalid credentials " + err.message);
    }
  };

  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signin <br /> to access your team quiz
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
        <Input placeholder={"Email"} onTextChange={setEmail} id={"Email"} />
        <Input
          id={"UserName"}
          placeholder={"UserName"}
          onTextChange={setUserName}
        />
        <ButtonPrimary type="submit" className={s.button}>
          Start Quiz !
        </ButtonPrimary>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}
