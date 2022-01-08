import { ShoppingBagIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [cart] = useState(JSON.parse(localStorage.getItem("cart")) || {});

  return (
    <div className="flex items-center h-[60px] shadow-md w-full">
      <Link to="/" className="text-5xl font-bold ml-3 mb-1 flex-grow">
        VMA
      </Link>

      <div className="flex items-center justify-center flex-grow">
        <Link
          to="/categories/electronics"
          className="text-lg font-semibold mx-3 text-blue-500"
        >
          ELECTRONICS
        </Link>
        <Link
          to="/categories/sports"
          className="text-lg font-semibold mx-3 text-blue-500"
        >
          SPORTS
        </Link>
        <Link
          to="/categories/kitchen"
          className="text-lg font-semibold mx-3 text-blue-500"
        >
          KITCHEN
        </Link>
      </div>

      <Link
        to="/cart"
        className="mr-3 cursor-pointer flex-grow flex justify-end"
      >
        <div className="relative">
          <ShoppingBagIcon className="h-10 w-10 p-1 relative" />
          <p className="absolute bottom-0 left-0 bg-red-500 h-5 w-5 text-center text-white rounded-full text-sm">
            {Object.keys(cart).length}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
