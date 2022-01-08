import { ShoppingCartIcon, StarIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Product({ image_url, name, price, stock, cart, setCart, product }) {
  const no_implementation = () => {
    window.alert("This has not been implemented yet.");
  };

  const addToCart = async (item) => {
    let temp_cart = { ...cart };

    if (temp_cart[JSON.stringify(item)] === undefined)
      temp_cart[JSON.stringify(item)] = 1;
    else {
      temp_cart[JSON.stringify(item)] += 1;
    }
    await setCart(temp_cart);
    localStorage.setItem("cart", JSON.stringify(temp_cart));
    window.alert(`"${item.name}" added to cart!`);
  };

  return (
    <Link
      to={`products/${product.index}`}
      className="p-3 m-1 flex flex-col items-center border border-gray-300 rounded-md relative h-[365px] w-[300px]"
    >
      <StarIcon
        className="h-6 w-6 absolute top-3 right-3 text-yellow-500 cursor-pointer"
        onClick={no_implementation}
      />
      <img className="px-3 py-1 h-full w-auto" src={image_url} alt="" />

      <h1 className="text font-semibold text-justify mb-1">{name}</h1>

      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl bg-b flex flex-col items-center bg-green-200 px-1.5 pr-2 py-1 rounded-md pointer-events-none">
          ${price}
          <p className="text-xs text-gray-500">{stock} left</p>
        </h1>
        <button
          className={`z-50 flex items-center ${
            stock > 0
              ? "bg-blue-400 hover:bg-blue-600 hover:text-white"
              : "bg-red-500 cursor-not-allowed"
          } p-2 pr-2.5 rounded-md duration-150 ease-out font-semibold`}
          disabled={stock < 1}
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
        >
          <ShoppingCartIcon className="h-5 w-5 mr-0.5" />
          {stock > 0 ? "Add to cart" : "Out of stock"}
        </button>
      </div>
    </Link>
  );
}

export default Product;
