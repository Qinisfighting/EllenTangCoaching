import { useState, useEffect } from 'react';

import { Timestamp, collection, onSnapshot, orderBy, query } from "firebase/firestore"; 
import { db } from "../firebase";


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
            <h1 className="text-mystone-700 mt-16 p-0 mb-16">Blog</h1>
            <div className='flex flex-col justify-center items-start'>
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
                                    <div key={id} className="flex flex-col justify-center items-start lg:flex-row lg:justify-start gap-8 w-11/12 md:w-5/6 2xl:w-2/3 mx-auto bg-mystone-200 p-8 mb-8 h-auto">
                                        <img src={imageUrl} className="lg:w-1/2 2xl:w-1/3 object-cover" />
                                        <div>
                                            <p className='bg-mystone-200 text-mystone-500 w-fit h-fit px-4 py-1 border rounded-md'>{catalog}</p>
                                            <h3>{title}</h3>
                                            <p  className='p-0 m-0 text-sm text-mystone-400'>{createdOn.toDate().toDateString()}</p>
                                            <p>{content}</p> 
                                        </div>              
                                    </div> 
                                
                                    
                                )
                                
                    )
                }
            </div>
            
            
        </div>
    )
    
 
 }