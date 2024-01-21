
import { Link } from "react-router-dom";
import { ServiceBanner } from "../../components/Banners";
import fullfill from "../../assets/fullfill.webp";

export default function Service() { 
  return (
    <div className="w-full">
        <h1 className="text-myblue-400 border-y w-4/5 my-12 md:w-1/3 md:my-20 mx-auto">My Service</h1>
        <div className="w-full mx-auto flex flex-col justify-evenly items-center lg:flex-row">           
           <ul className="list-disc p-8 text-left order-2 lg:order-1">
              <p className="text-xl text-left font-semibold">I offer the following coaching services:</p>
              <li className="ml-10 py-1">Personal life coaching</li>
              <li className="ml-10 py-1">Professional life coaching</li>
              <li className="ml-10 py-1">Confidence coaching</li>
              <li className="ml-10 py-1">Self-esteem coaching</li>
              <li className="ml-10 py-1">Emotional intelligence coaching</li>
              <li className="ml-10 py-1">Depression coaching</li>
              <li className="ml-10 py-1">Money mindset coaching</li>
              <li className="ml-10 py-1">Career development coaching</li>
              <li className="ml-10 py-1">Career change coaching</li>
              <li className="ml-10 py-1">Self-awareness coaching</li>
              <li className="ml-10 py-1">Relationship coaching</li>
           </ul>
           <img src={fullfill} className="order-1 lg:order-2 w-3/5 lg:w-1/3"></img>        
        </div>
        <div  className="w-5/6 mx-auto lg:mb-10 pb-4">  
           <p className="text-xl">50 mins per session. Appointments outside these hours may be available. Please <Link to="/contact" className="underline text-myblue-400">contact me</Link> directly. Online appointments are available on Skype, Zoom or over the phone. Face-to-face appointments are available in London (UK).</p>
           <p className="text-xl">The relationship between you and me is key to the effectiveness of life coaching. So before you invest for the long term, you can take advantage of the  <Link to="/work/booking" className="underline text-myblue-400">discovery session</Link> to find out more about me.</p>
           <p className="text-xl">See <Link to="/work/pricing" className="underline text-myblue-400">Pricing</Link> and <Link to="/faq" className="underline text-myblue-400">FAQ</Link> pages for more details.</p>
           <Link to="/work/booking"><button className="btn-next float-right my-12 lg:my-16 text-md ">Book Your Discovery Session ➣</button></Link>
        </div>
           
        <div className="w-5/6  mx-auto flex flex-col gap-10 mb-20 justify-center items-center xl:flex-row xl:justify-between xl:items-start ">
           <div className="w-full xl:w-1/3">
              <h2 className="text-3xl text-center">Career</h2>
              <h3 className="text-2xl">Unsure as to where to take your career next? I want to help!</h3>
              <p>Whether consciously or not, many of us express our needs through our career. It is also where we often find a sense of power and purpose. However, if growing up you haven’t been encouraged to express yourself in an authentic way, you may struggle with finding the career path that speaks to your soul. Sometimes, even a path that has felt enjoyable and rewarding for many years can start feeling all wrong. Even though everyone is telling you how good you are at your job, somehow the sense of accomplishment just seems so far away.</p>
              <p>So, how does one move from a job to a vocation?</p>
              <p>To find what is authentic to your soul, you ought to know your soul first. If you have been taught to follow someone else’s dream path, however, even the word ‘soul’ may seem foreign to you. If easier, think of it as your unconscious, your inner child, or your gut. It contains the deepest of your desires. The most powerful of your resources. And the most enlightening of your wisdoms.</p>
              <p className="font-semibold">How I can help:</p>
              <ul className="list-disc list-inside">
                  <li><span className="font-semibold">Deep listening – </span>I listen to what you say and hear what you really want to tell the world (through me). I apply my psychodynamic understanding in a pragmatic way which helps you gain deeper insights into who you are and what you need from a career.</li>
                  <li><span className="font-semibold">Playful exploration – </span>Following your passion should be fun! I take your ideas and interests seriously and support you in all that you wish to explore. ‘Learning through play’ is definitely not just for children.</li>
                  <li><span className="font-semibold">Free expression – </span>The immense power of freely expressing your true desires cannot be overestimated. Here, ‘free’ applies to both the content of your words and the manner in which you say them. Profound realisations often arise when hidden feelings are voiced in an uninhibited way.</li>
                  <li><span className="font-semibold">Purposeful partnering – </span>I look to build a partnership with you where you can safely test out ideas, examine relational dynamics, and raise self-awareness. The purpose is to provide an empowering force that enables you to activate your own inner resources.</li>
              </ul>
           </div>
           <div className="w-full xl:w-1/3">
              <h2 className="text-3xl text-center">Money</h2>
              <h3 className="text-2xl">Wanting to create and keep financial abundance in your life? I can help you cultivate an investment mindset.</h3>
              <p>Money isn’t everything. But not having enough money is like a toothache – it becomes all that you can think about. To live a financially abundant life means freeing up emotional and intellectual resources for higher levels of fulfilment.</p>
              <p>My experience has taught me that living life as an investor is so powerful and expansive that I would never wish to return to the life of a ‘spender’ or a ‘saver.’ The shift of a mindset is what underlies shifts of all other aspects of life. Viewing life from the perspective of an investor, you become:</p>
               <ul className="list-disc list-inside">
                     <li><span className="font-semibold">Bolder – </span>an investor seeks opportunities to grow and expand.</li>
                     <li><span className="font-semibold">Smarter – </span>an investor takes pleasure in educating themselves and in making well-informed decisions.</li>
                     <li><span className="font-semibold">Freer – </span>good investment decisions require careful consideration of many factors. An investor enters each opportunity being as conscious as possible of all such factors.</li>
                     <li><span className="font-semibold">More conscious – </span>More confident in your ability to create wealth</li>
                     <li><span className="font-semibold">More self-aware – </span>investing is a psychological game as much as a financial game. Knowing who you are and where your strengths and vulnerabilities lie is key to making good investment decisions. An investor takes time to understand themselves and reflect on past gains and losses.</li>
               </ul>
           </div>
           <div className="w-full xl:w-1/3">
              <h2 className="text-3xl text-center">Relationships</h2>
              <h3 className="text-2xl">Wondering how you can improve your relationships? I may be able to help you find some answers.</h3>
              <p>Relationships often provide the best opportunities for self-discovery and growth, if you allow them to. Although uncomfortable at times, conflicts within a relationship highlight what is really important to you and therefore can really help you gain valuable knowledge about yourself. If you can find a safe environment to explore and examine those inbuilt values, there is much to be gained from such conflicts.</p>
              <p>Intimacy can be the scariest thing sometimes, especially when you have been hurt before. And when two persons’ wounds clash without them being conscious of those wounds, they often end up arguing about seemingly trivial matters that exhaust both of them with much confusion and intensity.</p>
              <p>Having experienced much of my own relationship struggles and learned from them, I hope to help you gain the insight and strength that you need to relate consciously with others. Whether it is your spouse or a co-worker, every relationship offers opportunities for self-exploration, especially through occasional conflicts and discomfort.</p>
              <p>Relating more consciously through higher self-awareness will help you:</p>
              <ul className="list-disc list-inside text-left">
                    <li>Increase self-esteem.</li>
                    <li>Heal from past trauma.</li>
                    <li>Deal with conflicts graciously.</li>
                    <li>Be assertive without aggression.</li>
                    <li>Avoid co-dependency.</li>
              </ul>
           </div>
        </div>
        <ServiceBanner/>
    </div>
  );
}
