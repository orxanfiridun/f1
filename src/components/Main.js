//import React, { useState } from "react";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "./Input";
import facebook from "../components/assets/facebook.png";
import google from "../components/assets/google.png";
import leftSide from "../components/assets/leftSide.jpg";

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

  // const onSubmit = (data) => console.log(data);
  // const [fullname, setFullname] = useState("");
  // const [surname, setSurname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [repassword, setRePassword] = useState("");
  // const [gender, setGender] = useState("");

  // const [errorFullname, setErrorFullname] = useState("");
  // const [errorSurname, setErrorSurname] = useState("");
  // const [errorEmail, setErrorEmail] = useState("");
  // const [errorPassword, setErrorPassword] = useState("");
  // const [errorRePassword, setErrorRePassword] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (gender === "male") {
  //     console.log(gender);
  //   }
  //   if (gender === "female") {
  //     console.log(gender);
  //   }
  //   if (fullname !== "") {
  //     if (fullname.length < 8) {
  //       setErrorFullname("fullname has min 8 kharakter");
  //     } else {
  //       setErrorFullname("");
  //     }

  //     console.log(fullname);
  //   } else {
  //     setErrorFullname("fullname is invalid");
  //   }
  //   if (surname !== "") {
  //     setErrorSurname("");
  //     console.log(surname);
  //   } else {
  //     setErrorSurname("surname is invalid");
  //   }
  //   if (email !== "") {
  //     setErrorEmail("");
  //     console.log(email);
  //   } else {
  //     setErrorEmail("email is invalid");
  //   }
  //   if (password !== "") {
  //     setErrorPassword("");
  //     console.log(password);
  //   } else {
  //     setErrorPassword("password is invalid");
  //   }
  //   if (repassword !== "") {
  //     if (password !== repassword) {
  //       setErrorRePassword("check the correctness of the passwords ");
  //     } else {
  //       setErrorRePassword("");
  //     }

  //     console.log(repassword);
  //   } else {
  //     setErrorRePassword("repassword is invalid");
  //   }
  // };

  return (
    <div className="main">
      <div className="LeftSide">
        <img src={leftSide} alt={leftSide} />
      </div>
      <div className="RightSide">
        <div className="language">English (UK)</div>
        <h1>Create Account</h1>

        <div className="signup">
          <div className="signup-google">
            <div className="signimg">
              <img alt={google} />
            </div>
            <div className="signdiv">Sign up with Google</div>
          </div>
          <div className="signup-facebook">
            <div className="fbimg">
              <img alt={facebook} />
            </div>
            <div className="fbdiv">Sign up with Facebook</div>
          </div>
          <div className="or">- OR -</div>
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
              <option
                className="gender"
                defaultValue="gender"
                selected
                disabled
              >
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female </option>
            </select>
            <div className="create-account">
              <button type="submit">Create Account</button>
            </div>
          </form>
          <div className="already">
            <div className="alrhv">Already have a account?</div>
            <div className="login">Log in</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
