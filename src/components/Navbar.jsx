import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useLocation, useMatch } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const isPageproduct = useMatch("/Pageproduct/:id") || location.pathname === "/Shoppage";

    const isContactPage = ["/Aboutus", "/Contactpage"].includes(
    location.pathname
  );
  // const isContactPage = location.pathname === "/Aboutus";

  return (
    <div
      className={`flex justify-between items-center p-0 min-h-12 bg-color1 text-black w-full
    ${isPageproduct ? "bg-gray-100 dark:bg-gray-800 text-white" : "absolute"}
    ${isContactPage ? "bg-gray-100 dark:bg-gray-800 text-white" : ""}`}
    >
      <div className="ml-5">
        <a className="text-3xl">daisyUI</a>
      </div>

      <div className="ml-18 flex items-center">
        <ul className="flex text-lg">
          <li className="justify-center flex ml-20">
            <Link to="/">Home</Link>
          </li>
          <li className="justify-center flex ml-20">
            <Link to="/Shoppage">Shop</Link>
          </li>
          <li className="justify-center flex ml-20">
            <Link to="/Aboutus">About</Link>
          </li>
          <li className="justify-center flex ml-20">
            <Link to="/Contactpage">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="text-xl">
        <ul className="mr-16">
          <a href="" className="mr-8">
            <FontAwesomeIcon
              icon={faUser}
              className={
                isPageproduct || isContactPage ? " text-white" : "text-black"
              }
            />
          </a>
          <a href="" className="mr-8">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={
                isPageproduct || isContactPage ? "text-white" : "text-black"
              }
            />
          </a>
          <a href="" className="mr-8">
            <FontAwesomeIcon
              icon={faHeart}
              className={
                isPageproduct || isContactPage ? "text-white" : "text-black"
              }
            />
          </a>
          <a href="" className="">
            <FontAwesomeIcon
              icon={faCartShopping}
              className={
                isPageproduct || isContactPage ? "text-white" : "text-black"
              }
            />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
