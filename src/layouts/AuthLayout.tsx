import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-wrap w-full h-full px-4">
      <div className="flex w-full flex-col md:w-1/2">
        <a href="/" className="absolute top-7 start-8 text-3xl font-semibold">
          E-Serasera
        </a>
        {/* Content */}
        <div className="w-md m-auto">
          <Outlet />
        </div>
      </div>
      <div className="pointer-events-none relative h-screen hidden items-center justify-center select-none bg-base-100 md:flex md:w-1/2">
        <img
          className="w-full mx-auto"
          src="/auth/bg-auth.svg"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
