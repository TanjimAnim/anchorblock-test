import { CgProfile } from "react-icons/cg";
import textStyle from "../../textStyle/text.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/slice/userSlice";
import { IoLogOutOutline } from "react-icons/io5";
import { CiSearch, CiSettings } from "react-icons/ci";
import { useState } from "react";
import Sidebar from "./Sidebar";
export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };
  return (
    <div className="flex md:hidden p-4 items-center justify-between">
      <div id="mobile-navbar-left">
        <div
          className="flex justify-start gap-4 items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="w-[50px] h-[44px]">
            <img src={"/logo.svg"} className="w-full" />
          </div>
          <div className={`${textStyle.headline} text-white`}>Stack</div>
        </div>
      </div>
      <div id="mobile-navbar-right">
        {user.token ? (
          <div className="flex items-center justify-between gap-2">
            <CiSearch className="w-5 h-5 text-white" />
            <CiSettings className="w-5 h-5 text-white" />
            <IoLogOutOutline
              className="w-5 h-5 text-white cursor-pointer"
              onClick={handleLogout}
            />
            <CgProfile className="w-10 h-10 text-white cursor-pointer" />
          </div>
        ) : (
          <Link
            to="/login"
            className={`${textStyle.text3} text-white hover:bg-[#7F56D9] hover:text-white p-2 rounded-md transition-background`}
          >
            Login/Register
          </Link>
        )}
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
}
