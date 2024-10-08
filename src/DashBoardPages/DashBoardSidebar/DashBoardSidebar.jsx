import { GoHome } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbPinned } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import "./dasboardSidebar.css";

const DashBoardSidebar = ({ isSidebarOpen }) => {
  return (
    <div>
      <div
        className={`fixed  transition-all  z-40   bg-[#fff] dark:bg-gray-900  flex flex-col ${
          isSidebarOpen ? "w-[230px]" : "w-0"
        } lg:border-none border-r border-gray-200 dark:border-gray-800 text-zinc-950 overflow-hidden`}
      >
        <h1 className="uppercase text-base font-outfit text-[#43b9b2] font-semibold pl-5 mb-[15px]">
          General
        </h1>
        <ul className="cursor-pointer">
          <li className="relative text-lg font-medium text-[#767676] font-outfit  group hover:text-[#43b9b2] nav-item">
            <NavLink
              to="/dashboard/home"
              className={({ isActive }) =>
                `flex items-center gap-4 py-[6px] px-[20px] ${
                  isActive ? "bg-[#43b9b21a] text-[#43b9b2]" : ""
                }`
              }
            >
              {({ isActive }) => (
                <div className="flex items-center gap-4 w-full">
                  <span className="">
                    <GoHome className="text-xl icon" />
                  </span>
                  <span className="mr-5 w-[90px] font-outfit text-base">
                    Dashboard
                  </span>
                  <span className="relative ml-auto">
                    <MdKeyboardArrowRight
                      className={`text-2xl transition-transform duration-300 icon ${
                        isActive ? "rotate-90" : ""
                      }`}
                    />
                    <TbPinned
                      className={`absolute top-1 right-[-19px] text-[#767676] text-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
                    />
                  </span>
                </div>
              )}
            </NavLink>
          </li>
          <li className="relative text-lg font-medium text-[#767676] font-outfit  group hover:text-[#43b9b2] nav-item">
            <NavLink
              to="/dashboard/chat"
              className={({ isActive }) =>
                `flex items-center gap-4 py-[6px] px-[20px] ${
                  isActive ? "bg-[#43b9b21a] text-[#43b9b2] rounded" : ""
                }`
              }
            >
              {({ isActive }) => (
                <div className="flex items-center gap-4 w-full">
                  <span>
                    <IoChatbubbleEllipsesOutline className="text-xl icon" />
                  </span>
                  <span className="mr-5 w-[90px] font-outfit text-base">
                    Chat
                  </span>
                  <span className="relative ml-auto">
                    <MdKeyboardArrowRight
                      className={`text-2xl transition-transform duration-300 icon ${
                        isActive ? "rotate-90" : ""
                      }`}
                    />
                    <TbPinned
                      className={`absolute top-1 right-[-19px] text-[#767676] text-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
                    />
                  </span>
                </div>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={`ml-auto transition-all duration-300 ${
          isSidebarOpen ? "ml-[278px]" : "ml-0"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardSidebar;
