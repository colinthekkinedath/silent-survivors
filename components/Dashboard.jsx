import { getAuth } from "firebase/auth";
import {useRouter} from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {

    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();
    if (loading){
        return <div>Loading...</div>
    }
    
    if (!user){
        router.push("/");
        return <div>Sign in to continue...</div>

    }
    return(
        <div>
            Feed
            <div>
                <button onClick={() => auth.signOut()}>
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Dashboard;