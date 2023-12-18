import textStyle from "../../textStyle/text.module.css";
import { CiSearch, CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slice/userSlice";

export const navbarOptions = [
  "Home",
  "Users",
  "Projects",
  "Tasks",
  "Reporting",
];

export default function DesktopNavbar() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };
  return (
    <div className="hidden md:flex justify-between md:px-5 lg:px-28 py-4 ">
      <div id="navbar-left" className="flex items-center justify-between gap-4">
        <div className="flex justify-start gap-4 items-center">
          <div className="w-[50px] h-[44px]">
            <img src={"/logo.svg"} className="w-full" />
          </div>
          <div className={`${textStyle.headline} text-white`}>Stack</div>
        </div>
        <div className="grid grid-cols-5">
          {navbarOptions.map((option, index) => {
            return (
              <div
                className={`${textStyle.text3} p-2 hover:bg-[#7F56D9] cursor-pointer rounded-md text-white transition-[background] text-center`}
                key={index}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="navbar-right"
        className="grid grid-cols-2 items-center md:gap-1 lg:gap-2"
      >
        <div className="grid grid-cols-3 gap-2">
          <CiSearch className="w-5 h-5 text-white" />
          <CiSettings className="w-5 h-5 text-white" />
          <IoLogOutOutline
            className="w-5 h-5 text-white cursor-pointer"
            onClick={handleLogout}
          />
        </div>
        {user.token ? (
          <CgProfile className="w-10 h-10 text-white" />
        ) : (
          <Link
            to="/login"
            className={`${textStyle.text3} text-white hover:bg-[#7F56D9] hover:text-white p-2 rounded-md transition-background`}
          >
            Login/Register
          </Link>
        )}
      </div>
    </div>
  );
}
