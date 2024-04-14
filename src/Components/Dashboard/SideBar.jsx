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
      <div className="h-auto w-auto top-0  bg-[#112926] pr-0 pl-0 pt-0 text-white ">
        <div className="pt-[40px]">
          <div className="flex flex-row gap-2 pt-3 pb-3">
            <IoHomeSharp className="text-2xl font-bold cursor-pointer" />
            <Link
              to="/dashboard/home"
              className="text-xl font-bold cursor-pointer"
            >
              Home
            </Link>
          </div>
          <div className="flex flex-row gap-2 pt-1 sm:pb-1 lg:pt-3 pb-3 md:pt-3 md:pb-3">
            <FaUsers className="text-2xl font-bold cursor-pointer" />
            <Link
              to="/dashboard/users"
              className="text-xl font-bold cursor-pointer"
            >
              Users
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
      className="h-full  overflow-x-hidden w-auto top-0 bg-[#112926] pr-2 sm:pl-2 lg:pr-20 pl-10 pt-10 md:pr-20 md:pl-10 md:pt-10 text-white"
    >
      <div className="flex flex-col gap-1 pt-5 pb-5 lg:flex-row md:flex-row">
        <h1 className="hidden font-bold text-xl lg:inline md:inline">BBHCS</h1>
        <div
          onClick={toggleMenu}
          className="cursor-pointer text-3xl lg:pl-10 md:pl-10 font-bold sm:pl-0"
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
        <div className="pt-[40px]">
          <div
            className="flex flex-row gap-2 pt-3 pb-3"
            onClick={handleSidebarClose}
          >
            <IoHomeSharp className="text-2xl font-bold cursor-pointer" />
            <Link
              to="/dashboard/home"
              className="text-xl font-bold hidden lg:inline md:inline cursor-pointer"
            >
              Home
            </Link>
          </div>
          <div className="flex flex-row gap-2 pt-1 sm:pb-1 lg:pt-3 pb-3 md:pt-3 md:pb-3">
            <FaUsers className="text-2xl font-bold cursor-pointer" />
            <Link
              to="/dashboard/users"
              className="text-xl font-bold hidden lg:inline md:inline cursor-pointer"
            >
              Users
            </Link>
          </div>

        </div>
      )}
    </div>
  );
};
export default SideBar;
