import logo from "../../src/assets/logo1.png";
import { Link } from 'react-router-dom';
import { AuthContext } from "../Providers/Authprovider";
import { useContext } from "react";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>Colleges</a>          
        </li>
        <li><a>Admission</a></li>
        <li><a>My College</a></li>
      </ul>
    </div>
    <Link to={"/"} className="btn  btn-ghost text-lg">
            <div className="w-14 hidden md:block">
              <img className="w-full" src={logo} alt="" />
            </div>
          </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Home</a></li>
        <li>
          <a>Colleges</a>          
        </li>
        <li><a>Admission</a></li>
        <li><a>My College</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  {user?.email ? (
          <>
            {user ? (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 tooltip tooltip-bottom rounded-full" data-tip={user?.displayName}>
                  <img  src={user?.photoURL} />
                </div>
              </label>
            ) : (
              ""
            )}
            <Link
              onClick={handleLogOut}
              to={""}
              className="btn btn-outline border-none btn-warning"
            >
             LogOut
            </Link>
          </>
        ) : (
          <Link
            to={"/login"}
            className="btn btn-outline border-none btn-warning"
          >
            LogIn
          </Link>
        )}
  </div>
</div>
    );
};

export default Navbar;