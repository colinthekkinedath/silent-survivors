import React from "react";
import Link from "next/link";
import { initFirebase } from "@/firebase/firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState} from "react-firebase-hooks/auth";
import { useRouter } from "next/router";


const Landing = () => {
    initFirebase();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, loading] =  useAuthState(auth);
    const router = useRouter();

    if (loading){
        return <div>Loading...</div>
    }

    if (user){
        router.push("/dashboard");
        return <div>Loading...</div>
    }
    const signIn = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result.user)
    };

    return (
      <div className = "flex flex-col">
          <div className="text-2xl text-bold">Silent Survivors</div>
          <button onClick = {signIn}>
                <div className = "bg-blue-600 text-white rounded-md p-2 w-48">
                    Sign In
                </div>
          </button>
      </div>
    );
  };
  
  export default Landing;