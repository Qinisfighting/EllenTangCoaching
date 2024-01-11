import { useState, useEffect } from "react";    
import { Link } from "react-router-dom";
import upArrow from "../assets/upArrow.png";


export default function Footer() {
    const [isTop, setIsTop] = useState<boolean>(false);
    console.log(isTop);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        window.scrollY > 300 ? setIsTop(true) : setIsTop(false);
      });
    }, []);
  
    function goTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  
    return (
      <footer className="">
        {isTop && (
          <img src={upArrow} className="w-8 z-20 fixed bottom-10 right-10 xl:right-17 xl:bottom-17 drop-shadow-lg hover:-translate-y-1" onClick={goTop} alt="toTop" />
        )}
        <div className="text-center flex justify-center items-center text-sm">
        
          <Link to="/privacy">
            <p className="pr-3">Privacy Policy</p>
          </Link>
          <Link to="/terms">
            <p className="px-3 border-x">Terms of Service</p>
          </Link>
          <Link to="/practice">
            <p className="pl-3">Practice Policy</p>
          </Link>
        </div>
  
        <a href="https://www.yanqin.de" target="_blank">
          <h4 className="text-center bg-curiousBlue-300 w-fit text-curiousBlue-100  mx-auto my-4 rounded-full py-0 px-4 drop-shadow-md hover:translate-x-1">2024 © QIN's code</h4>
        </a>
      </footer>
    );
  }
  