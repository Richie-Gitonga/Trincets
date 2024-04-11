import React from "react";
import Layout from "../components/Layout";
import Product from "../components/product";
import Item from "../components/item";

const Home = () => {
  return (
    <>
      <Layout>
        <ul className="mx-10 my-10 flex items-center gap-10 overflow-x-hidden">
          <li>
            <a href="">Necklaces</a>
          </li>
          <li>
            <a href="">Anklets</a>
          </li>
          <li>
            <a href="">Rings</a>
          </li>
          <li>
            <a href="">Earings</a>
          </li>
          <li>
            <a href="">Ornaments</a>
          </li>
          <li>
            <a href="">Accessories</a>
          </li>
        </ul>
        <ul className="flex w-full items-center justify-evenly gap-5 overflow-x-hidden">
          <li className="relative w-screen">
            <img
              className="h-[300px] w-[250px] object-cover"
              src="products/necklace/necklace-1.webp"
              alt=""
            />
            <div className="w-full">
              <h2>Necklace</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </li>
          <li>
            <img
              src="products//necklace/necklace-2.webp"
              alt=""
              className="h-[300px] w-[250px] object-cover"
            />
            <h2>Necklace</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <img
              src="products/necklace/necklace-3.webp"
              alt=""
              className="h-[300px] w-[250px] object-cover"
            />
            <h2>Necklace</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <img
              src="products/ornaments/necklace/ornaments-1.jpg"
              alt=""
              className="h-[300px] w-[250px] object-cover"
            />
            <h2>Necklace</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <img
              src="products/ornaments/necklace/ornaments-2.jpg"
              alt=""
              className="h-[300px] w-[250px] object-cover"
            />
            <h2>Necklace</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <img
              src="products/ornaments/necklace/ornaments-4.webp"
              alt=""
              className="h-[300px] w-[250px] object-cover"
            />
            <h2>Necklace</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
        <section className="my-24 px-12">
          <div>
            <div className="objet-cover w-full">
              <img
                src="hero-image.jpeg"
                alt=""
                className="w-full object-cover"
              />
            </div>
            <h1 className="my-4 text-center text-2xl font-semibold tracking-tight">
              About Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              architecto vitae tempore ratione perferendis omnis, porro quas
              exercitationem provident deleniti neque iusto amet eaque debitis
              in, voluptates consequuntur eveniet?
            </p>
          </div>
        </section>
        <section className="my-24 px-12">
          <div className="flex items-center justify-between px-4">
            <h1 className="my-4 text-2xl font-semibold tracking-tight">
              Popular Collection
            </h1>
            <a
              href=""
              className="underline transition-all delay-150 hover:scale-110"
            >
              View All
            </a>
          </div>

          <ul className="grid grid-cols-4 grid-rows-3">
            <li className="col-span-4 row-span-2">
              <Product
                name={"necklace"}
                image={"products/ornaments/necklace/ornaments-5.webp"}
                status={"like"}
              />
            </li>
            <li className="col-span-2">
              <Product
                name={"necklace"}
                image={"products/ornaments/necklace/ornaments-5.webp"}
                status={"like"}
              />
            </li>
            <li className="col-span-2">
              <Product
                name={"necklace"}
                image={"products/ornaments/necklace/ornaments-5.webp"}
                status={"like"}
              />
            </li>
            <li className="col-span-2">
              <Product
                name={"necklace"}
                image={"products/ornaments/necklace/ornaments-5.webp"}
                status={"like"}
              />
            </li>
            <li className="col-span-2">
              <Product
                name={"necklace"}
                image={"products/ornaments/necklace/ornaments-5.webp"}
                status={"like"}
              />
            </li>
          </ul>
        </section>
        <section className="my-24 px-12">
          <div className="flex items-center justify-between px-4">
            <h1 className="my-4 text-2xl font-semibold tracking-tight">
              You may also like:{" "}
            </h1>
            <button> View All</button>
          </div>
          <div className="flex items-center gap-4">
            <Item
              name={"Golden Necklace"}
              image={"products/necklace/necklace-1.webp"}
              price={200}
              rating={3}
              reviewCount={106}
              status={"like"}
            />
            <Item
              name={"Necklace"}
              image={"products/necklace/necklace-1.webp"}
              price={200}
              rating={3}
              reviewCount={106}
              status={"like"}
            />
            <Item
              name={"Necklace"}
              image={"products/necklace/necklace-1.webp"}
              rating={3}
              price={200}
              reviewCount={106}
              status={"like"}
            />
            <Item
              name={"Necklace"}
              image={"products/necklace/necklace-1.webp"}
              price={200}
              rating={3}
              reviewCount={106}
              status={"like"}
            />{" "}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
