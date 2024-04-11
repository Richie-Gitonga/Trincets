import React from "react";
import Rating from "./utilities/rating";

function Item({ name, image, price, rating, reviewCount }) {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-[150px] w-[150px] bg-[#E8EFCF]"
      >
        <div className="flex w-full justify-between p-4">
          <button>
            <span className="material-icons-round">favorite</span>
          </button>
          <button>
            <span className="material-icons-round">shopping_cart</span>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Rating rates={rating} />
        <p className="text-sm">
          <span>{reviewCount}</span>
          <a className="cursor-pointer pl-2 underline transition-all delay-150 hover:scale-110">
            reviews
          </a>
        </p>
      </div>
      <h3 className="my-2 text-center">{name}</h3>
      <h2 className="text-md text-center">
        Ksh <span className="text-xl font-semibold">{price}</span>
      </h2>
    </div>
  );
}

export default Item;
