import { HomeButtons_Hollow, HomeButtons_Solid } from "./HomeButtons";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutButton from "../pages/Authorization/Logout";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signup";
  const isPricing = location.pathname === "/pricing";
  const shouldDisplay = isHome || isAbout || isLogin || isSignup || isPricing;

  const [userData, setUserData] = useState(null);
  const [FullName, setFullname] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userEmail");
    const storedFullName = localStorage.getItem("userFullName");

    if (storedUserData !== null) {
      setUserData(storedUserData);
    }
    if (storedFullName !== null) {
      setFullname(storedFullName);
    }
  }, []); // Run only once on component mount

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 py-3 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {shouldDisplay && isAuthenticated ? (
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img src="/SplitStay.png" className="h-10" alt="SplitStay Logo" /> */}
            <h2 className=" font-medium text-2xl lg:text-4xl">SplitStay</h2>
          </Link>
        ) : (
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img src="/SplitStay.png" className="h-10" alt="SplitStay Logo" /> */}
            <h2 className=" font-medium text-2xl lg:text-4xl">SplitStay</h2>
          </Link>
        )}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {shouldDisplay && !isAuthenticated ? (
            <div className="md:flex gap-5 hidden">
              {/* <Link to={"/login"} onClick={closeNavbar}>
                <HomeButtons_Hollow
                  className="py-3 px-10"
                  onClick={() => console.log("Signup clicked")}
                >
                  Login
                </HomeButtons_Hollow>
              </Link>
              <Link to={"/signup"} onClick={closeNavbar}>
                <HomeButtons_Solid
                  className="py-3 px-10"
                  onClick={() => console.log("Login clicked")}
                >
                  Signup
                </HomeButtons_Solid>
              </Link> */}
            </div>
          ) : (
            <div className="md:flex items-center gap-5 hidden">
              {/* <Link className="text-4xl">
                <img src="/search.png"></img>
              </Link>
              <Link className="text-4xl">
                <img src="/bell.png"></img>
              </Link> */}
              <Link className="flex items-end gap-4">
                <img src="/userimg.png"></img>
                <div>
                  <h4 className="font-bold">{FullName}</h4>
                  <h5>{userData}</h5>
                </div>
              </Link>
              <LogoutButton />
            </div>
          )}
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded={isNavbarOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isNavbarOpen ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          {shouldDisplay && !isAuthenticated ? (
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                  onClick={closeNavbar}
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#works"
                  className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 cursor-pointer md:p-0 "
                  onClick={closeNavbar}
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  onClick={closeNavbar}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  onClick={closeNavbar}
                >
                  FAQ
                </a>
              </li>
              {isNavbarOpen ? (
                <div className="flex gap-5">
                  {/* <Link to={"/login"} onClick={closeNavbar}>
                    <HomeButtons_Solid
                      className="border-0 ml-2"
                      onClick={() => console.log("Signup clicked")}
                    >
                      Login
                    </HomeButtons_Solid>
                  </Link> */}
                  {/* <Link to={"/signup"}>
                    <HomeButtons_Solid
                      className="py-3 px-10"
                      onClick={() => console.log("Login clicked")}
                    >
                      Signup
                    </HomeButtons_Solid>
                  </Link> */}
                </div>
              ) : (
                <div className="hidden"></div>
              )}
            </ul>
          ) : (
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  to="/experiences"
                  className="block py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                  onClick={closeNavbar}
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  onClick={closeNavbar}
                >
                  Chats
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  onClick={closeNavbar}
                >
                  Travellers
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/pricing"
                  className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  onClick={closeNavbar}
                >
                  Users
                </Link>
              </li> */}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
