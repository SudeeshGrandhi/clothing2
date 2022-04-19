// import { useEffect } from "react";
// import { getRedirectResult } from "@firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const fetchGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={fetchGoogleUser}>Sign In with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

// useEffect(async () => {
//   const response = await getRedirectResult(auth);
//   if (resposne) {
//     const { user } = response;
//     createUserDocumentFromAuth(user);
//   }
// }, []);
