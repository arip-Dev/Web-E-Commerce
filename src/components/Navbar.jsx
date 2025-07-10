import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation, useMatch } from "react-router-dom";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isPageproduct = useMatch("/Pageproduct/:id") || location.pathname === "/Shoppage";
  const isContactPage = ["/Aboutus", "/Contactpage"].includes(location.pathname);
  const isDark = isPageproduct || isContactPage;
  const iconColor = isDark ? "text-white" : "text-black";

  return (
    <>
      <nav
        className={`flex justify-between items-center px-4 py-3 w-full z-50 ${
          isDark ? "bg-gray-800 text-white" : "absolute bg-[#FBEBB5] text-black"
        }`}
      >
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">daisyUI</a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-lg">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/Shoppage" className="hover:underline">Shop</Link></li>
          <li><Link to="/Aboutus" className="hover:underline">About</Link></li>
          <li><Link to="/Contactpage" className="hover:underline">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 text-xl">
          <FontAwesomeIcon icon={faUser} className={iconColor} />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={iconColor} />
          <FontAwesomeIcon icon={faHeart} className={iconColor} />
          <FontAwesomeIcon icon={faCartShopping} className={iconColor} />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-4 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} className={iconColor} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xl font-bold text-black">Menu</span>
          <button onClick={() => setSidebarOpen(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-black text-xl" />
          </button>
        </div>
        <ul className="flex flex-col p-4 gap-4 text-black text-lg">
          <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/Shoppage" onClick={() => setSidebarOpen(false)}>Shop</Link></li>
          <li><Link to="/Aboutus" onClick={() => setSidebarOpen(false)}>About</Link></li>
          <li><Link to="/Contactpage" onClick={() => setSidebarOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
