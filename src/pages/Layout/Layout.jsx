import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Switcher from "../../components/Swithcer";

const Layout = () => {
  let { pathname } = useLocation();
  return (
    <div className="dark:bg-neutral-900 dark:text-[#fff]">
      <nav className="bg-[#ffffff26] w-[100%] flex items-center justify-between px-[30px] absolute">
        <div className=" mt-[20px]">
          <ul className="flex justify-between w-[130px] pb-[20px] font-medium">
            <Link to="/">
              <li style={{ color: pathname == "/" ? "red" : "black" }}>
                Home
              </li>
            </Link>
            <Link to="/Product">
              <li style={{ color: pathname == "/Product" ? "red" : "black" }}>
                Product
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <Switcher/>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>

    </div>
  );
};

export default Layout;
