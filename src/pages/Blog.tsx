
import { BlogBanner } from "../components/Banners";
import thriveglobal from "../assets/thriveglobal.webp";
import outwittrade from "../assets/outwittrade.webp";
import godates from "../assets/godates.webp";
import upjourney from "../assets/upjourney.webp";
import { Suspense } from 'react';
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom';
import DeleteArticle from "../components/Blog/DeleteArticle";
import { getArticles } from '../firebase';
import { Article } from "../../types";
import Loader from "../components/Loader";
export function loader() {
   return defer({ articles: getArticles() })
}

const isHostLogged = JSON.parse(localStorage.getItem("isHostLogged")!) 

// const isHostLogged = true

function Articles() {
   const [searchParams, setSearchParams] = useSearchParams()
   const dataPromise = useLoaderData() as {articles: Article[]}
   const catalogFilter = searchParams.get("catalog")
   

   
 
   function renderArticles(articles: Article[]) {

       const displayedCatalog = catalogFilter
                   ? articles.filter(article => article.catalog === catalogFilter)
                   : articles
                   
               const articlesElements = displayedCatalog.map(({id, title, imageUrl, createdOn, catalog}) => {
                   
                   return (

                       <div key={id} className="w-11/12 lg:w-1/3 xl:w-1/4 flex flex-col justify-center items-center gap-8 mx-auto bg-mystone-200 p-8 mb-6 h-auto">
                        
                       <img src={imageUrl} className="h-48 w-full object-cover" />
                       <div className={`w-full h-fit ${isHostLogged?"lg:h-52":"lg:h-46"} flex flex-col items-start justify-between`}>
                         <div>
                          <div className='bg-mystone-200 text-mystone-700 w-fit h-fit px-3 border rounded-md text-lg'>{catalog}</div>
                          <div className="w-full flex justify-center items-center text-left gap-4">
                            <h3 className="w-full ">{title}</h3>
                            <Link to={id} state={{ filter: `/blog/?${searchParams.toString()}`, catalog: catalogFilter }}  className='text-mystone-700 text-4xl' >➫</Link>
                          </div>    
                          <p className='p-0 m-0 text-sm text-mystone-400'>{createdOn.toDate().toDateString()}</p>
                        </div>
                          { 
                          isHostLogged && 
                          <div className="mt-6 self-end">
                              <DeleteArticle id={id} imageUrl={imageUrl} />
                          </div> 
                         } 
                        
                    </div> 
                               
                </div>    
                )
               }) 


   return (
       <div className="w-screen">
          <div className="mx-auto px-6 pt-16 pb-10 text-center flex justify-center items-center gap-4">
               <h1 className="text-mystone-700 p-0">BLOG { isHostLogged && <Link to="/blog/add"><button className="text-5xl font-thin text-mystone-400">+</button></Link> }</h1>                 
          </div>
           
           <div className="mx-auto w-11/12 flex flex-wrap justify-center items-center gap-4  pt-6 pb-10">
                   <button className="btn-next"  onClick={() => setSearchParams({catalog: "Family"})}>Family</button>
                   <button className="btn-next"  onClick={() => setSearchParams({catalog: "Relationship"})}>Relationship</button>
                   <button className="btn-next"  onClick={() => setSearchParams({catalog: "Career"})}>Career</button>
                   <button className="btn-next"  onClick={() => setSearchParams({catalog: "Self"})}>Self</button>
                   <button className="btn-next"  onClick={() => setSearchParams({catalog: "Life"})}>Life</button>
                   <button className="btn-next"  onClick={() => setSearchParams({catalog: "Other"})}>Other</button>
                   { catalogFilter && <button className="bg-myrouge-300 text-white w-10 h-10 text-lg rounded-full ml-8" onClick={() => setSearchParams({})}>All</button> }
                   {/*or can wrap or replace the buttons here in/with <Link>, and e.g give path to="?type=simple" for switching filter, and to="." to clear filter, in this way setSearchParams will not be used*/}             
           </div> 
               

           <div className='mx-auto w-full flex flex-wrap gap-8 px-4 justify-center items-start'>       
                   {articlesElements}                                                          
           </div>               
     </div>
   )
}
   return (
       <div className="relative">
         <Suspense fallback= {<Loader />}> 
           <Await resolve={dataPromise.articles}>
              {renderArticles}                  
           </Await>  
         </Suspense>  
       </div>
   )
   } 




export default function Blog() {

   
    return (
      <div className="w-screen">   
        <Articles />
        <h2 className="w-11/12 xl:w-2/3 mx-auto px-4 text-center mt-24">Published Articles</h2>
        <div className="w-11/12 xl:w-2/3 mx-auto my-4 border-y mb-40">
          <div className="my-10 flex flex-col justify-start items-center lg:gap-16 lg:flex-row lg:justify-between">
             <img src={thriveglobal} className="w-3/4 lg:w-1/4 p-4" />
             <a className="text-myblue-400 underline w-11/12 lg:w-auto" href="https://community.thriveglobal.com/how-to-make-a-successful-career-change-by-leveraging-your-existing-skills-and-experiences/" target="_blank"><p>How To Make A Successful Career Change By Leveraging Your Existing Skills And Experiences</p></a>
          </div>
          <div className="my-10 flex flex-col justify-start items-center lg:gap-16 lg:flex-row lg:justify-between">
             <img src={outwittrade} className="w-3/4 lg:w-1/4 p-4" />
             <a className="text-myblue-400 underline w-11/12 lg:w-auto" href="https://outwittrade.com/how-to-deal-with-conflict-in-the-workplace/#ellen" target="_blank"><p>How To Deal With Conflict In The Workplace: Experts Comment</p></a>
          </div>
          <div className="my-10 flex flex-col justify-start items-center lg:gap-16 lg:flex-row lg:justify-between">
             <img src={upjourney} className="w-3/4 lg:w-1/4 p-4" />
             <a className="text-myblue-400 underline w-11/12 lg:w-auto" href="https://upjourney.com/how-to-help-a-friend-deal-with-a-breakup" target="_blank"><p>How to Help a Friend Deal With a Breakup</p></a>
          </div>
          <div className="my-10 flex flex-col justify-center items-center lg:gap-16 lg:flex-row lg:justify-between lg:items-start">
             <img src={godates} className="w-3/4 md:w-2/3 lg:w-1/4 p-4" />
             <div className="flex flex-col justify-center items-center lg:items-end gap-4">
                 <a className="text-myblue-400 underline w-11/12 lg:w-auto" href="https://www.godates.co/relationships/steps-to-codependency-recovery/" target="_blank"><p>12 Steps To Codependency Recovery</p></a>
                 <a className="text-myblue-400 underline w-11/12 lg:w-auto" href="https://www.godates.co/relationships/how-to-be-more-vulnerable-in-a-relationship/" target="_blank"><p>How To Be More Vulnerable In A Relationship: 7 Steps</p></a>
                 <a className="text-myblue-400 underline w-11/12 lg:w-auto" href="https://www.godates.co/life/how-to-forgive-yourself-for-cheating/" target="_blank"><p>How To Forgive Yourself For Cheating</p></a>
                 <a className="text-myblue-400 underline w-11/12 lg:w-auto" href="https://www.godates.co/heartbreak/how-to-cure-oneitis/" target="_blank"><p>How to Cure Oneitis: Things That Pickup Artists Won’t Tell You</p></a>
             </div>
             
          </div>
        </div>
          <BlogBanner />
      </div>
    );
  }
  