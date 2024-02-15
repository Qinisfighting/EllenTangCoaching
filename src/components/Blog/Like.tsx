// import { useState } from "react";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from '../../context/AuthContext';
import { db } from "../../firebase";

export default function Like({ id, likes,likesProfilePic }: { id: string; likes: string[]; likesProfilePic: string[]}) {
  const { user }: {user: any } = UserAuth() as { user: any };
  const likesRef = doc(db, "Articles", id);
//   const [like, setLike] = useState<boolean>(true);
  const handleLike = () => {
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
        likesProfilePic: arrayRemove(user.photoURL),
      }).then(() => {
          console.log("unliked");
        //   setLike(true)
      }).catch((e) => {
            console.log(e);
      });
    }
    else{
        updateDoc(likesRef,{
            likes:arrayUnion(user.uid),
            likesProfilePic:arrayUnion(user.photoURL),
        }).then(() => {
            console.log("liked");
            // setLike(false)
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
      if(likesProfilePic?.length){
        return likesProfilePic.map((pic, index) => {
          return <img key={index} src={pic} alt="userWhoLiked" className="w-6 h-6 rounded-full" title={user.displayName} />
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

