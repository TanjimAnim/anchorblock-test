import { useAppSelector } from "../../redux/hooks";
import { UserList } from "./Users";
import textStyle from "../../textStyle/text.module.css";
import { FaCloudArrowDown, FaPlus } from "react-icons/fa6";

const buttonStyle = () => {
  return "border-[#D0D5DD] rounded-md px-1 py-1 md:px-4 md:py-2 flex items-center justify-between gap-2 hover:bg-[#7F56D9] hover:text-white";
};

export default function UserTable() {
  const user = useAppSelector((state) => state.user);
  return (
    <>
      {user.token ? (
        <>
          <div className="flex justify-between items-center mt-8 px-2 md:px-5 lg:px-28 py-4">
            <div className={`${textStyle.subtitle1} text-[#101828]`}>Users</div>
            <div className="flex justify-center gap-2">
              <button className={buttonStyle()}>
                <FaCloudArrowDown className="w-5 h-5 text-[#344054] hover:text-white" />
                import
              </button>
              <button className={buttonStyle()}>
                <FaPlus />
                Add User
              </button>
            </div>
          </div>
          <UserList />
        </>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-76px)]">
          <h1 className={`${textStyle.headline} text-[#101828]`}>
            Please sign in to see data
          </h1>
        </div>
      )}
    </>
  );
}
