import { Timestamp, arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { UserAuth } from '../../context/AuthContext';
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';


export default function Comment({ id }: { id: string }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const { user }: {user: any } = UserAuth() as { user: any };
  const commentRef = doc(db, "Articles", id);
useEffect(() => {
    const articleRef = doc(db, "Articles", id);
    onSnapshot(articleRef, (snapshot) => {
        const data = snapshot.data();
        if (data) {
            setComments(data.comments);
        }
    });
}, []);

const handleChangeComment = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        updateDoc(commentRef, {
            comments: arrayUnion({
                userId: user.uid,
                userName: user.displayName,
                comment: comment,
                profilePic: user.photoURL,
                createdOn: Timestamp.now().toDate(),
                commentId: uuidv4(),
            }),
        }).then(() => {
            setComment("");
        });
    }
};

  // delete comment function
const handleDeleteComment = (comment: any) => {
    console.log(comment);
    updateDoc(commentRef, {
            comments:arrayRemove(comment),
    })
    .then((e) => {
            console.log(e);
    })
    .catch((error) => {
            console.log(error);
    })
};

function showComments(){
  if(!comments?.length){
    return "0 Comments"
  } else if(comments.length === 1){
    return "1 Comment"
  } else {
    return `${comments.length} Comments`
  }
}

console.log(user)
  return (
    <div className="">
      <p className="">{showComments()}</p>
      <div className="">
        {comments?.map(({ commentId, userId, comment, userName , createdOn, profilePic}) => (
            <div key={commentId}>
              <div className="flex flex-col bg-myblue-100 p-4 border-b border-mystone-300">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 justify-center items-center">
                    <img
                      src={profilePic}
                      alt="profile"
                      className="w-5 h-5" />
                    <p className="text-base text-mystone-400"> {userName}</p>    
                  </div> 
                 
                  <p className="text-xs text-mystone-400 italic">{createdOn.toDate().toDateString()} </p>     
                </div>
                <div>
                {comment}
                </div>  
                <div className="flex justify-end items-end">
                
                 {/* {user?.email==="yq.qualmann@gmail.com" && ( */}
                 
                  {(userId === user?.uid || user?.email==="yq.qualmann@gmail.com") && (
                    <p
                      className="text-sm self-end"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteComment({commentId, userId, comment, userName , createdOn, profilePic})}
                    >❌</p>
                   )} 
                </div>
              </div>
            </div>
          ))}
        {user ? (
          <input
            type="text"   
            className="border w-full p-3 mt-8 rounded-md"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            placeholder="Add a comment"
            onKeyUp={(e) => {
              handleChangeComment(e);
              }}
            required
          />
        ) : (
            <p className="text-mystone-400 text-right pt-4"><Link to="/login"><span className="underline text-myblue-400 text-2xl font-semibold">sign in</span> to share your thoughts. . .</Link></p>        
        )}
      </div>
    </div>
  );
}