import { CgProfile } from "react-icons/cg";
import textStyle from "../../textStyle/text.module.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
export default function MobileNavbar() {
  const user = useAppSelector((state) => state.user);
  return (
    <div className="flex md:hidden p-4 items-center justify-between">
      <div id="mobile-navbar-left">
        <div className="flex justify-start gap-4 items-center">
          <div className="w-[50px] h-[44px]">
            <img src={"/logo.svg"} className="w-full" />
          </div>
          <div className={`${textStyle.headline} text-white`}>Stack</div>
        </div>
      </div>
      <div id="mobile-navbar-right">
        {user.token ? (
          <CgProfile className="w-10 h-10 text-white cursor-pointer" />
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
