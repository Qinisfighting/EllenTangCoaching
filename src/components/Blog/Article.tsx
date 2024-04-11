/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */


import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom"
import { getArticles } from '../../firebase';
import { Suspense } from "react"
import { Article, User, Likes } from "../../../types";
import EditArticle from './EditArticle';
import Loader from "../../components/Loader";
import DOMPurify from 'dompurify';
import { UserAuth } from '../../context/AuthContext';
import Comment from './Comment';
import Like from './Like';

// import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function loader( { params }: { params: { id?: string } }) {
    return defer({ article: getArticles(params.id) })
}

export default function ArticleDetail() {
    const dataPromise = useLoaderData() as {article: Article}
    const location = useLocation()
    const search = (location.state as { filter?: string })?.filter || ""
    const catalogLocation = (location.state as { catalog?: string })?.catalog || "All"
    const { user }: {user: User } = UserAuth() as { user: User };
  

    return (
    <div className="mt-8  md:mt-16">   
      <Suspense fallback={<Loader />}> 
         <Await resolve={dataPromise.article}>
          {({id, imageUrl, title, content, catalog, createdOn, likes}) => { 
            
            function createMarkup(html:string) {
                return {
                    __html: DOMPurify.sanitize(html)
                };
            }

            return (
                <div key={id as string} className="w-full md:w-2/3 xl:w-1/2 flex flex-col justify-center items-center gap-8 mx-auto p-8  h-auto">
                    <img src={imageUrl as string} className={`w-full md:px-0 object-cover ${(user?.email ==="ellen.ltang@gmail.com") ? "px-8" : "px-0"}`} />
                    
                    <div className="w-full h-fit flex flex-col items-center justify-between">
                        
                    <div className={`w-full  md:px-0 h-fit flex flex-col items-start justify-between ${user?.email==="ellen.ltang@gmail.com"?"px-8":"px-0"}`}> 
                        <Link to={`..${search}`}><div className='bg-myrouge-300 text-white w-fit h-fit px-3 border rounded-md text-lg'>⪡ {catalogLocation}</div></Link>
                        <h2>{title}</h2>
                        <p  className='m-0 text-sm text-mystone-400'>{createdOn.toDate().toDateString()}</p>  
                        <div className={`pt-10 ${user?.email==="ellen.ltang@gmail.com"?"pb-0":"pb-20"}`} dangerouslySetInnerHTML={createMarkup(JSON.parse(content))}></div>        
                    </div>  
                    <div className={`md:px-0 w-full ${user?.email==="ellen.ltang@gmail.com"?"mb-5 mt-20 px-7":"mb-40"}`}>
                        <Like id={id as string} likes={likes as Likes[]} />
                        <Comment id={id as string} />
                    </div>
                        { 
                        user?.email==="ellen.ltang@gmail.com" && 
                        
                       <div className="">
                            <EditArticle imageUrl={imageUrl as string} catalog={catalog as string} title={title as string} content={content as string} id={id as string} />
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