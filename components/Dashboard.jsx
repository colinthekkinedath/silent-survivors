/* eslint-disable react/jsx-key */
import { getAuth } from "firebase/auth";
import {useRouter} from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseApp";
import Date from './Date';

const Dashboard = () => {

    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "post");

    
    // const deletePost = async (id) => {
    //   const postDoc = doc(db, "posts", id);
    //   await deleteDoc(postDoc);
    // }; 

    useEffect(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getPosts();
      });






    // const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();
    if (loading){
        return <div className = "text-3xl">Loading...</div>
    }
    
    if (!user){
        router.push("/");
        return <div>Sign in to continue...</div>

    }



    return (
        <div className = "flex flex-col justify-center px-44">
          {postLists.map((post) => {
            return (
              <div className = "flex-col justify-center p-7 drop-shadow-md rounded-xl hover:bg-gray-100">
                <div>
                  <div>
                    <div className = "font-bold text-3xl"> {post.title}</div>
                  </div>
                  <div className = "text-gray-400 "> {post.created} </div>
                  <div> {post.message} </div>
                  <div>
                    {user && post.author.id === auth.currentUser.uid && (
                      <button
                        // onClick={() => {
                        //   deletePost(post.id);
                        // }}
                        className = "hover:bg-red-400 p-1 rounded-sm"
                      >
                        {"🗑️"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    );
};

export default Dashboard;