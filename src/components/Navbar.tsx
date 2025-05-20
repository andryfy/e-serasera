import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-200 shadow-sm px-4">
      <div className="navbar-start">
        <a className="text-xl">E-Serasera</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <Link to={"/"}>
              <span className="material-symbols-outlined">family_home</span>
              Home
              <span className="badge badge-xs">99+</span>
            </Link>
          </li>
          <li>
            <Link to={"/explorer"}>
              <span className="material-symbols-outlined">group_search</span>
              Explorer
              <span className="badge badge-xs badge-warning">NEW</span>
            </Link>
          </li>
          <li>
            <Link to={"/messages"}>
              <span className="material-symbols-outlined">mail</span>
              Messages
              <span className="badge badge-xs badge-primary">
                {/* Count */}
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <span className="material-symbols-outlined">
              notifications_active
            </span>
            <span className="badge badge-xs badge-primary indicator-item">
              {/* Count */}
            </span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://randomuser.me/api/portraits/men/41.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 [&_li>*]:rounded-none p-0 z-1 w-60 shadow py-2"
          >
            <div className="flex items-center px-3 pt-2 pb-4 mb-2 border-b border-base-300">
              <img
                src="https://randomuser.me/api/portraits/men/41.jpg"
                alt="Profil"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-3 flex-1">
                <h4 className="text-sm font-medium">Alfred Robinson</h4>
                <p className="text-xs text-gray-500">alfredrobinson@mail.com</p>
              </div>
            </div>
            <li>
              <Link to={"/profile"}>
                <span className="material-symbols-outlined !text-base">
                  account_circle
                </span>
                Profile
              </Link>
            </li>
            <li>
              <Link to={""}>
                <span className="material-symbols-outlined !text-base">
                  tune
                </span>
                Settings
              </Link>
            </li>
            <li>
              <Link to={"/signin"}>
                <span className="material-symbols-outlined !text-base">
                  logout
                </span>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
