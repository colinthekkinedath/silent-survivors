import { auth, db } from "../firebase/firebaseApp";
import React, { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {useRouter} from "next/router";



const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [user, loading] = useAuthState(auth);
    var today = new Date();
    var usDate = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit", 
    });
    

    const postsCollectionRef = collection(db, "post");
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            message,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
            created: usDate,
          });
    }

    const router = useRouter();

    if (!user){
        router.push("/");
        return <div>Sign in to continue...</div>

    }

  return(
    <div className = "flex-col">
        <div>
            <label> Title:</label>
            <input
                placeholder="Title..."
                onChange={(event) => {
                setTitle(event.target.value);
                }}
            />
        </div>
        <div>
            <label> Post:</label>
            <textarea
            placeholder="Post..."
            onChange={(event) => {
                setMessage(event.target.value);
            }}
            />
        </div>
        

        <button onClick={createPost}> Submit Post</button>
    </div>
  ); 
};

export default CreatePost;