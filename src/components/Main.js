//import React, { useState } from "react";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "./Input";

function Main() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .min(5, "Password must be at 5 char long"),
    repassword: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
    fullName: Yup.string().required("full name is invalid"),
    surName: Yup.string().required("surname is invalid"),
    email: Yup.string().required("email is invalid"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions, {
    defaultValues: {
      fullName: "",
      surName: "",
      email: "",
      password: "",
      repassword: "",
      gender: "",
    },
  });
  const { errors } = formState;
  function onSubmit(data) {
    console.log(data);
    return false;
  }

  return (
    <div className="main">
      <div className="LeftSide">
        <img src="/leftSide.jpg" alt="leftSide" />
      </div>
      <div className="RightSide">
        <div className="language">English (UK)</div>
        <h1>Create Account</h1>
        <div className="signup">
          <div className="signup__button">
            <div className="signup__image">
              <img src="/google.png" alt="google" />
            </div>
            <div className="signup__title">Sign up with Google</div>
          </div>
          <div className="signup__button">
            <div className="signup__image">
              <img src="/facebook.png" alt="fb" />
            </div>
            <div className="signup__title">Sign up with Facebook</div>
          </div>
        </div>
        <div className="divider">- OR -</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={errors?.fullName}
            errorMessage={errors?.fullName?.message}
            placeholder="Full name"
            {...register("fullName")}
          />
          <Input
            error={errors?.surName}
            errorMessage={errors?.surName?.message}
            placeholder="Surname"
            {...register("surName")}
          />
          <Input
            error={errors?.email}
            errorMessage={errors?.email?.message}
            placeholder="Email"
            type="email"
            {...register("email")}
          />
          <Input
            error={errors?.password}
            errorMessage={errors?.password?.message}
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          <Input
            error={errors?.repassword}
            errorMessage={errors?.repassword?.message}
            placeholder="Re Password"
            type="password"
            {...register("repassword")}
          />

          <select className="select" {...register("gender")}>
            <option className="gender" defaultValue="gender" selected disabled>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female </option>
          </select>
          <div className="create-account">
            <button type="submit">Create Account</button>
          </div>
        </form>
        <div className="already-div">
          <div className="account-button">Already have a account? </div>
          <div className="login-div"> Log in</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
