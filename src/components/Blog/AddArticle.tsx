
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore"; 
import { storage, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { FormData } from "../../../types";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Remove the unused import statement for 'draftToHtml'

export default function AddArticle(){
    
    const [editorState, setEditorState] = useState(
      () => EditorState.createEmpty(),
    );
    const [convertedContent, setConvertedContent] = useState<string | null>(null);

    useEffect(() => {
      const rawContentState = convertToRaw(editorState.getCurrentContent());
      let html = draftToHtml(rawContentState);
      setConvertedContent(html);
      setFormData((prev) => ({
        ...prev,
        content: JSON.stringify(convertedContent),
    }));
    console.log(formData);
    }, [editorState]);

  


    // console.log(convertedContent);
    const [formData, setFormData] = useState<FormData>({
      title: "",
      catalog: "",
      image: "",
      content: "", 
      createdOn: Timestamp.now().toDate(),
    });

    const isHostLogged = JSON.parse(localStorage.getItem("isHostLogged")!) 
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    
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
                const articleRef = collection(db, "Articles");
                addDoc(articleRef, {
                  title: formData.title,
                  catalog: formData.catalog,
                  imageUrl: url,
                  createdOn: Timestamp.now().toDate(),
                  content: formData.content,
                })
                  .then(() => {
                    alert("Your new blog is online!")
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
      isHostLogged ?
      <div className='w-screen mx-auto px-4 md:px-20 my-20'>
        <h2 className="text-center my-10">New Blog</h2>    
            <form className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
                <label className="w-11/12 md:w-5/6 2xl:w-2/3 mx-auto">
                    <p className="text-left">Title</p>
                    <input  onChange={(e)=>handleChange(e)}
                            className="w-full border rounded-md p-2" 
                            type="text" 
                            name="title"
                            value={formData.title} 
                            required
                            onFocus={(e)=>e.target.value=""}
                            />
                </label>
                
                <label className="w-11/12 md:w-5/6 2xl:w-2/3 mx-auto">
                <div className="text-left text-lg py-2">Catalog</div>       
                <select name="catalog" className="w-full border rounded-md p-2"  value={formData.catalog} onChange={(e)=>handleChange(e)} required> 
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
                       required
                      
                       />
                </label>
                <label className="w-11/12 md:w-5/6 2xl:w-2/3 mx-auto">
                    <p className="text-left">Content</p>
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={setEditorState}
                        wrapperStyle={{ marginBottom: "2em",fontSize: "calc(10px + 1.5vmin)"}}
                        editorStyle={{padding:"10px 20px", border: "1px solid gray", borderRadius: "0.3em", height:200}}
                        toolbarStyle={{border: "1px solid gray", borderRadius: "0.3em",}}
                    />
                    {/* <textarea 
                       onChange={(e)=>handleChange(e)}
                       className="w-full border rounded-md p-2" 
                       rows={10}  
                       value={formData.content}
                       name="content"/> */}
                       
                </label>
                
                <button className="w-11/12 md:w-5/6 2xl:w-2/3 btn-next text-lg">Publish</button>
              
            </form>
            <div className="w-11/12 md:w-5/6 2xl:w-2/3 mb-5 h-6 rounded-full bg-mystone-100 my-8 mx-auto">
                    <div className="h-6 rounded-full bg-myrouge-200"  style={{ width: `${progress}%` }}></div>
            </div>
            
            
        </div>
        :
        <div className="w-screen h-view pt-60 pb-60 flex justify-center items-center">
            <h1 className="text-4xl">Please log in as host</h1>
        </div>
    )

}