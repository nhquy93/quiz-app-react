import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { authSelector } from "../../store/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AuthLayout } from "../../components/Layouts/AuthLayout/AuthLayout";
import { postUser } from "../../api/participantApi";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useEffect } from "react";

export function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth, isLoading } = useSelector(authSelector);

  useEffect(() => {
    const { user } = auth;
    if (!user) return;
    navigate("/");
  }, [auth]);

  const submit = (values) => {
    const { email, username } = values;
    dispatch(postUser({ email, username }));
  };
  return (
    <AuthLayout>
      <LoginForm onSubmit={submit} onLoading={isLoading} />
    </AuthLayout>
  );
}
