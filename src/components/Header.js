import {
  ShoppingBagIcon,
  UserAddIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [cart] = useState(JSON.parse(localStorage.getItem("cart")) || {});

  const no_implementation = () => {
    window.alert("This has not been implemented yet.");
  };

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

      <div className="mr-3 cursor-pointer flex-grow flex items-center justify-end">
        <div className="flex items-center border-2 border-blue-400 p-1 rounded-lg mx-3" onClick={no_implementation}>
          <UserAddIcon className="h-4 w-4" />
          <p className="font-semibold">Sign Up</p>
        </div>
        <div className="flex items-center border-2 border-blue-400 bg-blue-400 p-1 rounded-lg mx-3" onClick={no_implementation}>
          <LoginIcon className="h-4 w-4" />
          <p className="font-semibold">Sign In</p>
        </div>
        <Link className="relative" to="/cart">
          <ShoppingBagIcon className="h-10 w-10 p-1 relative" />
          <p className="absolute bottom-0 left-0 bg-red-500 h-5 w-5 text-center text-white rounded-full text-sm">
            {Object.keys(cart).length}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
