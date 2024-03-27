import { useState } from "react";
import React from "react";
import ActionButton from "../../utils/button";
import { CartLink, LoginLink, LogoutLink } from "../../utils/linkButton";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [cartItems, setCartItems] = useState(1);

  const handleNav = () => {
    setNav(!nav);
  };
  const isLoggedIn = true;
  return (
    <>
      <nav className="fixed left-0 top-0 flex w-screen items-center justify-between p-5 shadow-xl ">
        <div className="flex w-12 items-center gap-4 rounded-full">
          <img src="logo.png" alt="logo" className="object-cover" />
          <h1 className="text-md md:text-xl lg:text-2xl">Trinkets inc.</h1>
        </div>
        <div className="hidden">
          <ul className="flex items-center gap-2">
            <li className="">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="flex items-end gap-2">
          <CartLink />
          {/* {isLoggedIn ? <LogoutLink /> : <LoginLink />} */}
          {nav ? (
            <ActionButton icon="menu" handleClick={handleNav} />
          ) : (
            <ActionButton icon="close" handleClick={handleNav} />
          )}
        </div>
        <div
          className={
            nav
              ? "absolute inset-0 z-10 h-screen w-2/5 bg-white shadow-xl"
              : "absolute left-[-1000px]"
          }
        >
          <div className="m-5 flex w-12 items-center gap-4 rounded-full">
            <img src="logo.png" alt="logo" className="" />
            <h1 className="text-md md:text-xl lg:text-2xl">Trinkets inc.</h1>
            <ActionButton icon="close" handleClick={handleNav} />
          </div>
          <ul className="">
            <li className="m-5 flex items-center gap-2 p-2">
              <a
                href=""
                className="flex items-center gap-2 transition-all delay-100 ease-in-out hover:pl-2"
              >
                <span className="material-icons-round"> home</span>
                Home
              </a>
            </li>
            <li className="m-5 flex items-center gap-2 p-2">
              <a
                href=""
                className="flex items-center gap-2 transition-all delay-100 ease-in-out hover:pl-2"
              >
                <span className="material-icons-round">storefront</span>
                Products
              </a>
            </li>
            <li className="m-5 flex items-center gap-2 p-2">
              <a
                href=""
                className="flex items-center gap-2 transition-all delay-100 ease-in-out hover:pl-2"
              >
                <span className="material-icons-round">more</span>
                About
              </a>
            </li>
            <li className="m-5 flex items-center gap-2 p-2">
              <a
                href=""
                className="flex items-center gap-2 transition-all delay-100 ease-in-out hover:pl-2"
              >
                <span className="material-icons-round">contact_page</span>
                Contacts
              </a>
            </li>
            {isLoggedIn ? (
              <li className="m-5 flex items-center gap-2 p-2">
                <a
                  href=""
                  className="flex items-center gap-2 transition-all delay-100 ease-in-out hover:pl-2"
                >
                  <span className="material-icons-round">logout</span>
                  Log Out
                </a>
              </li>
            ) : (
              <li className="m-5 flex items-center gap-2 p-2">
                <a
                  href="#"
                  className="flex items-center gap-2 transition-all delay-100 ease-in-out hover:pl-2"
                >
                  <span className="material-icons-round">login</span>
                  Log Out
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
