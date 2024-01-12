
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png";


interface ActiveStyles {
  fontSize?: string;
  fontWeight?: string;
  textShadow?: string;
  color?: string;
}

interface PendingStyles {
  color: string;
}

export default function Header() {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [clickedContent, setClickedContent] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeStyles: ActiveStyles = {
    fontSize: "1.15em",
    fontWeight: "600",
    textShadow: ".7px .7px .7px lightgray",
    color:"#266ea3"
  };
  const pendingStyles: PendingStyles = {
    color: "#1e405c"
  };

  // when mouse click outside of dropdown, close dropdown.

  useEffect(() => {
    const dropdownHandler = (e: MouseEvent) => {
      if (
        dropdownRef.current != null &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdown(false);
      }
    };

   

    document.addEventListener("mousedown", dropdownHandler);


    return;
    () => {
      document.removeEventListener("mousedown", dropdownHandler);

    };
  });

  function handleMenu() {
    setIsMenu(false);
    setIsDropdown(false);
  }

  return (
    <header>
      <Link to="/" className="site-logo">
        <img
          src={logo}
          alt="Logo"
          className="w-11/12 md:w-3/4 xl:w-1/2 mx-auto my-6 "
        />
      </Link>
      <div className="md:hidden flex justify-center items-center">
        <button
          className="max-w-1/4 mx-auto my-2 bg-curiousBlue-300 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:bg-curiousBlue-400 transition duration-300 ease-in-out"
          onClick={() => setIsMenu(!isMenu)}
        >
          {" "}
          {isMenu ? "CLOSE ▲" : "MENU ▼"}
        </button>
      </div>

      {isMenu ? (
        <div
          className="flex flex-col absolute mx-auto my-4 z-10  w-full bg-curiousBlue-100 text-lg font-medium text-curiousBlue-800 p-4 gap-4"
         
        >
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
            to="about"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div
              onClick={() => setIsDropdown(!isDropdown)}
              className="relative"
            >
              <div className="flex justify-start items-center ">
                <button
                  onClick={(e) =>
                    setClickedContent((e.target as HTMLElement).innerHTML)
                  }
                >
                  About Me
                </button>
                <svg
                  className={`fill-current opacity-75 w-6 h-6 pt-1 ${
                    isDropdown && clickedContent === "About Me"
                      ? "rotate-90"
                      : "null"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
              {isDropdown && clickedContent === "About Me" && (
                <div
                  ref={dropdownRef}
                  className="flex flex-col  float-center z-10 bg-curiousBlue-300 w-full font-normal text-md text-white my-1 shadow-lg"
                >
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="about" onClick={handleMenu}>
                      My Story
                    </Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="about/philosophy" onClick={handleMenu}>
                      My Philosophy
                    </Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="about/misson" onClick={handleMenu}>
                      My Mission
                    </Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="about/infp">Me as an INFP</Link>
                  </p>
                </div>
              )}
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
            <div
              onClick={() => setIsDropdown(!isDropdown)}
              className="relative"
            >
              <div className="flex justify-start items-center">
                <button
                  onClick={(e) =>
                    setClickedContent((e.target as HTMLElement).innerHTML)
                  }
                >
                  Work With Me
                </button>
                <svg
                  className={`fill-current opacity-75 w-6 h-6 pt-1 ${
                    isDropdown && clickedContent === "Work With Me"
                      ? "rotate-90"
                      : "null"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
              {isDropdown && clickedContent === "Work With Me" && (
                <div
                  ref={dropdownRef}
                  className="flex flex-col  float-center z-10 bg-curiousBlue-300 w-full font-normal text-md text-white my-1 shadow-lg"
                >
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="work" onClick={handleMenu}>
                      Service
                    </Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="work/pricing" onClick={handleMenu}>
                      Pricing
                    </Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="work/booking" onClick={handleMenu}>
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
            to="cn"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div
              lang="zh-CN"
              onClick={() => setIsDropdown(!isDropdown)}
              className="relative"
            >
              <div className="flex flex-row justify-start items-center">
                <button
                  onClick={(e) =>
                    setClickedContent((e.target as HTMLElement).innerHTML)
                  }
                >
                  中文心理咨询
                </button>
                <svg
                  className={`fill-current opacity-75 w-6 h-6 pt-1 ${
                    isDropdown && clickedContent === "中文心理咨询"
                      ? "rotate-90"
                      : "null"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
              {isDropdown && clickedContent === "中文心理咨询" && (
                <div
                  ref={dropdownRef}
                  className="flex flex-col  float-center z-10 bg-curiousBlue-300 w-full font-normal text-md text-white my-1 shadow-lg"
                >
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="cn" onClick={handleMenu}>
                      关于我
                    </Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="cn/fuwu" onClick={handleMenu}>
                      理念和服务
                    </Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="cn/yuyue" onClick={handleMenu}>
                      价格和预约
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </NavLink>
        </div>
      ) : (
        <nav className="hidden md:flex xl:w-1/2 w-3/4 justify-between items-center mx-auto font-medium text-curiousBlue-900">
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
            <div className="hover:text-curiousBlue-400">Home</div>
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
            <div
              onClick={() => setIsDropdown(!isDropdown)}
              className="relative"
            >
              <div className="flex flex-row justify-center items-center hover:text-curiousBlue-400">
                <button
                  onClick={(e) =>
                    setClickedContent((e.target as HTMLElement).innerHTML)
                  }
                  
                >
                  About Me
                </button>
                <svg
                  className={`fill-current opacity-75 w-6 h-6 pt-1 ${
                    isDropdown && clickedContent === "About Me"
                      ? "rotate-90"
                      : "null"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
              {isDropdown && clickedContent === "About Me" && (
                <div
                  ref={dropdownRef}
                  className="flex flex-col absolute z-10 bg-curiousBlue-300 w-max font-normal text-md text-white my-1 shadow-lg"
                >
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="about">My Story</Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="about/philosophy">My Philosophy</Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="about/misson">My Mission</Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="about/infp">Me as an INFP</Link>
                  </p>
                </div>
              )}
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
            <div
              onClick={() => setIsDropdown(!isDropdown)}
              className="relative"
            >
              <div className="flex flex-row justify-center items-center hover:text-curiousBlue-400">
                <button
                  onClick={(e) =>
                    setClickedContent((e.target as HTMLElement).innerHTML)
                  }
                  
                >
                  Work With Me
                </button>
                <svg
                  className={`fill-current opacity-75 w-6 h-6 pt-1 ${
                    isDropdown && clickedContent === "Work With Me"
                      ? "rotate-90"
                      : "null"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
              {isDropdown && clickedContent === "Work With Me" && (
                <div
                  ref={dropdownRef}
                  className="flex flex-col absolute z-10 bg-curiousBlue-300 w-max font-normal text-md text-white my-1 shadow-lg"
                >
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="work">Service</Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="work/pricing">Pricing</Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="work/booking">Book Appointment</Link>
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
            <div onClick={() => setIsDropdown(false)} className="hover:text-curiousBlue-400">Blog</div>
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
            <div onClick={() => setIsDropdown(false)} className="hover:text-curiousBlue-400">FAQ</div>
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
            <div onClick={() => setIsDropdown(false)} className="hover:text-curiousBlue-400">Contact</div>
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
            <div
              lang="zh-CN"
              onClick={() => setIsDropdown(!isDropdown)}
              className="relative"
            >
              <div className="flex flex-row justify-center items-center hover:text-curiousBlue-400">
                <button
                  onClick={(e) =>
                    setClickedContent((e.target as HTMLElement).innerHTML)
                  }
                >
                  中文心理咨询
                </button>
                <svg
                  className={`fill-current opacity-75 w-6 h-6 pt-1 ${
                    isDropdown && clickedContent === "中文心理咨询"
                      ? "rotate-90"
                      : "null"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
              {isDropdown && clickedContent === "中文心理咨询" && (
                <div
                  ref={dropdownRef}
                  className="flex flex-col absolute z-10 bg-curiousBlue-300 w-max font-normal text-base text-white my-1 shadow-lg"
                >
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="cn">关于我</Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="cn/fuwu">理念和服务</Link>
                  </p>
                  <p className="hover:bg-curiousBlue-400 w-full px-3 py-2">
                    <Link to="cn/yuyue">价格和预约</Link>
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
