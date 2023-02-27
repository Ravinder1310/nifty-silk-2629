import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";
import { auth } from "../../firebase";

export const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function SignOut() {
    setUser({});
    return signOut(auth);
  }

  const setUpRecaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    recaptchaVerifier.render();
    const phFormat = "+91" + number
    return signInWithPhoneNumber(auth, phFormat, recaptchaVerifier)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);



  return (
    <userAuthContext.Provider
      value={{ user, SignOut, setUpRecaptcha }}
    >
      {children}
    </userAuthContext.Provider>
  );
}