

import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom"
import { getArticles } from '../../firebase';
import { Suspense } from "react"
import { Article } from "../../../types";
import EditArticle from './EditArticle';
import Loader from "../../components/Loader";
import DOMPurify from 'dompurify';
import { UserAuth } from '../../context/AuthContext';
import Comment from './Comment';
import Like from './Like';
// import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function loader( { params }: { params: any }) {
    return defer({ article: getArticles(params.id) })
}

export default function ArticleDetail() {
    const dataPromise = useLoaderData() as {article: Article}
    const location = useLocation()
    const search = location.state?.filter || ""   //optional chaining, same like const search = location.state && location.state.filter || ""
    const catalogLocation = location.state?.catalog || "All"
    const { user }: {user: any } = UserAuth() as { user: any };
  

    return (
    <div className="mt-8  md:mt-16">   
      <Suspense fallback={<Loader />}> 
         <Await resolve={dataPromise.article}>
          {({id, imageUrl, title, content, catalog, createdOn, likes}) => { 
            
            function createMarkup(html:any) {
                return {
                    __html: DOMPurify.sanitize(html)
                };
            }

            return (
                <div key={id} className="w-full md:w-2/3 xl:w-1/2 flex flex-col justify-center items-center gap-8 mx-auto p-8  h-auto">                                                  
                    <img src={imageUrl} className={`w-full md:px-0 object-cover ${user?.email==="ellen.ltang@gmail.com"?"px-8":"px-0"}`} />
                    
                    <div className="w-full h-fit flex flex-col items-center justify-between">
                        
                       <div className={`w-full  md:px-0 h-fit flex flex-col items-start justify-between ${user?.email==="ellen.ltang@gmail.com"?"px-8":"px-0"}`}> 
                       <Link to={`..${search}`}><div className='bg-myrouge-300 text-white w-fit h-fit px-3 border rounded-md text-lg'>⪡ {catalogLocation}</div></Link>
                            <h2>{title}</h2>
                            <p  className='m-0 text-sm text-mystone-400'>{createdOn.toDate().toDateString()}</p>  
                            <div className={`pt-10 ${user?.email==="ellen.ltang@gmail.com"?"pb-0":"pb-20"}`} dangerouslySetInnerHTML={createMarkup(JSON.parse(content))}></div>        
                       </div>  
                       <div  className={`md:px-0 w-full ${user?.email==="ellen.ltang@gmail.com"?"mb-5 mt-20 px-7":"mb-40"}`}>
                        <Like id={id} likes={likes}/>
                          <Comment id={id} />
                       </div>       
                        { 
                        user?.email==="ellen.ltang@gmail.com" && 
                        
                       <div className="">
                            <EditArticle imageUrl={imageUrl} catalog={catalog} title={title} content={content} id={id} />
                       </div> 
                        }            
                    </div>                                 
                </div>
               ) }
            }                          
        </Await>  
        </Suspense>          
</div>)
}