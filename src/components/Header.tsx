
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png";

//import back from "../../src/assets/back.png"

interface ActiveStyles {
  borderRadius: string | number;
  boxShadow: string;
  backgroundColor: string;
  color: string;
}

interface PendingStyles {
  color: string;
}

export default function Header() {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeStyles: ActiveStyles = {
    borderRadius: 0,
    boxShadow: "1px 1px 2px gray",
    backgroundColor: "var(--rot)",
    color: "blue"
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



  function handleMenu() { 
    setIsMenu(false);
    setIsDropdown(false);

  }

   
  return (
    <header>
      <Link to="/" className="site-logo">
        <img src={logo} alt="Logo" className="w-3/4 mx-auto my-6 xl:w-1/2" />
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
            <div onClick={()=>setIsDropdown(false)}>Home</div>
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
                    >
                      My Story
                    </Link>
                </p>
                <p>
                    <Link
                      to="philosophy"
                    >
                      My Philosophy
                    </Link>
                </p>
                <p>
                    <Link
                    to="misson"
                  >
                    My Mission
                    </Link>
                </p>
                <p>
                    <Link
                      to="infp"
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
                    >
                      Service
                    </Link>
                </p>
                <p>
                    <Link
                      to="pricing"
                    >
                      Pricing
                    </Link>
                </p>
                <p>
                    <Link
                    to="booking"
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
                    >
                      关于我
                    </Link>
                </p>
                <p>
                    <Link
                      to="fuwu"
                    >
                      理念和服务
                    </Link>
                </p>
                <p>
                    <Link
                    to="yuyue"
                  >
                    价格和预约
                    </Link>
                </p>
                </div>
                        
              </details>
          </NavLink>

        </nav>
      )}
    </header>
  );
}
