import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <p
        className="mt-auto absolute bottom-0 right-0 px-3 py-1 font-semibold text-blue-400 cursor-pointer"
        onClick={() => window.alert("This has not been implemented yet.")}
      >
        Customer Service
      </p>
    </>
  );
}

export default Layout;
