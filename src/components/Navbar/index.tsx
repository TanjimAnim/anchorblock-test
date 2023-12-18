import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

export default function Navbar() {
  return (
    <div className="w-full bg-[#6941C6] ">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}
