import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">E-Serasera</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
