import { BlogBanner } from "../components/Banners";
import thriveglobal from "../assets/thriveglobal.webp";
import outwittrade from "../assets/outwittrade.webp";
import godates from "../assets/godates.webp";
import upjourney from "../assets/upjourney.webp";

export default function Blog() {
    
    return (
      <div className="w-screen">
        <h1 className="text-mystone-700 mt-16 p-0 mb-0">Blog</h1>
        <BlogBanner />
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

      </div>
    );
  }
  