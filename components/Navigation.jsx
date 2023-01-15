import React from "react";
import Link from 'next/link'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Navigation = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const provider = new GoogleAuthProvider();
  
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result.user)
  };
  
  return(
    <div>
      <div className="flex space-x-12 justify-center pt-11">
        <Link className = "text-xl font-semibold text-gray-500 hover:text-gray-400" href = "/about">
            About
        </Link>
        <Link className = "text-xl font-semibold text-gray-500 hover:text-gray-400" href = "/dashboard">
            Feed
        </Link>
        <Link className = "text-xl font-semibold text-gray-500 hover:text-gray-400" href = "/cpost">
            Create
        </Link>

        <div className = "flex">
        {user && (
          <button className = "text-xl font-semibold text-red-500 hover:text-red-400" onClick={() => auth.signOut()}>
            Sign Out
          </button>
        )}
        {!user && (
          <button className = "text-xl font-semibold text-green-500 hover:text-green-400" onClick = {signIn}>
            Sign In
          </button>
        )}
      </div>





      </div>

   </div>

  );
};

export default Navigation;