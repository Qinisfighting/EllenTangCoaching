
import { useState, ChangeEvent, FormEvent } from "react";
import { Timestamp } from "firebase/firestore"; 
// import { db } from "../firebase";





export default function AddArticle(){
    const [formData, setFormData] = useState({
        title: "",
        tags: "",
        image: "",
        content: "",
        createdOn: Timestamp.now().toDate(),
    });
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
      
        // const articleRef = collection(db, "Articles");
        // addDoc(articleRef, formData);
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
                Tags
                <select name="tags" className="w-full border rounded-md p-2"  value={formData.tags} onChange={(e)=>handleChange(e)}> 
                    <option value="Relationships">Relationships</option>     
                    <option value="Family">Family</option>
                    <option value="Career">Career</option>
                    <option value="Life">Life</option>
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
            <div className="w-11/12 md:w-5/6 2xl:w-2/3 mb-5 h-4 rounded-full bg-mystone-200 my-8 mx-auto">
                    <div className="h-4 rounded-full bg-myblue-400 w-1/2"></div>
            </div>
            
            
        </div>
    )

}