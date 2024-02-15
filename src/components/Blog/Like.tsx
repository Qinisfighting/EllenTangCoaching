import { useState } from "react";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from '../../context/AuthContext';
import { db } from "../../firebase";
import { Likes } from "../../../types";



export default function Like({ id, likes }: { id: string; likes: Likes[]} ) {

  const [likesState, setLikesState] = useState<Likes[]>(likes || []);
  const { user }: {user: any } = UserAuth() as { user: any };
  const likesRef = doc(db, "Articles", id);

  const likesStateArr = likesState?.map((like) => like.likedUser);

  const handleLike = () => {
    if (likesStateArr?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove({likedUser:user.uid, photoURL: user.photoURL, displayName: user.displayName }),  
      }).then(() => {
          console.log("unliked");  
          setLikesState(likesState.filter((like) => like.likedUser !== user.uid));  
      }).catch((e) => {
          console.log(e);
      });
    }
    else{
      updateDoc(likesRef,{
        likes:arrayUnion({likedUser:user.uid, photoURL: user.photoURL, displayName: user.displayName }),  
      }).then(() => {
        console.log("liked");
        setLikesState([...likesState, {likedUser:user.uid, photoURL: user.photoURL, displayName: user.displayName }]);
      }).catch((e) => {
        console.log(e);
      }); 
    }
  };

    function showLikes(){
      if(!likesState?.length){
        return "0 Likes"
      } else if(likesState.length === 1){
        return "1 Like"
      } else {
        return `${likesState.length} Likes`
      }
    }

    function showLikesProfilePic(){
      if(likesState?.length){
        return likesState.map(({likedUser, photoURL, displayName }) => { 
          return <img key={likedUser} src={photoURL} alt="userWhoLiked" className="w-6 h-6 rounded-full" title={displayName} /> 
        })
      }
    }
    

  return (
    <div className="flex flex-col items-end gap-2 mb-4">
      <div className="flex gap-4">
          <p>{showLikes()} </p>
          {user&&<button className={!likesStateArr?.includes(user?.uid) ? "btn-next bg-myrouge-300 w-fit h-fit" : "btn-next w-fit h-fit"} onClick={handleLike}>
            {!likesStateArr?.includes(user?.uid) ? "Like" : "Dislike"}    
          </button>}
      </div>
      <div className="flex gap-2">
        {showLikesProfilePic()}
      </div>
    </div>
  );
}