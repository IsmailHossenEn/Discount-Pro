import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(newUser);
  const Createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWitGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const UpdateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const LogoutUser = () => {
    setLoading(true);
    return signOut(auth).finally(() => {
      setLoading(false);
    });
  };
  const authInfo = {
    newUser,
    setNewUser,
    Createuser,
    LoginUser,
    loginWitGoogle,
    loading,
    setLoading,
    LogoutUser,
    UpdateUser,
  };

  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setNewUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubsCribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
