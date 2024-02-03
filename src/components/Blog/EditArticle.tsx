
import { useState, ChangeEvent, FormEvent } from "react";
import { Timestamp, doc, updateDoc } from "firebase/firestore"; 
import { storage, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FormData } from "../../../types";
import { useNavigate } from "react-router-dom";



export default function EditArticle({catalog, title, imageUrl, content, id}: { imageUrl: string, catalog:string, title:string, content:string, id:string}){
    const [formData, setFormData] = useState<FormData>({
        title: title,
        catalog: catalog,
        image: imageUrl,
        content: content,
        createdOn: Timestamp.now().toDate(),
    });
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        console.log(formData);
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement | any >) => {   
        setFormData((prev) => ({
            ...prev,
            image: e.target.files[0],
        }));
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
      
        const storageRef = ref(
            storage,
            `/images/${Date.now()}${formData.image.name}`
          );
        const imageBlob = new Blob([formData.image]);
        const uploadImage = uploadBytesResumable(storageRef, imageBlob);
        uploadImage.on(
            "state_changed",
            (snapshot) => {
              const progressPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progressPercent);
            },
            (err) => {
              console.log(err);
            },
            () => {
              setFormData({
                title: "",
                catalog: "",
                image: "",
                content: "",
              });
      
              getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                const articleRef = doc(db, "Articles", id);
                updateDoc(articleRef, {
                  title: formData.title,
                  catalog: formData.catalog,
                  imageUrl: url,
                  createdOn: Timestamp.now().toDate(),
                  content: formData.content,
                })
                  .then(() => {
                    alert("Your blog is updated!")
                    setProgress(0);   
                    navigate('/blog');
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              });
            }
          );


        
    }
    return (
      <div className='w-screen mx-auto px-4 md:px-20 my-20'>
        <h2 className="text-center my-10">Update Blog</h2>    
            <form className="mx-auto w-full xl:w-5/6 xl:px-8 flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
                <label className="w-11/12 md:w-5/6 2xl:w-2/3 mx-auto">
                    <p className="text-left">Title</p>
                    <input  onChange={(e)=>handleChange(e)}
                            className="w-full border rounded-md p-2" 
                            type="text" 
                            name="title"
                            value={formData.title} 
                            required
                            />
                </label>
                
                <label className="w-11/12 md:w-5/6 2xl:w-2/3 mx-auto">
                <div className="text-left text-lg py-2">Catalog</div>       
                <select name="tags" className="w-full border rounded-md p-2"  value={formData.catalog} onChange={(e)=>handleChange(e)}> 
                <option value="Family">Family</option>
                    <option value="Relationships">Relationships</option>        
                    <option value="Career">Career</option> 
                    <option value="Self">Self</option>
                    <option value="Life">Life</option>
                    <option value="Other">Other</option>         
                </select>
                </label>
            
                <label className="w-11/12 md:w-5/6 2xl:w-2/3 mx-auto">
                    <p className="text-left">Image</p>
                    <input                      
                       onChange={(e)=>handleImageChange(e)}
                       className="w-full border rounded-md p-2" 
                       type="file"
                       name="image"
                       accept="image/*" 
                      
                       />
                </label>
                <label className="w-11/12 md:w-5/6 2xl:w-2/3 mx-auto">
                    <p className="text-left">Content</p>
                    <textarea       
                       onChange={(e)=>handleChange(e)}
                       className="w-full border rounded-md p-2" 
                       rows={10}  
                       value={formData.content}
                       name="content"/>
                       
                </label>
                
                <button className="w-11/12 md:w-5/6 2xl:w-2/3 btn-next text-lg">Publish</button>
                <div className="w-11/12 md:w-5/6 2xl:w-2/3 rounded-full bg-mystone-100 my-8 mx-auto">
                    <div className="w-11/12 md:w-5/6 2xl:w-2/3 h-6 rounded-full bg-myrouge-200"  style={{ width: `${progress}%` }}></div>
                </div>
            </form>
            
            
            
        </div>
    )

}