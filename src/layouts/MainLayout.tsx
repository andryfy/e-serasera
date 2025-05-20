import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-full bg-base-100 flex flex-col grow overflow-hidden">
      <Navbar />
      <div className="flex flex-col grow overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
