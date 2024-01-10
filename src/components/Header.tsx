
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
    color: "white"
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
        <img src={logo} alt="Logo" />
      </Link>
      <div ref={menuRef} className="menuDiv">
        <img
          
          alt="menu"
          className="menu"
          onClick={() => setIsMenu(true)}
        />   
      </div>
      <p className="menu-p">MENÜ</p>
      {isMenu ? (
        <div className="menuNav" ref={menuRef}>
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
            <div onClick={handleMenu}>FAHRSCHULE</div>
          </NavLink>

          <NavLink
            to="über"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={handleMenu}>ÜBER UNS</div>
          </NavLink>
          
          <NavLink
            to="informationen"
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
                  INFOS
                </summary>
                <div className="infos--dropdown" ref={dropdownRef}>
                <p>
                    <Link
                      to="informationen/allgemeines"
                      onClick={handleMenu}
                    >
                      Allgemeines
                    </Link>
                </p>
                <p>
                    <Link
                      to="informationen/fahrerlaubnisklassen"
                      onClick={handleMenu}
                    >
                      Fahrerlaubnisklassen
                    </Link>
                </p>
                <p>
                    <Link
                    to="informationen/theorie"
                    onClick={handleMenu}
                  >
                    Theorieunterricht
                    </Link>
                </p>
                <p>
                    <Link
                      to="informationen/ab17"
                      onClick={handleMenu}
                    >
                    Fahren ab 17
                    </Link> 
                </p>
                <p>
                    <Link
                      to="informationen/preise"
                      onClick={handleMenu}
                    >
                      Preise & Abrechnung
                  </Link> 
                </p>
                <p>
                    <Link
                      to="informationen/fragen"
                      onClick={handleMenu}
                    >
                      Fragen üben
                   </Link> 
                </p>  
                </div>
                        
              </details>
           
          </NavLink>

          <NavLink
            to="anmelden"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={handleMenu}>ANMELDEN</div>
          </NavLink>

          <NavLink
            to="kontakt"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={handleMenu}>KONTAKT</div>
          </NavLink>
          <NavLink
            to="links"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={handleMenu}>LINKS</div>
          </NavLink>
        </div>
      ) : (
        <nav>
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
            <div onClick={()=>setIsDropdown(false)}>FAHRSCHULE</div>
          </NavLink>

          <NavLink
            to="über"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={()=>setIsDropdown(false)}>ÜBER UNS</div>
          </NavLink>
          <NavLink
            to="informationen"
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
                  INFOS
                </summary>
                <div className="infos--dropdown" ref={dropdownRef}>
                <p>
                    <Link
                      to="informationen/allgemeines"
                    >
                      Allgemeines
                    </Link>
                </p>
                <p>
                    <Link
                      to="informationen/fahrerlaubnisklassen"
                    >
                      Fahrerlaubnisklassen
                    </Link>
                </p>
                <p>
                    <Link
                    to="informationen/theorie"
                  >
                    Theorieunterricht
                    </Link>
                </p>
                <p>
                    <Link
                      to="informationen/ab17"
                    >
                    Fahren ab 17
                    </Link> 
                </p>
                <p>
                    <Link
                      to="informationen/preise"
                    >
                      Preise & Abrechnung
                  </Link> 
                </p>
                <p>
                    <Link
                      to="informationen/fragen"
                    >
                      Fragen üben
                   </Link> 
                </p>  
                </div>
                        
              </details>
          </NavLink>

          <NavLink
            to="anmelden"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={()=>setIsDropdown(false)}>ANMELDEN</div>
          </NavLink>

          <NavLink
            to="kontakt"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={()=>setIsDropdown(false)}>KONTAKT</div>
          </NavLink>
          <NavLink
            to="links"
            style={({
              isActive,
              isPending
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive && !isPending ? activeStyles : pendingStyles)}
          >
            <div onClick={()=>setIsDropdown(false)}>LINKS</div>
          </NavLink>
        </nav>
      )}
    </header>
  );
}
