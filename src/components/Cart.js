import { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || {}
  );

  let price_tracker = 0;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(price_tracker);
  }, [price_tracker]);

  const handleDelete = (key, itemName) => {
    const temp_cart = { ...cart };

    const confirmation = window.confirm(
      `Are you sure you want to delete this:\n\t ${itemName}?`
    );

    if (confirmation) {
      delete temp_cart[key];

      setCart(temp_cart);
      localStorage.setItem("cart", JSON.stringify(temp_cart));

      window.location.reload();
      return false;
    }
  };

  return (
    <div className="w-4/5 mx-auto p-3 m-3 border border-gray-300 rounded-md">
      <div className="w-3/4 mx-auto flex items-center border border-gray-300 rounded-md py-3">
        <div className="bg-gray-200 rounded-md relative mx-3">
          <p className="absolute left-0 right-0 top-0.5 text-center text-[8px] font-semibold">
            General Total
          </p>
          <p className="mt-1 p-1 text-lg text-green-500 font-bold">
            ${total.toFixed(2)}
          </p>
        </div>

        <input
          type="text"
          placeholder="Enter your address... (Not implemented)"
          className="outline-none ring-1 ring-blue-300 rounded-md px-2 h-9 mx-3 flex-grow cursor-not-allowed"
          disabled
        />
        <input
          type="text"
          placeholder="Enter your payment details... (Not implemented)"
          className="outline-none ring-1 ring-blue-300 rounded-md px-2 h-9 mx-3 flex-grow cursor-not-allowed"
          disabled
        />
      </div>

      {Object.keys(cart).map((item, index) => {
        const cart_key = JSON.parse(item);
        price_tracker += cart_key.price * cart[item];

        return (
          <Link
            to={`/products/${cart_key.index}`}
            className="flex w-3/4 mx-auto border border-gray-300 rounded-lg my-3 px-1.5 py-1.5"
            key={index}
          >
            <img
              className="h-[120px] w-[120px] object-contain"
              src={cart_key.image_url}
              alt=""
            />
            <div className="flex flex-grow items-baseline flex-wrap">
              <h1 className="text-lg font-bold flex-grow">{cart_key.name}</h1>
              <div className="bg-gray-200 rounded-md relative mx-1">
                <p className="absolute left-0 right-0 top-0.5 text-center text-[8px] font-semibold">
                  Amount
                </p>
                <p className="mt-1 p-1 mx-1 text-lg text-green-500 font-bold">
                  {cart[item]}x
                </p>
              </div>
              <div className="bg-gray-200 rounded-md relative">
                <p className="absolute left-0 right-0 top-0.5 text-center text-[8px] font-semibold">
                  Total
                </p>
                <p className="mt-1 p-1 text-lg text-green-500 font-bold">
                  ${(cart_key.price * cart[item]).toFixed(2)}
                </p>
              </div>

              <div className="w-full justify-end items-end self-end">
                <TrashIcon
                  className="h-7 w-7 self-end ml-auto p-0.5 bg-red-600 rounded-md cursor-pointer hover:bg-red-500 text-white duration-150 ease-out"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(item, cart_key["name"]);
                  }}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Cart;
