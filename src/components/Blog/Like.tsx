// import { useState } from "react";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from '../../context/AuthContext';
import { db } from "../../firebase";

export default function Like({ id, likes }: { id: string; likes: string[]}) {
  const { user }: {user: any } = UserAuth() as { user: any };
  const likesRef = doc(db, "Articles", id);
//   const [like, setLike] = useState<boolean>(true);
  const handleLike = () => {
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
      }).then(() => {
          console.log("unliked");
        //   setLike(true)
      }).catch((e) => {
            console.log(e);
      });
    }
    else{
        updateDoc(likesRef,{
            likes:arrayUnion(user.uid)
        }).then(() => {
            console.log("liked");
            // setLike(false)
        }).catch((e) => {
              console.log(e);
        });
    }
  };
  return (
    <div className="flex justify-end gap-4">
      <p>{likes?.length} likes</p>
      <button className={!likes?.includes(user.uid) ? "btn-next bg-myrouge-300 w-fit h-fit" : "btn-next w-fit h-fit"} onClick={handleLike}>
        {!likes?.includes(user.uid) ? "Like" : "Dislike"}
      </button>
      
    </div>
  );
}

