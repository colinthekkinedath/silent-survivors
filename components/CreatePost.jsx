import { auth, db } from "../firebase/firebaseApp";
import React, { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
// import {useNavigate} from "react-router-dom";



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
    const router = useRouter();

    const postsCollectionRef = collection(db, "post");
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            message,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
            created: usDate,

          });
          router.push("/");
    }

   

    // if (!user){
    //     router.push("/");
    //     return <div>Sign in to continue...</div>

    // }

  return(
    <div className = "flex-col px-44">
        <div>
            <label 
                className="block mb-2 text-2xl font-medium text-gray-900">
                Title
            </label>
            <textarea 
                rows="`" 
                className="resize-none p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Write your title here..."
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
                /> 
        </div>
        <div>
            <label 
                className="block mb-2 text-2xl font-medium text-gray-900">
                Your message
            </label>
            <textarea 
                rows="4" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Write your thoughts here..."
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
                /> 
        </div>
        

        {/* <button onClick={createPost}> Submit Post</button> */}
        <button 
            type="button" 
            className="my-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            onClick={createPost}>
                Submit Post
        </button>
    </div>
  ); 
};

export default CreatePost;