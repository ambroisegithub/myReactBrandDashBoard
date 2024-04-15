import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Topbar from "./Topbar";

function Dashboard() {
  return (
    <div className="w-full flex flex-row gap-0">
      <div className="h-[100vh] ">
        <Sidebar className="w-full" />
      </div>
      <div className="w-full overflow-x-auto ">
        <Topbar className="" />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
