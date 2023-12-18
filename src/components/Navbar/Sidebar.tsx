import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { IoMdClose } from "react-icons/io";
import textStyle from "../../textStyle/text.module.css";
import { navbarOptions } from "./desktopNavbar";
export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (click: boolean) => void;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed md:hidden inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 md:hidden">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-[70vw] max-w-md">
                  {/* <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-[-6px] top-[-0.75rem] flex pr-2 pt-4 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-black hover:text-black focus:outline-none focus:ring-white p-1"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <IoMdClose className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child> */}
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="">
                        <div className="flex justify-start gap-4 items-center cursor-pointer">
                          <div className="w-[50px] h-[44px]">
                            <img src={"/logo.svg"} className="w-full" />
                          </div>
                          <div
                            className={`${textStyle.headline} text-[#4E5D78]`}
                          >
                            Stack
                          </div>
                        </div>
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Your content */}
                      <div className="">
                        {navbarOptions.map((option, index) => {
                          return (
                            <div
                              className={`${textStyle.text3} p-2 hover:bg-[#7F56D9] hover:text-white cursor-pointer rounded-md text-[#4E5D78] transition-[background] text-left`}
                              key={index}
                            >
                              {option}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
