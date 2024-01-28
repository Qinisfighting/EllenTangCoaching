
import { useState, ChangeEvent, FormEvent } from "react";
import { Timestamp,collection, addDoc } from "firebase/firestore"; 
import { storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



interface FormData {
    title: string;
    tags: string;
    image?: any;
    content: string;
    createdOn?: Date;
  }



export default function AddArticle(){
    const [formData, setFormData] = useState<FormData>({
        title: "",
        tags: "",
        image: "",
        content: "",
        createdOn: Timestamp.now().toDate(),
    });
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
                tags: "",
                image: "",
                content: "",
              });
      
              getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                const articleRef = collection(db, "Articles");
                addDoc(articleRef, {
                  title: formData.title,
                  catalog: formData.tags,
                  imageUrl: url,
                  createdOn: Timestamp.now().toDate(),
                  content: formData.content,
                })
                  .then(() => {
                    alert("Blog added successfully!")
                    setProgress(0);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              });
            }
          );


        
    }
    return (
        <div className="w-full  mx-auto text-center ">
            <h3 className="text-mystone-700 m-4 p-0 text-center">Add New Blog?</h3>
            <button className="btn-next">LOG IN</button>
            <form className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
                <label className="w-11/12 md:w-5/6 2xl:w-2/3 mx-auto">
                    <p className="text-left">Title</p>
                    <input  onFocus={(e) => (e.target.value = "")} 
                            onChange={(e)=>handleChange(e)}
                            className="w-full border rounded-md p-2" 
                            type="text" 
                            name="title"
                            value={formData.title} 
                            required
                            />
                </label>
                
                <label className="w-11/12 md:w-5/6 2xl:w-2/3 mx-auto">
                <div className="text-left text-xl py-2">Tags</div>       
                <select name="tags" className="w-full border rounded-md p-2"  value={formData.tags} onChange={(e)=>handleChange(e)}> 
                    <option value="Life">Life</option>
                    <option value="Relationships">Relationships</option>     
                    <option value="Family">Family</option>
                    <option value="Career">Career</option> 
                    <option value="Self">Self</option>
                    <option value="Other">Other</option>
                </select>
                </label>
            
                <label className="w-11/12 md:w-5/6 2xl:w-2/3 mx-auto">
                    <p className="text-left">Image</p>
                    <input 
                       onFocus={(e) => (e.target.value = "")}
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
                       onFocus={(e) => (e.target.value = "")}
                       onChange={(e)=>handleChange(e)}
                       className="w-full border rounded-md p-2" 
                       rows={10}  
                       value={formData.content}
                       name="content"/>
                       
                </label>
                
                <button className="w-11/12 md:w-5/6 2xl:w-2/3 btn-next">SUBMIT</button>
              
            </form>
            <div className="w-11/12 md:w-5/6 2xl:w-2/3 mb-5 h-6 rounded-full bg-mystone-200 my-8 mx-auto">
                    <div className="h-6 rounded-full bg-myblue-400"  style={{ width: `${progress}%` }}></div>
            </div>
            
            
        </div>
    )

}