import { Link } from "react-router-dom";
import homebanner from "../assets/homebanner.jpg";
import storybanner from "../assets/storybanner.jpg";
import philobanner from "../assets/philobanner.jpg";
import servicebanner from "../assets/servicebanner.jpg";
import pricingbanner from "../assets/pricingbanner.jpg";
import faqbanner from "../assets/faqbanner.jpg";

 function HomeBanner(){
    return (      
        <div  className="xl:relative my-24 text-mystone-100">
        <img className="brightness-50 w-full" src={homebanner} />  
            <div className=" text-left xl:absolute  flex flex-col xl:flex-row bottom-0 right-0 top-0 left-0 mx-auto justify-center items-start xl:items-center gap-4 bg-myblue-700 xl:bg-opacity-0">
                <div className="w-full px-8 xl:w-1/4 border-b-2 border-dotted border-b-mystone-400 pb-8 border-white xl:border-none">
                  <h1 className="text-left text-3xl md:text-4xl font-semibold">Ellen Tang</h1>
                  <p className="text-xl  text-left">Life coach, therapist, thought partner, artist, investor, auditor, law graduate, astronomy enthusiast</p>
                  <Link to="/about"><button className="btn-trans my-6">More About Me ➣</button></Link>
                </div>
                <div className="w-full px-8 xl:w-1/4 border-b-2 border-dotted border-b-mystone-500 pb-8 border-white xl:border-none">
                  <h1 className="text-left text-3xl md:text-4xl font-semibold">Partnering with</h1>
                  <p className="text-xl  text-left">Personal Growth from <a className="underline text-white" href="https://www.selfgrowth.com/" target="_blank">SelfGrowth.com</a></p>
                  <p className="text-xl"><a className="underline text-white" href="https://www.bodymindspiritdirectory.org/" target="_blank">Mind Body Spirit Directory</a></p>
                  <Link to="/work"><button className="btn-trans my-6">About My Work ➣</button></Link>
                </div>
                <div className="w-full px-8 xl:w-1/4 border-b-2 border-dotted border-b-mystone-500 pb-8 border-white xl:border-none">
                  <h1 className="text-left text-3xl md:text-4xl font-semibold">Contact & Hours</h1>
                  <p className="text-xl  text-left"><a className="text-white" href="https://www.google.com/maps/place/Greenwich,+London,+Vereinigtes+K%C3%B6nigreich/@51.487395,-0.0366549,13z/data=!3m1!4b1!4m6!3m5!1s0x47d8a9cea79975f3:0x1470a7a162e4ca6c!8m2!3d51.4933675!4d0.0098214!16zL20vMG5xdjE?entry=ttu" target="_blank">📍Greenwich, London, United Kingdom</a></p>
                  <p className="text-lg pl-1">☏: (UK) +44 7753137614 / (US) +1 917-982-2022</p>
                  <p className="text-lg">🕒 Mon – Fri: 17:00 – 20:00 (UK)</p>
                  <p className="text-lg">🕒 Sat – Sun: 10:00 – 18:00 (UK)</p>
                  <Link to="/work/booking"><button className="btn-trans my-6">Schedule Appointment ➣</button></Link>
                </div>            
            </div>
    </div>
    )
}

function StoryBanner(){
    return (       
        <div  className="xl:relative my-24 text-mystone-100">
        <img className="brightness-50 w-full" src={storybanner} />  
            <div className="text-center xl:absolute  flex flex-col bottom-0 right-0 top-0 left-0 mx-auto justify-center items-center xl:gap:16  bg-myblue-700 xl:bg-opacity-0">             
                  <h1 className="text-2xl lg:text-5xl xl:my-16 font-semibold">Want to tell me your story?</h1>             
                  <Link to="/work/booking"><button className="btn-trans mb-12">Schedule Appointment ➣</button></Link>                  
            </div>
    </div>
    )
}

function PhiloBanner(){
    return (      
        <div  className="xl:relative my-24 text-mystone-100">
        <img className="brightness-50 w-full" src={philobanner} />  
            <div className="text-center xl:absolute  flex flex-col bottom-0 right-0 top-0 left-0 mx-auto justify-center items-center xl:gap:16  bg-myblue-700 xl:bg-opacity-0">             
                  <h1 className="text-2xl lg:text-5xl xl:my-16 font-semibold">Let’s start the journey together.</h1>             
                  <Link to="/work/booking"><button className="btn-trans mb-12">Schedule Appointment ➣</button></Link>                  
            </div>
    </div>
    )
}


function ServiceBanner(){
    return (      
        <div  className="xl:relative my-24 text-mystone-100">
        <img className="brightness-50 w-full" src={servicebanner} />  
            <div className="text-center xl:absolute  flex flex-col bottom-0 right-0 top-0 left-0 mx-auto justify-center items-center xl:gap:16  bg-myblue-700 xl:bg-opacity-0">             
                  <h1 className="text-2xl px-4 lg:text-5xl xl:my-16 font-semibold">"What I am is good enough if only I would be it openly." </h1>             
                  <Link to="/work/booking"><button className="btn-trans mb-12">Schedule Appointment ➣</button></Link>                  
            </div>
    </div>
    )
}

function PricingBanner(){
    return (      
        <div  className="xl:relative my-24 text-mystone-100">
        <img className="brightness-50 w-full" src={pricingbanner} />  
            <div className="text-center xl:absolute  flex flex-col bottom-0 right-0 top-0 left-0 mx-auto justify-center items-center xl:gap:16  bg-myblue-700 xl:bg-opacity-0">             
                  <h1 className="text-2xl lg:text-5xl xl:my-16 font-semibold">Book your discovery session today.</h1>             
                  <Link to="/work/booking"><button className="btn-trans mb-12">Schedule Appointment ➣</button></Link>                  
            </div>
    </div>
    )
}


function FaqBanner(){
    return (      
        <div  className="xl:relative my-24 text-mystone-100">
        <img className="brightness-50 w-full" src={faqbanner} />  
            <div className="text-center xl:absolute  flex flex-col bottom-0 right-0 top-0 left-0 mx-auto justify-center items-center xl:gap:16  bg-myblue-700 xl:bg-opacity-0">             
                  <h1 className="text-2xl px-4 lg:text-5xl xl:my-16 font-semibold">Success is easy, once you find the motivation.</h1>             
                  <Link to="/work/booking"><button className="btn-trans mb-12">Schedule Appointment ➣</button></Link>                  
            </div>
    </div>
    )
}

export { HomeBanner, StoryBanner, PhiloBanner, ServiceBanner, PricingBanner, FaqBanner }