import { useState } from "react";
import React from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [cartItems, setCartItems] = useState(1);

  const handleNav = () => {
    setNav(!nav);
  };
  const isLoggedIn = true;
  return (
    <>
      <nav className="z-20 flex w-screen items-center justify-between p-5 shadow-xl ">
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
          <button>Cart</button>
          <div className="hidden lg:block">
            {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
          </div>
          {nav ? (
            <button onClick={handleNav}>X</button>
          ) : (
            <button onClick={handleNav}>=</button>
          )}
        </div>
        <div
          className={
            nav
              ? "absolute inset-0 z-10 h-screen w-2/5 bg-white shadow-xl"
              : "absolute left-[-1000px]"
          }
        >
          <div className="m-5 flex items-center justify-between rounded-full">
            <div className="flex items-center gap-2">
              <img src="logo.png" alt="logo" className="w-12" />
              <h1 className="text-md md:text-xl lg:text-2xl">Trinkets inc.</h1>
            </div>
            <button onClick={handleNav}>X</button>
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
