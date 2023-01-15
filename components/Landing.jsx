import React from "react";
import Link from "next/link";
import { initFirebase } from "@/firebase/firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState} from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Image from 'next/image'
import landingImage from '../public/landing2.png'


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
      <div className = "flex justify-center">
        <div className = "flex flex-col mx-44">
            <div className="text-9xl font-bold pt-20">Silent Survivors</div>
            <div className = "text-2xl pt-3">
                you are not alone...
            </div>
            <button onClick = {signIn} className = "pt-40">
                <div className = "bg-gray-400 hover:bg-gray-600 text-white rounded-md p-2 w-48 font-medium">
                    Sign In
                </div>
            </button>

        </div>
        <Image
            src={landingImage}
            alt="Landing Page Image"    
            />


      </div>
    );
  };
  
  export default Landing;