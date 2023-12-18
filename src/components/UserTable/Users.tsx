import { useState } from "react";
import { useListUsersQuery } from "../../redux/services/user";
import textStyle from "../../textStyle/text.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

export const UserList = () => {
  const [page, setPage] = useState(1);
  const { data: users, isLoading } = useListUsersQuery(page);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!users?.data) {
    return <div>No posts :</div>;
  }

  return (
    <div className="md:mx-5 lg:mx-28 my-4 border-solid border-[1px] border-[#EAECF0] rounded-lg">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4 w-1/3">
                      User Name
                    </th>
                    <th scope="col" className="px-6 py-4 w-1/3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4 w-1/3">
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.data.map(
                    ({ id, first_name, last_name, email, avatar }) => (
                      <tr key={id} className="border-b dark:border-neutral-500">
                        <td className="flex items-center py-4 px-6 gap-2">
                          <div className="min-w-[2.5rem] w-10 min-h-[2.5rem] h-10 rounded-full">
                            <img
                              src={avatar}
                              alt={avatar}
                              className="w-full h-full object-contain rounded-full"
                            />
                          </div>
                          <div className={`${textStyle.text1}`}>
                            {first_name} {last_name}
                          </div>
                        </td>
                        <td className={`${textStyle.text1} py-4 px-6 gap-2`}>
                          {email}
                        </td>
                        <td className={`flex items-center py-4 px-6 gap-2`}>
                          <div className={`${textStyle.text1} py-4 px-6`}>
                            Status
                          </div>
                          <div className="flex gap-2 items-center">
                            <MdEdit className="w-5" />
                            <RiDeleteBin6Line className="w-5 " />
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-between p-2">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <div>
          Page {users.page} of {users.total_pages}
        </div>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === users.total_pages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
