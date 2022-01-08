import Product from "./Product";
import products from "../data/products.json";
import { useState } from "react";

function Listing({ category = "" }) {
  const [search, setSearch] = useState("");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || {}
  );

  return (
    <div className="flex flex-col items-center mx-auto w-4/5">
      <div className="flex justify-center items-center w-full my-3">
        <input
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="px-3 py-1.5 border-none ring-2 ring-blue-500 focus:ring-blue-300 duration-150 outline-none rounded-lg w-1/4"
          type="text"
          placeholder="Search for a product"
        />
      </div>

      <div className="w-full flex items-center flex-wrap justify-center">
        {products.list.map((product, index) => {
          if (
            product.name.toLowerCase().includes(search) &&
            (product.category === category || category === "")
          )
            return (
              <Product
                key={index}
                image_url={product.image_url}
                name={product.name}
                price={product.price}
                stock={product.stock}
                cart={cart}
                setCart={setCart}
                product={product}
              />
            );

          return false;
        })}
      </div>
    </div>
  );
}

export default Listing;
