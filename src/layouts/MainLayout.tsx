import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-full bg-base-100">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
