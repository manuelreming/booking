import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth.js";
import UserLogged from "../components/LoginPage/UserLogged.jsx";

const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const { loginUser } = useAuth();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const submit = (data) => {
    loginUser(data);
    reset({
      email: "",
      password: "",
    });
  };
  if (localStorage.getItem("token")) {
    return <UserLogged setUser={setUser} user={user} />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Email</span>

          <input {...register("email")} type="email" />
        </label>

        <label>
          <span>Password</span>

          <input {...register("password")} type="password" />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
