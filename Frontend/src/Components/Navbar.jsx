import {
  HiChevronDown,
  HiOutlineInboxStack,
  HiOutlineBuildingLibrary,
  HiOutlineTableCells,
  HiOutlineHome,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlinePencilSquare,
  HiOutlineIdentification,
} from "react-icons/hi2";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <Menu isChecked={isChecked} />
      <nav className="flex justify-around items-center py-3 backdrop-blur-lg">
        <div className="w-36 h-11">
          <img
            src="./Logos/Untitled.svg"
            alt="logo"
            className="border border-red-700 w-full "
          />
        </div>
        <ul className="hidden tab:flex sm:text-sm md:text-base items-center justify-center [&>*]:cursor-pointer">
          <li className="relative">
            <p className="flex justify-center items-center gap-2 HoverEffect">
              <HiOutlineHome className="sm:w-4 sm:h-4" />
              Home
            </p>
          </li>
          <li className="group/product">
            <p className="flex justify-center items-center gap-2 peer">
              Products <HiChevronDown className="text-gray-600" />
            </p>
            <div className="invisible absolute -translate-y-3  group-hover/product:translate-y-0 group-hover/product:visible p-2 border rounded-md transition-all ease-in duration-200">
              <li>
                <p className="flex justify-start items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100/90 group/rack">
                  <HiOutlineInboxStack className="bg-gray-100/90 sm:w-4 sm:h-4 p-1 text-gray-600 rounded-md group-hover/rack:bg-white group-hover/rack:text-brand-secondaryLV" />
                  Racks
                </p>
              </li>
              <li>
                <p className="flex justify-start items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100/90 group/rack">
                  <HiOutlineBuildingLibrary className="bg-gray-100/90 sm:w-4 sm:h-4 p-1 text-gray-600 rounded-md group-hover/rack:bg-white group-hover/rack:text-brand-secondaryLV" />
                  Sheds
                </p>
              </li>
              <li>
                <p className="flex justify-start items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100/90 group/rack">
                  <HiOutlineTableCells className="bg-gray-100/90 sm:w-4 sm:h-4 p-1 text-gray-600 rounded-md group-hover/rack:bg-white group-hover/rack:text-brand-secondaryLV" />
                  Cages
                </p>
              </li>
              <li className="group/storeItems relative">
                <p className="flex justify-center items-center gap-2 cursor-pointer">
                  Plastic Store Items{" "}
                  <HiChevronDown className="text-gray-600" />
                </p>
                <div className="invisible absolute -translate-y-3  group-hover/storeItems:translate-y-0 group-hover/storeItems:visible p-2 transition-all ease-in duration-200">
                  <li>Baskets</li>
                  <li>Pallets</li>
                </div>
              </li>
            </div>
          </li>
          <li className="relative">
            <p className="flex justify-center items-center gap-2 HoverEffect">
              <HiOutlineChatBubbleBottomCenterText className="sm:w-4 sm:h-4" />
              Contact us
            </p>
          </li>
          <li className="group/services ">
            <p className="flex justify-center items-center gap-2 ">
              <HiOutlineIdentification className="sm:w-4 sm:h-4" /> Services
              <HiChevronDown className="text-gray-600" />
            </p>
            <div className="invisible absolute -translate-y-3  group-hover/services:translate-y-0 group-hover/services:visible p-2 border rounded-md transition-all ease-in duration-200">
              <li>Maintenance</li>
              <li>Transportation</li>
            </div>
          </li>

          <li className="relative">
            <p className="flex justify-center items-center gap-2 HoverEffect">
              <HiOutlinePencilSquare className="sm:w-4 sm:h-4" /> About Us
            </p>
          </li>
        </ul>
        <div className="flex gap-2 items-center justify-center">
          <button className="basicButton">Sign in</button>

          <div className="border border-blue-800 rounded-full flex justify-center items-center w-6 h-6">
            M
          </div>
          <div className="tab:hidden">
            <label className="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={toggleCheckbox}
              />
              <div
                className={`toggle w-8 h-5 flex flex-col items-center justify-center ${
                  isChecked ? "-gap-1" : "gap-1"
                } transition-transform transition-rotate group`}
              >
                <div
                  className={`bars w-5 h-[3px] bg-black rounded-full transform ${
                    isChecked ? "scale-x-0" : "scale-x-100"
                  } transition-transform`}
                ></div>
                <div
                  className={`bars w-5 h-[3px] bg-black rounded-full transform ${
                    isChecked ? "rotate-45" : "rotate-0"
                  } transition-transform transition-rotate duration-200`}
                ></div>
                <div
                  className={`bars w-5 h-[3px] bg-black rounded-full transform ${
                    isChecked ? "-rotate-45" : "rotate-0"
                  } transition-transform transition-rotate`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
