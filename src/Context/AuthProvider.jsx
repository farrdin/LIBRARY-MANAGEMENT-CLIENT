import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerr = new GithubAuthProvider();
const providerrr = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const gitHubLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, providerr);
  };
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, providerrr);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedEmail = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      setName(currentUser.displayName || "");
      setPhotoURL(currentUser.photoURL || "");
      setNewPassword(currentUser.password || "");
      if (currentUser) {
        axios
          .post("https://prb9-a11.vercel.app/jwt", loggedEmail, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log(res.data);
          });
      } else {
        axios
          .post("https://prb9-a11.vercel.app/logout", loggedEmail, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log(res.data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    auth,
    name,
    setName,
    photoURL,
    setPhotoURL,
    newPassword,
    setNewPassword,
    user,
    createUser,
    logIn,
    googleLogIn,
    gitHubLogIn,
    facebookLogin,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
