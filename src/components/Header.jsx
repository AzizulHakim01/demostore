import {
  faBars,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation()
  const active = (link) =>{
    return location.pathname === link
  }

  return (
    <div className={`flex w-full items-center bg-[#156290] h-24 ${location.pathname !== "/"? "":"absolute top-0 "} bg-opacity-75 `}>
      <nav className="w-full flex px-8 justify-between items-center">
        <div className="flex items-center gap-8">
          <Link to={"/"}><img src="/images/logo.png" alt="logo" className="w-40" /></Link>
          <ul
            className={`${
              showMenu
                ? "hidden"
                : "md:flex hidden md:flex-row flex-col items-center gap-4 text-white font-medium"
            }`}
          >
            <li>
              <Link to="/store" className={`uppercase ${active("/store")?"text-blue-600 font-bold":"text-white"}`}>
                everything
              </Link>
            </li>
            <li>
              <Link to="/women" className={`uppercase ${active("/women")?"text-blue-600 font-bold":"text-white"}`}>
                women
              </Link>
            </li>
            <li>
              <Link to="/men" className={`uppercase ${active("/men")?"text-blue-600 font-bold":"text-white"}`}>
                men
              </Link>
            </li>
            <li>
              <Link to="/accessories" className={`uppercase ${active("/accessories")?"text-blue-600 font-bold":"text-white"}`}>
                accessories
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-12">
          <ul
            className={`${
              showMenu
                ? "hidden"
                : "md:flex hidden  md:flex-row flex-col items-center gap-4 text-white font-medium"
            }`}
          >
            <li>
              <Link to={"/about"} className={`uppercase ${active("/about")?"text-blue-600 font-bold":"text-white"}`}>
                about
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className={`uppercase ${active("/contact")?"text-blue-600 font-bold":"text-white"}`}>
                contact us
              </Link>
            </li>
          </ul>
          <ul
            className={`${
              showMenu
                ? "hidden"
                : "md:flex hidden  md:flex-row flex-col items-center gap-4 text-white font-medium"
            }`}
          >
            <li>
              <Link to={"/cart"} className="uppercase">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#ffffff" }}
                />
                <span className="flex absolute -mt-10 ml-5">0</span>
              </Link>
            </li>
            <li>
              <span className="uppercase flex flex-col relative cursor-pointer">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#ffffff" }}
                  onClick={() => setShowLogin(!showLogin)}
                />
                {showLogin && (
                  <div
                    className={`absolute flex flex-col right-0 top-6 bg-white text-zinc-800 px-2 py-2 rounded-md gap-2`}
                  >
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/register"}>Register</Link>
                  </div>
                )}
              </span>
            </li>
          </ul>
        </div>

        {/* Cart Only for Mobile Devices */}

              <Link to={"/cart"} className="uppercase md:hidden text-2xl text-white -ms-24 relative left-0">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#ffffff" }}
                />
                <span className="absolute -top-6">0</span>
              </Link>

        {/* Nav bar tool */}

        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#ffffff" }}
          className="text-3xl md:hidden cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
        {/* Mobile navbar */}
        {
          showMenu
          &&
          <div className="md:hidden absolute top-20 left-0 z-50 flex items-center justify-between bg-[#5089ac] w-full px-8 py-4">
            
          <ul className="flex flex-col gap-3 font-semibold text-white">
            <li>
              <Link to="/everything" className="uppercase">
                everything
              </Link>
            </li>
            <li>
              <Link to="/women" className="uppercase">
                women
              </Link>
            </li>
            <li>
              <Link to="/men" className="uppercase">
                men
              </Link>
            </li>
            <li>
              <Link to="/accessories" className="uppercase">
                accessories
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 font-semibold text-white">
            <li>
              <Link to={"/about"} className="uppercase">
                about
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="uppercase">
                contact us
              </Link>
            </li>
            
            <li className="uppercase">
              Login
            </li>
            <li className="uppercase">
              Register
            </li>
            </ul>
        </div>
        }
      </nav>
    </div>
  );
};

export default Header;
