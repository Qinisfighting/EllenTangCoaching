import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import edit from '../../assets/edit.png';
import DeleteArticle from "./DeleteArticle";

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
    const [isLogged] = useState(false);
    // const [searchParams, setSearchParams] = useSearchParams()

    // const tagFilter = searchParams.get("catalog")

    useEffect(() => {
        const articleRef = collection(db, "Articles");
        const q = query(articleRef, orderBy("createdOn", "desc"));
        onSnapshot(q, (snapshot) => {
          const articles = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setArticles(articles as unknown as Article[]);
        });
    }, []);

    // function handleFilterChange(key:string, value:string | null) {
    //     setSearchParams(prevParams => {
    //         if (value === null) {
    //             prevParams.delete(key)
    //         } else {
    //             prevParams.set(key, value)
    //         }
    //         return prevParams
    //     })
    //     const filteredArticles = tagFilter ? articles.filter((article: Article) => article.catalog === tagFilter) : articles;
    //     setArticles(filteredArticles as unknown as Article[]);
        
    // }

    function handleFilterTag({catalog}:{catalog:string}){
        const filteredArticles = articles.filter((article: Article)=>article.catalog===catalog);
        setArticles(filteredArticles as unknown as Article[]);
    } 

    return (
        <div className="w-screen">
            <div className='mx-auto px-6 py-16 text-center'>
               <h1 className="text-mystone-700 p-0">BLOG</h1>
               { isLogged && <Link to="/blog/add"><button className="text-6xl font-thin text-mystone-400">+</button></Link>}
            </div>
            
            <div className='mx-auto w-full flex flex-wrap gap-8 px-4 justify-evenly items-start'>
                {articles.map (({
                                    id,
                                    title,
                                    content,
                                    imageUrl,
                                    createdOn,
                                    catalog,
                                }) => 
                                    <div key={id} className="w-11/12 lg:w-1/3 xl:w-1/4 flex flex-col justify-center items-center gap-8 mx-auto bg-mystone-200 p-8 mb-10 h-auto">
                                                   
                                            <img src={imageUrl} className="h-48 w-full object-cover" />
                                            <div className={`w-full h-fit ${isLogged?"lg:h-72":"lg:h-52"} flex flex-col items-and justify-between`}>
                                                <div>
                                                    <button onClick={() => handleFilterTag({catalog})} className='hover:text-white bg-mystone-200 text-mystone-700 w-fit h-fit px-3 border rounded-md text-lg'>{catalog}</button>
                                                    <h3>{title}</h3>
                                                    <p  className='p-0 m-0 text-sm text-mystone-400'>{createdOn.toDate().toDateString()}</p>
                                                    <p className=''>{content.slice(0,30)} ...... <Link to={`/blog/${id}`} className='text-3xl text-mystone-800'>➩</Link></p>
                                                </div>
                                                { 
                                                isLogged && 
                                                <div className="flex justify-end items-center gap-4 py-4">
                                                    <Link to={`/blog/edit/${id}`}><img src={edit} className="w-8" /></Link>
                                                    <DeleteArticle id={id} imageUrl={imageUrl} />
                                                </div> 
                                                }  
                                            </div>
                                             
                                    </div>         
                                
                    )
                }
            </div>
            
            
        </div>
    )
    } 
 
 