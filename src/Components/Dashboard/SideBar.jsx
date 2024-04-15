import { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const SideBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const OrginalContent = (
    <>
      <div className="h-auto w-auto top-0 bg-black  pr-0 pl-0 pt-0 text-white">
        <div className="pt-[0px]">
          <div className="flex flex-row gap-2 pt-3 pb-3 w-full">
            <Link
              to="/dashboard/home"
              className=" flex flex-row text-xl font-bold cursor-pointer"
            >
              <IoHomeSharp className="text-2xl font-bold cursor-pointer" />
              <p>Home</p>
            </Link>
          </div>
          <div className="flex flex-row gap-2 pt-1 sm:pb-1 lg:pt-3 pb-3 md:pt-3 md:pb-3">
            <Link
              to="/dashboard/users"
              className="flex flex-row text-xl font-bold cursor-pointer"
            >
              <FaUsers className="text-2xl font-bold cursor-pointer" />
              <p>Users</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  const handleSidebarClose = () => {
    setMenuOpen(false);
  };

  return (
    <div
      ref={sidebarRef}
      className="h-full  overflow-x-hidden w-auto top-0 bg-[#2A2C39]    text-white"
    >
      <div className="flex flex-row  lg:flex-row md:flex-row">
        <h1 className="w-full pt-[10px] pb-[10px]  bg-[#343A40] hidden font-bold text-[36px] pl-[30px] lg:inline md:inline">
          AMB
        </h1>
        <div
          onClick={toggleMenu}
          className="cursor-pointer text-3xl lg:pl-0 md:pl-0 font-bold sm:pl-0"
        >
          {menuOpen ? (
            <IoCloseSharp className="inline lg:hidden md:hidden" />
          ) : (
            <FiMenu className="inline lg:hidden md:hidden" />
          )}
        </div>
      </div>
      {menuOpen ? (
        OrginalContent
      ) : (
        <div className=" sm:pl-2 lg:pr-20 pl-10 mt-11 md:pr-20 md:pl-10 md:mt-11">
          <div
            className="flex flex-row gap-2 pt-3 pb-3"
            onClick={handleSidebarClose}
          >
            <Link
              to="/dashboard/home"
              className="flex flex-row text-xl font-bold  lg:inline md:inline cursor-pointer"
            >
              <div className="flex flex-col gap-2 lg:flex-row md:flex-row">
                {" "}
                <IoHomeSharp className="text-2xl font-bold cursor-pointer" />
                <p className="hidden lg:inline md:inline">Home</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-row gap-2 pt-1 sm:pb-1 lg:pt-3 pb-3 md:pt-3 md:pb-3">
            <Link
              to="/dashboard/users"
              className="flex flex-row text-xl font-bold  lg:inline md:inline cursor-pointer"
            >
              <div className="flex flex-row gap-2">
                <FaUsers className="text-2xl font-bold cursor-pointer" />
                <p className="hidden lg:inline md:inline">Users</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default SideBar;
