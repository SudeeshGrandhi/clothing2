// import { useEffect } from "react";
// import { getRedirectResult } from "@firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

// useEffect(async () => {
//   const response = await getRedirectResult(auth);
//   if (resposne) {
//     const { user } = response;
//     createUserDocumentFromAuth(user);
//   }
// }, []);
