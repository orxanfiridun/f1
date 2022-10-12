//import React, { useState } from "react";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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
        <img src="https://i0.wp.com/journo.com.tr/wp-content/uploads/2021/07/ay-fotografi-nasil-cekilir.jpg?fit=927%2C960&ssl=1" />
      </div>
      <div className="RightSide">
        <span className="uk">English (UK)</span>
        <h1 className="h1">Create Account</h1>
        <div className="signup">
          <div className="signup-google">
            <div className="signimg">
              <img src="https://freesvg.org/img/1534129544.png" />
            </div>
            <div className="signdiv">Sign up with Google</div>
          </div>
          <div className="signup-facebook">
            <div className="fbimg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" />
            </div>
            <div className="fbdiv">Sign up with Facebook</div>
          </div>
          <div className="or">- OR -</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fullname">
              <input
                className={`input ${errors.fullName ? "error" : ""}`}
                // onChange={(e) => setFullname(e.target.value)}
                //value={fullname}
                {...register("fullName")}
                placeholder="Full name"
              />
              <div className="error">{errors.fullName?.message}</div>
              {/* {errorFullname && <div className="error">{errorFullname}</div>} */}
            </div>
            <div className="surname">
              <input
                className={`input ${errors.surName ? "error" : ""}`}
                // onChange={(e) => setSurname(e.target.value)}
                // value={surname}
                {...register("surName", { required: true })}
                aria-invalid={errors.surName ? "true" : "false"}
                placeholder="Surname"
              />
              <div className="error">{errors.surName?.message}</div>
              {/* {errorSurname && <div className="error">{errorSurname}</div>} */}
            </div>
            <div className="email">
              <input
                type="email"
                className={`input ${errors.email ? "error" : ""}`}
                // onChange={(e) => setEmail(e.target.value)}
                // value={email}
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="Email Address"
              />
              <div className="error">{errors.email?.message}</div>
              {/* {errorEmail && <div className="error">{errorEmail}</div>} */}
            </div>
            <div className="password">
              <input
                className={` input  ${errors.password ? "is-invalid" : ""}`}
                type="password"
                // onChange={(e) => setPassword(e.target.value)}
                // value={password}
                {...register("password")}
                placeholder="Password"
              />
              <div className="error">{errors.password?.message}</div>
              {/* {errorPassword && <div className="error">{errorPassword}</div>} */}
            </div>
            <div className="repassword">
              <input
                className={` input  ${errors.password ? "is-invalid" : ""}`}
                type="password"
                // onChange={(e) => setRePassword(e.target.value)}
                // value={repassword}
                placeholder="Repassword"
                {...register("repassword")}
              />
              <div className="error">{errors.repassword?.message}</div>
              {/* {errorRePassword && (
                <div className="error">{errorRePassword}</div>
              )} */}
            </div>
            <select
              className="select"
              {...register("gender")}
              // onChange={(e) => setGender(e.target.value)}
            >
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
