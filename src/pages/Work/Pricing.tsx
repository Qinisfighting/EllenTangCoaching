import pricing from '../../assets/pricing.webp'
import { PricingBanner } from "../../components/Banners";
import { Link } from "react-router-dom";

export default function Pricing() {
    
    return (
      <div className="w-full">
        <h1 className="text-myblue-400 border-y w-4/5 my-12 lg:w-1/3 lg:my-20 mx-auto">Pricing</h1>
        <div className='mx-auto my-10 gap-10 lg:mb-24 flex flex-col lg:gap-20 lg:flex-row justify-center items-center'>
            <img className="w-2/3 lg:w-1/4 rounded-full" src={pricing}/>
            <div className='w-5/6 lg:w-1/2 flex flex-col justify-center items-center lg:block'>
              <h2 className='text-center lg:text-justify text-xl lg:text-2xl xl:text-3xl md:leading-relaxed  xl:leading-loose'>Invest in a partner who wholeheartedly supports and commits to your journey towards a happier, more fulfilling life.</h2>
              <Link to="/work/booking">
              <button className='flex btn-next mt-10 lg:float-right lg:mt-15'>Book Your Discovery Session ➣</button>
              </Link>
            </div>
        </div>
        <div className=" w-5/6  mx-auto flex flex-col gap-10 mb-20 justify-center items-center lg:flex-row lg:justify-between lg:items-start ">
           <div className="w-full lg:w-1/2">
              <h2 className="text-3xl text-center">Pay Per Session</h2>
              <h3 className="text-2xl">Individuals</h3>
              <p>Each session takes 50 minutes. We explore the areas that you want to focus on during this time. But my commitment to you does not stop there. You may call or email me between sessions if you need to. Reasonable time spent on such communications will not be charged for. If longer or more frequent communication is required between sessions, charges will apply on a pro rata basis.</p>
              <br/>
              <div className=''>
                <div className='flex flex-col justify:center items:start lg:flex-row lg:justify-between lg:items-center bg-mystone-100 px-4'>
                  <p>Per session (phone/online):</p>
                  <p className='italic'>GBP 100 / USD 135 / EUR 125</p>
                </div>
                <div className='flex flex-col justify:center items:start lg:flex-row lg:justify-between lg:items-center bg-myblue-100 px-4'>
                  <p>Per session (face-to-face):</p>
                  <p className='italic'>GBP 110*</p>
                </div>
                <p className='border border-myblue-100 text-xs px-4'>*Includes venue hiring fee.(Sessions can be paid at the time of booking or invoiced at the end of the month.)</p>
                <br/>
              
              <h3 className="text-2xl">Sessions For Two</h3>
              <p>For any two individuals who wish to work on their relationship together, be it between couples, parent/child (aged 18+), business partners, etc, I offer relationship coaching at the specified prices. Each session takes 50 minutes.</p>
              <br/>
              <div className=''>
                <div className='flex flex-col justify:center items:start lg:flex-row lg:justify-between lg:items-center bg-mystone-100 px-4'>
                  <p>Per session (phone/online):</p>
                  <p className='italic'>GBP 130 / USD 170 / EUR 160</p>
                </div>
                <div className='flex flex-col justify:center items:start lg:flex-row lg:justify-between lg:items-center bg-myblue-100 px-4'>
                  <p>Per session (face-to-face):</p>
                  <p className='italic'>GBP 150*</p>
                </div>
                <p className='border border-myblue-100 text-xs px-4'>*Includes venue hiring fee.(Sessions can be paid at the time of booking or invoiced at the end of the month.)</p>         
              </div> 
           </div>                      
        </div>
        <div className="w-full lg:w-1/2">
              <h2 className="text-3xl text-center lg:mb-16">Monthly Package</h2>    
              <p>As with individual sessions, we explore the areas that you want to focus on during our regular times, but my commitment to you does not stop there. In addition to the weekly sessions (50 minutes each), this option includes five complex emails* between sessions and two hours’ worth of additional phone calls per month.</p>
              <p className='text-xs'>*Emails that take me more than 15 minutes to respond to.</p>
              <br/>
              <div className=''>
                <div className='flex flex-col justify:center items:start lg:flex-row lg:justify-between lg:items-center bg-mystone-100 px-4'>
                  <p>Per month (phone/online):</p>
                  <p className='italic'>£500 / $700</p>
                </div>
                <div className='flex flex-col justify:center items:start lg:flex-row lg:justify-between lg:items-center bg-myblue-100 px-4'>
                  <p>Per month (face-to-face):</p>
                  <p className='italic'>£600*</p>
                </div>
                <p className='border border-myblue-100 text-xs px-4'>*Includes venue hiring fee.(Sessions can be paid at the time of booking or invoiced at the end of the month.)</p>         
          </div>                     
        </div>
           
        </div>
      <PricingBanner/>  
      </div>
    );
  }
  