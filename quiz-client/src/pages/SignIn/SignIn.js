import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import "./SignIn.css";
// import { Input } from "../../components/Input/Input";
import { setUser } from "../../store/auth/auth-slice";
import { useDispatch } from "react-redux";
import { toast } from "../../utils/sweet-alert";
import { AuthLayout } from "../../components/Layouts/AuthLayout/AuthLayout";
import { ParticipantAPI } from "../../api/participant-api";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (values) => {
    const { email, username } = values;
    try {
      const user = await ParticipantAPI.create({ email, username });
      dispatch(setUser(user));
      await toast("success", "Auth succeed");
      navigate("/");
    } catch (err) {
      console.log("Auth failed");
      await toast("error", "Invalid credentials " + err.message);
    }
  };
  return (
    <AuthLayout>
      <LoginForm onSubmit={submit} />
    </AuthLayout>
  );
}
