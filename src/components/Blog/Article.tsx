

import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom"
import { getArticles } from '../../firebase';
import { Suspense } from "react"
import { Article } from "../../../types";
import EditArticle from './EditArticle';
import Loader from "../../components/Loader";
// eslint-disable-next-line react-refresh/only-export-components
export function loader( { params }: { params: any }) {
    return defer({ article: getArticles(params.id) })
}// console.log(params): get the id (e.g 2) from the van which is clicked(Vans.jsx), output: {id: "2"}

export default function VanDetail() {
    const dataPromise = useLoaderData() as {article: Article}
    const location = useLocation()
    const search = location.state?.filter || ""   //optional chaining, same like const search = location.state && location.state.filter || ""
    const catalogLocation = location.state?.catalog || "All"
    const isHostLogged = JSON.parse(localStorage.getItem("isHostLogged")!) 

//  function handleClick() {
//     !isLoggedIn && alert("Please sign in first.")
//  } 

    return (
    <div className="mt-8  md:mt-16">   
      <Suspense fallback={<Loader />}> 
         <Await resolve={dataPromise.article}>
          {({id, imageUrl, title, content, catalog,createdOn }) => (
                <div key={id} className="w-full md:w-2/3 xl:w-1/2 flex flex-col justify-center items-center gap-8 mx-auto p-8  h-auto">                                                  
                    <img src={imageUrl} className="w-full px-8 md:px-0 object-cover" />
                    
                    <div className="w-full h-fit flex flex-col items-center justify-between">
                        
                       <div className="w-full px-8 md:px-0 h-fit flex flex-col items-start justify-between"> 
                       <Link to={`..${search}`}><div className='bg-myrouge-300 text-white w-fit h-fit px-3 border rounded-md text-lg'>⪡ {catalogLocation}</div></Link>
                            <h3>{title}</h3>
                            <p  className='p-0 m-0 text-sm text-mystone-400'>{createdOn.toDate().toDateString()}</p>  
                            <p className={!isHostLogged?"mb-20":"mb-0"}>{content}</p>        
                       </div>          
                        { 
                        isHostLogged && 
                       <div className="">
                            <EditArticle imageUrl={imageUrl} catalog={catalog} title={title} content={content} id={id} />
                       </div> 
                        }            
                    </div>                                 
                </div>
               )
            }                          
        </Await>  
        </Suspense>          
</div>)
}