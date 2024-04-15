import { IoNotifications } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
function Topbar() {
  return (
    <div className="w-full flex flex-col lg:flex-row md:flex-row h-auto bg-[#343A40] top-0 pt-[10px] pb-[10px] pr-3 pl-3 lg:pr-10 md:pl-10 items-center over-flow-x-hidden">
      <div className=" flex items-center justify-center flex-grow">
        <div className="flex gap-[5px]">
          <input
            type="text"
            placeholder="search"
            className="pl-2 pr-2 rounded-md focus:outline-none w-[500px] p-[15px] font-bold"
          />
        </div>
        <div className="font-bold text-2xl cursor-pointer text-white p-[15px] bg-[#555] ">
          <FaSearch />
        </div>
      </div>

      <div className="flex items-center justify-end flex-grow-0 gap-0 lg:gap-3 md:gap-3 font-bold text-white text-xl">
        <div className="pr-0 lg:pl-3 lg:pr-3 md:pl-3 md:pr-3">
          <FaMessage className="text-2xl cursor-pointer" />
        </div>
        <div className="pl-3 pr-3">
          <IoNotifications className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
