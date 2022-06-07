import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { store } from "../store";
import { useLoginUserMutation } from "../store/api/authApiSlice";
import userSlice, { login } from "../store/userSlice/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { data, isError, error }] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({
      email: "mathias.scheltjens@gmail.com",
      password: "test",
    });
  };

  useEffect(() => {
    if (data) {
      dispatch(login({ data }));
      navigate(`/dashboard`);
    }
    if (isError) {
      console.log(error);
    }
  }, [data, isError]);

  return (
    <div>
      {data && <p>{JSON.stringify(data)}</p>}
      <button onClick={handleSubmit}>login</button>
    </div>
  );
};

export default Login;
