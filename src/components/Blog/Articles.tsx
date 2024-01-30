import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import edit from '../../assets/edit.png';
import trash_bin from '../../assets/trash_bin.png';

import { Timestamp, collection, onSnapshot, orderBy, query } from "firebase/firestore"; 
import { db } from "../../firebase";


interface Article {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    createdOn: Timestamp;
    catalog: string;
  }
  


export default function Articles(){
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLogged] = useState(true);

    useEffect(() => {
        const articleRef = collection(db, "Articles");
        const q = query(articleRef, orderBy("createdOn", "desc"));
        onSnapshot(q, (snapshot) => {
          const articles = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setArticles(articles as unknown as Article[]);
        //   console.log(articles);
        });
      }, []);
    return (
        <div className="w-screen">
            <div className='mx-auto px-6 py-16 text-center'>
               <h1 className="text-mystone-700 p-0">BLOG</h1>
               { isLogged && <Link to="/blog/add"><button className="text-6xl font-thin text-mystone-400">+</button></Link>}
            </div>
            
            <div className='mx-auto w-full flex flex-wrap gap-8 px-4 justify-evenly items-start'>
                { articles.length === 0 ? (
                    <p>No Articles Found</p>
                ):(articles.map (({
                                    id,
                                    title,
                                    content,
                                    imageUrl,
                                    createdOn,
                                    catalog,
                                }) => 
                                    <div key={id} className="w-11/12 lg:w-1/3 xl:w-1/4 flex flex-col justify-center items-start  lg:justify-start gap-8 mx-auto bg-mystone-200 p-8 mb-8 h-auto">
                                        <img src={imageUrl} className="h-48 w-full object-cover" />
                                        <div className="w-full h-72">
                                            <p className='bg-mystone-200 text-mystone-500 w-fit h-fit px-4 py-1 border rounded-md'>{catalog}</p>
                                            <h3>{title}</h3>
                                            <p  className='p-0 m-0 text-sm text-mystone-400'>{createdOn.toDate().toDateString()}</p>
                                            <p className=''>{content.slice(0,30)} ...</p> 
                                            <div className="flex justify-end items-end gap-4 mt-8">
                                              { isLogged && <Link to={`/blog/edit/${id}`}><img src={edit} className="w-8" /></Link>}
                                              { isLogged && <button><img src={trash_bin} className="w-8" /></button>}
                                            </div>  
                                        </div>
                                                       
                                    </div> 
                                
                                    
                                )
                                
                    )
                }
            </div>
            
            
        </div>
    )
    
 
 }