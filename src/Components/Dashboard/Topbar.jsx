import { IoNotifications } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FaMessage } from "react-icons/fa6";
// import Ambroise from "../images/ambroise.jpg";
function Topbar() {
  return (
    <div className="w-full flex flex-col lg:flex-row md:flex-row h-auto bg-[#29B5AC] top-0 pt-3 pb-3 pr-3 pl-3 lg:pr-10 md:pl-10 items-center over-flow-x-hidden">
      <div className="flex items-center font-bold lg:text-3xl md:text-3xl text-white cursor-pointer">
        <FiMenu />
      </div>
      <div className=" flex items-center justify-center flex-grow">
        <div className="">
          <input
            type="text"
            placeholder="search"
            className=" pt-2 pb-2 pl-2 pr-2 rounded-md focus:outline-none  lg:pl-10  lg:pt-3  lg:pb-3 md:pl-10 md:pr-10 md:pt-3  md:pb-3"
          />
        </div>
        <div className="  p-2  font-bold text-2xl cursor-pointer text-white lg:p-4 md:p-4">
          <FaSearch />
        </div>
      </div>

      <div className="flex items-center justify-end flex-grow-0 gap-0 lg:gap-3 md:gap-3 p-4 font-bold text-white text-xl">
        <div className="pr-0 lg:pl-3 lg:pr-3 md:pl-3 md:pr-3">
          <FaMessage className="text-2xl cursor-pointer" />
        </div>
        <div className="pl-3 pr-3">
          <IoNotifications className="text-2xl cursor-pointer" />
        </div>
        <div className=" w-[55px] h-[55px] rounded-full">
          {/* <img
            src={Ambroise}
            alt=""
            className="w-full h-full object-cover rounded-full "
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
