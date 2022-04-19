import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import "./sign-up-form.styles.scss";

import Button from "../button/button.component";
const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormfield = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmitChange = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = response;
      createUserDocumentFromAuth(user, { displayName });
      resetFormfield();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("email already in use");
      } else {
        console.log("user creation encountered an error", err);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitChange}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          required
          type="email"
          onChange={onChangeHandler}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

//   //Cumbursum method or repetitive method
//   const [displayName, setDisplayName] = useState("");
//   const onChangeHandler = (e) => {
//     setDisplayName(e.target.value);
//   };
//   const [email, setEmail] = useState("");
//   const onChangeHandler1 = (e) => {
//     setEmail(e.target.value);
//   };
//   const [password, setPassword] = useState("");
//   const onChangeHandler2 = (e) => {
//     setPassword(e.target.value);
//   };
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const onChangeHandler3 = (e) => {
//     setConfirmPassword(e.target.value);
//   };
//   console.log(displayName, email, password, confirmPassword);
