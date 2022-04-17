import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const fetchGoogleUser = async () => {
  const response = await signInWithGooglePopup();
  const { user } = response;
  createUserDocumentFromAuth(user);
};

const SignIn = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={fetchGoogleUser}>Sign In with Google Popup</button>
    </div>
  );
};

export default SignIn;
