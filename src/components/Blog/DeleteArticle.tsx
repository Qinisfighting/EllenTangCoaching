import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../../firebase";
import trash_bin from '../../assets/trash_bin.png';
import { useNavigate } from "react-router-dom";

export default function DeleteArticle({ id, imageUrl }: { id: string, imageUrl: string }) {
    const navigate = useNavigate();
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
          try {
            await deleteDoc(doc(db, "Articles", id));
            const storageRef = ref(storage, imageUrl);
            await deleteObject(storageRef);
            alert("The blog has been deleted successfully.");
            navigate('/blog');
          } catch (error) {
            console.log(error);
          }
        }
      };
      return (
        <div className="">
          <button><img src={trash_bin} className="w-8" onClick={handleDelete} /></button>
        </div>
      );
    }

