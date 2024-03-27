import React from "react";

const LoginLink = () => {
  return (
    <a href="#" className="flex items-center justify-between gap-2 border p-4">
      <span class="material-icons-round">login</span>
      Login
    </a>
  );
};

const LogoutLink = () => {
  return (
    <a
      href="#"
      className="ease flex items-center justify-between gap-1 rounded border bg-fuchsia-500 p-2 transition delay-150 duration-300 hover:scale-110 hover:bg-fuchsia-700"
    >
      <span class="material-icons-round ease transition delay-300 hover:translate-x-1">
        logout
      </span>
      <span className="hidden text-sm md:inline-block">Logout</span>
    </a>
  );
};

const CartLink = () => {
  return (
    <a
      href="#"
      className="ease flex items-center justify-between gap-1 rounded border bg-fuchsia-500 p-2 transition delay-150 duration-300 hover:scale-110 hover:bg-fuchsia-700"
    >
      <span className="material-icons-round ease hover:translate-1 md:animation-none hover:animation-none focus:animation-none transition delay-300 duration-300">
        shopping_bag
      </span>
      <span className="hidden text-sm md:inline-block">Cart</span>
    </a>
  );
};

export { LoginLink, LogoutLink, CartLink };
