import React from "react";

function Product({ name, image }) {
  return (
    <div className="">
      <div className="w-full">
        <img src={image} alt={name} className="object-contain" />
      </div>
      <div className="flex items-center justify-between p-2">
        <p className="text-xl">{name}</p>
        <div className="flex items-center gap-4">
          <button className="transition-all delay-150 hover:scale-110 ">
            👍🏼
          </button>
          <button className="transition-all delay-150 hover:scale-110 ">
            🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
