import { useState } from "react";
import DashBoardNavbar from "../../DashBoardPages/DashBoardNavbar/DashBoardNavbar";
import DashBoardSidebar from "../../DashBoardPages/DashBoardSidebar/DashBoardSidebar";

const DashBoardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="ml-4 mr-4 mt-4 bg-[#fff]">
      <DashBoardNavbar toggleSidebar={toggleSidebar} />
      <DashBoardSidebar isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default DashBoardLayout;
