// import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteArticle from "./DeleteArticle";
import { Timestamp } from "firebase/firestore"; 
import EditArticle from './EditArticle';
// import { Timestamp, collection, onSnapshot, orderBy, query } from "firebase/firestore"; 
// import { db } from "../../firebase";


interface Article {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    createdOn: Timestamp;
    catalog: string;
}
  
interface ArticlesProps {
    articles: Article[];
    isLogged: boolean;
    clickedArticle?: Article | null;
    clickedTag?: Article | null;
    handleFilterTag?: (catalog:string) => void;
    handleClickedArticle?: (id:string) => void;
  }


export default function Articles({articles, isLogged, handleFilterTag, handleClickedArticle, clickedArticle, clickedTag}:ArticlesProps) {
   
    // const [articles, setArticles] = useState<Article[]>([]);
    // const [isLogged] = useState(false);
    // const [searchParams, setSearchParams] = useSearchParams()

    // const tagFilter = searchParams.get("catalog")

    // useEffect(() => {
    //     const articleRef = collection(db, "Articles");
    //     const q = query(articleRef, orderBy("createdOn", "desc"));
    //     onSnapshot(q, (snapshot) => {
    //       const articles = snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         ...doc.data(),
    //       }));
    //       setArticles(articles as unknown as Article[]);
    //     });
    // }, []);

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

    // function handleFilterTag({catalog}:{catalog:string}){
    //     const filteredArticles = articles.filter((article: Article)=>article.catalog===catalog);
    //     setArticles(filteredArticles);
    // } 

    // clickedArticle

    return (
        <div className="w-screen">
            <div className={`mx-auto px-6 pt-16 ${clickedArticle?"pb-0":"pb-10"} text-center`}>
               <h1 className="text-mystone-700 p-0">BLOG   { isLogged && <Link to="/blog/add"><button className="text-6xl font-thin text-mystone-400">+</button></Link>}</h1>
               {clickedArticle &&<button onClick={()=>window.location.reload()} className='btn-next text-4xl font-bold mt-4 rounded-full w-16 h-16'>↺</button>}
               {clickedTag && <button onClick={()=>window.location.reload()} className='btn-next text-4xl font-bold mt-4 rounded-full w-16 h-16'>↺</button>}
            </div>
            
            <div className='mx-auto w-full flex flex-wrap gap-8 px-4 justify-center items-start'>
                {articles.map (({
                                    id,
                                    title,
                                    content,
                                    imageUrl,
                                    createdOn,
                                    catalog,
                                }) => {
                                    return ( !clickedArticle ? 
                                        
                                    <div key={id} className="w-11/12 lg:w-1/3 xl:w-1/4 flex flex-col justify-center items-center gap-8 mx-auto bg-mystone-200 p-8 mb-10 h-auto">
                                                   
                                         <img src={imageUrl} className="h-48 w-full object-cover" />
                                         <div className={`w-full h-fit ${isLogged?"lg:h-72":"lg:h-52"} flex flex-col items-end justify-between`}>
                                           <div>
                                              {handleFilterTag && <button onClick={()=>handleFilterTag(catalog)} className='hover:text-white bg-mystone-200 text-mystone-700 w-fit h-fit px-3 border rounded-md text-lg'>{catalog}</button>}
                                            
                                              <h3>{title}</h3>
                                              <p  className='p-0 m-0 text-sm text-mystone-400'>{createdOn.toDate().toDateString()}</p>
                                              {/* <p className=''>{content.slice(0,35)} ... <Link to={`/blog/${id}`} className='text-mystone-700 text-4xl' >➫</Link></p> */}
                                              <p className=''>{content.slice(0,35)} ... <button onClick={() => handleClickedArticle && handleClickedArticle(id)} className='text-mystone-700 text-4xl' >➫</button></p>
                                          </div>
                                            { 
                                            isLogged && 
                                            <div className="flex justify-end items-center gap-4 py-4">
                                                <DeleteArticle id={id} imageUrl={imageUrl} />
                                            </div> 
                                           }  
                                      </div>                                 
                                </div>  
                                :  
                                <div key={id} className="w-full md:w-2/3 xl:w-1/2 flex flex-col justify-center items-center gap-8 mx-auto p-8  h-auto">
                                                   
                                <img src={imageUrl} className="w-full object-cover" />
                                <div className="w-full h-fit flex flex-col items-center justify-between">
                                  <div>       
                                     <h3>{title}</h3>
                                     <p  className='p-0 m-0 text-sm text-mystone-400'>{createdOn.toDate().toDateString()}</p>  
                                     <p className=''>{content}</p>
                                    
                                 </div>
                                 {clickedArticle &&<button onClick={()=>window.location.reload()} className='text-3xl mt-10 font-semibold p-2 underline text-myblue-400'>BACK</button>}
                                   { 
                                   isLogged && 
                                   <div className="">
                                       <EditArticle imageUrl={imageUrl} catalog={catalog} title={title} content={content} />
                                   </div> 
                                  }  
                                 
                             </div>                                 
                       </div>                  
                                )}
                                                 
                                                    )
                                                   }
            </div>
            
            
    </div>
    )
    } 
 
 