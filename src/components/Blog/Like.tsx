// import { useState } from "react";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from '../../context/AuthContext';
import { db } from "../../firebase";
import { Likes } from "../../../types";


export default function Like({ id, likes }: { id: string; likes: Likes[]}) {
  const { user }: {user: any } = UserAuth() as { user: any };
  const likesRef = doc(db, "Articles", id);

  const likeUserIdArr = likes?.map((like) => like.likedUser);


  const handleLike = () => {
    if (likeUserIdArr?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove({likedUser:user.uid, photoURL: user.photoURL, displayName: user.displayName }),
        
      }).then(() => {
          console.log("unliked");
          window.location.reload();
      }).catch((e) => {
            console.log(e);
      });
    }
    else{
      updateDoc(likesRef,{
        likes:arrayUnion({likedUser:user.uid, photoURL: user.photoURL, displayName: user.displayName }),
     
      }).then(() => {
        console.log("liked");
        window.location.reload();
      }).catch((e) => {
          console.log(e);
      });
    }
  };



    function showLikes(){
      if(!likes?.length){
        return "0 Likes"
      } else if(likes.length === 1){
        return "1 Like"
      } else {
        return `${likes.length} Likes`
      }
    }

    function showLikesProfilePic(){
      if(likes?.length){
        return likes.map(({likedUser,photoURL, displayName }) => { 
          return <img key={likedUser} src={photoURL} alt="userWhoLiked" className="w-6 h-6 rounded-full" title={displayName} /> // Update the key and title attributes accordingly
        })
      }
    }
    
  


  return (
    <div className="flex flex-col items-end gap-2 mb-4">
      <div className="flex gap-4">
          <p>{showLikes()} </p>
          <button className={!likes?.includes(user.uid) ? "btn-next bg-myrouge-300 w-fit h-fit" : "btn-next w-fit h-fit"} onClick={handleLike}>
            {!likes?.includes(user.uid) ? "Like" : "Dislike"}    
          </button>
      </div>
      <div className="flex gap-2">
        {showLikesProfilePic()}
      </div>
    </div>
  );
}