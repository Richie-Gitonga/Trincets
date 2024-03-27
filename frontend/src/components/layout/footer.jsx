import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-[100vh] w-full bg-slate-900 px-8 py-12 text-white">
        <div>
          <div className="mx-auto">
            <div className="mx-auto mb-4 flex w-fit items-center gap-4">
              <img src="logo.png" alt="logo" className="w-10 object-cover" />
              <h2 className="text-md md:text-xl lg:text-2xl">Trinkets inc.</h2>
            </div>
            <p className="leading-relaxed tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              in at odio minus culpa magni ipsam doloremque harum nam! Earum
              expedita dicta pariatur sed itaque sint cupiditate magnam
              molestiae et.
            </p>
          </div>

          <div className="w-full py-8">
            <h2 className="mb-2 text-center text-2xl font-extrabold tracking-wider text-black md:text-3xl lg:text-4xl">
              Site Maps
            </h2>
            <ul className="text-center md:grid md:grid-cols-2 lg:grid-cols-3">
              <h3 className="text-l lg:3xl text-xl font-bold text-black md:text-2xl">
                Company Details
              </h3>
              <li className="py-1.5 transition-all delay-100 ease-in-out hover:scale-125">
                <a href="">Company</a>
              </li>
              <li className="py-1.5 transition-all delay-100 ease-in-out hover:scale-125">
                <a href="">About</a>
              </li>
              <li className="py-1.5 transition-all delay-100 ease-in-out hover:scale-125">
                <a href="">Mobile App</a>
              </li>
              <h3 className="text-l lg:3xl my-2 text-xl font-bold text-black md:text-2xl">
                Who We work with
              </h3>
              <li className="py-1.5 transition-all delay-100 ease-in-out hover:scale-125">
                <a href="">Suppliers</a>
              </li>
              <li className="py-1.5 transition-all delay-100 ease-in-out hover:scale-125">
                <a href="">Partnership</a>
              </li>
              <li className="py-1.5 transition-all delay-100 ease-in-out hover:scale-125">
                <a href="">Regions</a>
              </li>
              <h3 className="text-l lg:3xl my-2 text-xl font-bold text-black md:text-2xl">
                Services
              </h3>
              <li className="py-1.5 transition-all delay-100 ease-in-out hover:scale-125">
                <a href="">Products</a>
              </li>
              <li className="py-1.5 transition-all delay-100 ease-in-out hover:scale-125">
                <a href="">Services</a>
              </li>
              <li className="py-1.5 transition-all delay-100 ease-in-out hover:scale-125">
                <a href="">Delivery</a>
              </li>
            </ul>
            <div>
              {/* <Login />
              <SignUp /> */}
            </div>
          </div>
        </div>
        <div>
          <div className="my-4 text-center">Ritchie &copy; copyrights</div>
          <div className="w-full md:flex md:items-center md:justify-between">
            <p>Connect with us via social media using the following links:</p>
            <ul className="mx-auto my-4 flex w-1/2 items-center gap-2 text-xs">
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Whatsapp</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
