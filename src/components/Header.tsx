
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png";

//import back from "../../src/assets/back.png"

interface ActiveStyles {

  fontSize?: string;
  fontWeight?: string;
  
  
}

interface PendingStyles {
  color: string;
}

export default function Header() {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [clickedContent, setClickedContent] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeStyles: ActiveStyles = {
  
    
    fontSize: "1.12em",
    fontWeight: "600",
   
    
  };
  const pendingStyles: PendingStyles = {
    color: "var(--textColor)"
  };

// when mouse click outside of menu(dropdown), close menu(dropdown).

  useEffect(() => {
    const menuHandler = (e: MouseEvent) => {
      if (
        menuRef.current != null &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsMenu(false);
        //  console.log(menuRef.current);
      }
    };

    const dropdownHhandler = (e: MouseEvent) => {
      if (
        dropdownRef.current != null &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdown(false);
      }
    };

    document.addEventListener("mousedown", menuHandler);
    document.addEventListener("mousedown", dropdownHhandler);

    return;
    () => {
      document.removeEventListener("mousedown", menuHandler);
      document.removeEventListener("mousedown", dropdownHhandler);
    };
  });

  // function handleNavi(e:any){
  //   const text = e.target.textContent;
  //   setClickedContent(text);
  //   setIsDropdown(!isDropdown)
    
  // }
  // console.log(clickedContent);
  
  function handleMenu() { 
    setIsMenu(false);
    setIsDropdown(false);
  }

   
  return (
    <header>
      <Link to="/" className="site-logo">
        <img src={logo} alt="Logo" className="w-11/12 md:w-3/4 xl:w-1/2 mx-auto my-6 " />
      </Link>
      <div ref={menuRef} className="md:hidden">
        <img   
          alt="menu"
          className="menu"
          onClick={() => setIsMenu(true)}
        />   
      </div>
      <p className="md:hidden">MENÜ</p>
      {isMenu ? (
        <div className="md:hidden z-10 absolute" ref={menuRef}>
          <div>
            <img
              className="closeMenu"
              onClick={() => setIsMenu(false)}
              
              alt="back"
            />
          </div>
          <NavLink
            to="/"
            end
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={handleMenu}>Home</div>
          </NavLink>
          
          <NavLink
            to="story"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <details open={isDropdown} onClick={() => setIsDropdown(!isDropdown)}>
                <summary>
                  About Me
                </summary>
                <div className="flex flex-col" ref={dropdownRef}>
                <p>
                    <Link
                      to="story"
                      onClick={handleMenu}
                    >
                      My Story
                    </Link>
                </p>
                <p>
                    <Link
                      to="philosophy"
                      onClick={handleMenu}
                    >
                      My Philosophy
                    </Link>
                </p>
                <p>
                    <Link
                    to="misson"
                    onClick={handleMenu}
                  >
                    My Mission
                    </Link>
                </p>
                <p>
                    <Link
                      to="infp"
                      onClick={handleMenu}
                    >
                    Me as an INFP
                    </Link> 
                </p>
                </div>
                        
              </details>
          </NavLink>
          <NavLink
            to="service"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <details open={isDropdown} onClick={() => setIsDropdown(!isDropdown)}>
                <summary>
                  Work With Me
                </summary>
                <div className="infos--dropdown" ref={dropdownRef}>
                <p>
                    <Link
                      to="service"
                      onClick={handleMenu}
                    >
                      Service
                    </Link>
                </p>
                <p>
                    <Link
                      to="pricing"
                      onClick={handleMenu}
                    >
                      Pricing
                    </Link>
                </p>
                <p>
                    <Link
                    to="booking"
                    onClick={handleMenu}
                  >
                    Book Appointment
                    </Link>
                </p>
                </div>
                        
              </details>
          </NavLink>

          <NavLink
            to="blog"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={handleMenu}>Blog</div>
          </NavLink>
          <NavLink
            to="faq"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={handleMenu}>FAQ</div>
          </NavLink>
          <NavLink
            to="contact"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={handleMenu}>Contact</div>
          </NavLink>
          <NavLink
            to="wo"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <details lang="zh-CN" open={isDropdown} onClick={() => setIsDropdown(!isDropdown)}>
                <summary>
                  中文心理咨询
                </summary>
                <div className="infos--dropdown" ref={dropdownRef}>
                <p>
                    <Link
                      to="wo"
                      onClick={handleMenu}
                    >
                      关于我
                    </Link>
                </p>
                <p>
                    <Link
                      to="fuwu"
                      onClick={handleMenu}
                    >
                      理念和服务
                    </Link>
                </p>
                <p>
                    <Link
                    to="yuyue"
                    onClick={handleMenu}
                  >
                    价格和预约
                    </Link>
                </p>
                </div>
                        
              </details>
          </NavLink>
        </div>
      ) : (
        <nav className="hidden md:flex xl:w-1/2 w-3/4 justify-between items-center mx-auto">
          <NavLink
            to="/"
            end
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div>Home</div>
          </NavLink>

          <NavLink
            to="about"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div  onClick={() => setIsDropdown(!isDropdown)}  className="relative">
            <div className="flex flex-row justify-center items-center">
                <button onClick={(e) => setClickedContent((e.target as HTMLElement).innerHTML)}>
                  About Me
                </button>
                <svg className={`fill-current opacity-75 w-6 h-6 pt-1 ${isDropdown && clickedContent === "About Me"?"rotate-90":"null"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg> 
             </div> 
                {
                  isDropdown && clickedContent === "About Me" && (
                    <div ref={dropdownRef} className="flex flex-col absolute z-10 bg-curiousBlue-300 w-max font-normal text-md text-white my-1 shadow-lg">
                <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link
                      to="about"
                    >
                      My Story
                    </Link>
                </p>
                <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link
                      to="about/philosophy"
                    >
                      My Philosophy
                    </Link>
                </p>
                <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link
                    to="about/misson"
                  >
                    My Mission
                    </Link>
                </p>
                <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link
                      to="about/infp"
                    >
                    Me as an INFP
                    </Link> 
                </p>
                </div>)
                }
                
                        
              </div>
          </NavLink>
          <NavLink
            to="work"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div  onClick={() => setIsDropdown(!isDropdown)}  className="relative">
              <div className="flex flex-row justify-center items-center">
               <button onClick={(e) => setClickedContent((e.target as HTMLElement).innerHTML)}>
                  Work With Me      
                </button>
                <svg className={`fill-current opacity-75 w-6 h-6 pt-1 ${isDropdown && clickedContent === "Work With Me"?"rotate-90":"null"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>    
                </div>
                {
                  isDropdown && clickedContent === "Work With Me" && (
                    <div ref={dropdownRef} className="flex flex-col absolute z-10 bg-curiousBlue-300 w-max font-normal text-md text-white my-1 shadow-lg"> 
           
                <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link
                      to="work"
                    >
                      Service
                    </Link>
                </p>
                <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link
                      to="work/pricing"
                    >
                      Pricing
                    </Link>
                </p>
                <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link
                    to="work/booking"
                  >
                    Book Appointment
                    </Link>
                </p>
                </div>
              )}
              </div>
          </NavLink>

          <NavLink
            to="blog"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={()=>setIsDropdown(false)}>Blog</div>
          </NavLink>
          <NavLink
            to="faq"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={()=>setIsDropdown(false)}>FAQ</div>
          </NavLink>
          <NavLink
            to="contact"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={()=>setIsDropdown(false)}>Contact</div>
          </NavLink>
          <NavLink
            to="cn"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div  lang="zh-CN" onClick={() => setIsDropdown(!isDropdown)}  className="relative">
             <div className="flex flex-row justify-center items-center">
                <button onClick={(e) => setClickedContent((e.target as HTMLElement).innerHTML)}>
                  中文心理咨询
                </button>
                <svg className={`fill-current opacity-75 w-6 h-6 pt-1 ${isDropdown && clickedContent === "中文心理咨询"?"rotate-90":"null"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                </div>
                {
                  isDropdown && clickedContent === "中文心理咨询" && (
                    <div ref={dropdownRef} className="flex flex-col absolute z-10 bg-curiousBlue-300 w-max font-normal text-base text-white my-1 shadow-lg">
                <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link
                      to="cn"
                    >
                      关于我
                    </Link>
                </p>
                <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link
                      to="cn/fuwu"
                    >
                      理念和服务
                    </Link>
                </p>
                <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link
                    to="cn/yuyue"
                  >
                    价格和预约
                    </Link>
                </p>
                </div>
                )}        
              </div>
          </NavLink>

        </nav>
      )}
    </header>
  );
}