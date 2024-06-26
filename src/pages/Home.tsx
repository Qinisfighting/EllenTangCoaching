import { Link } from "react-router-dom";
import ellen from "../assets/ellen.webp";
import { HomeBanner } from "../components/Banners";


export default function Home() {
    return (
      <div className="">
        <div className="flex flex-col px-4 w-11/12 md:w-4/5 mx-auto my-16 lg:flex-row gap-8 justify-between text-myblue-800">
          <img src={ellen} alt="me" className="w-full h-auto lg:w-1/3 object-cover shadow-lg"/>
          <div className="flex flex-col justify-between items-end gap-16 lg:w-2/3">
          <div className="socializer a sr-32px sr-circle sr-opacity sr-icon-white sr-pad"><span className="sr-facebook"><a href="https://www.facebook.com/ellentangcoaching" target="_blank" rel="noreferrer" title="Facebook"><i className="fab fa-facebook-f"></i></a></span><span className="sr-youtube"><a href="https://www.youtube.com/channel/UCj60CsEEzE_WdepPNLjtR1A" target="_blank" rel="noreferrer" title="Youtube"><i className="fab fa-youtube"></i></a></span><span className="sr-linkedin"><a href="https://www.linkedin.com/in/ellenltang/" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a></span></div> 
              <div className="text-center">
                <p>Hi, I&apos;m Ellen, Welcome to my coaching practice.</p>
                <p>I believe that the more people are living a fulfilled life, the better place our world will be. Because when we affirm our authentic selves in the world, we feel less need to cause pain to others and ourselves.</p>
                <p>I collaborate with individuals all over the world who are on their paths towards self-discovery, growth, and fulfilment. Together, we will co-create an environment where unconditional acceptance of ourselves is the norm, because it is only then can we clear our clouded visions and explore freely what a fulfilled life looks like for each one of us as unique individuals.</p>
                <p>I cannot wait to start this thrilling journey with you.</p>
              </div>
              <Link to="/about"><button className="btn-next">More About Me ➣</button></Link>
          </div>
        </div>      
        <HomeBanner />
      </div>    
    );
  }
  