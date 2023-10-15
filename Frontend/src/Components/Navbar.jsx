import {
  HiChevronDown,
  HiOutlineInboxStack,
  HiOutlineBuildingLibrary,
  HiOutlineTableCells,
  HiOutlineHome,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlinePencilSquare,
  HiOutlineIdentification,
  HiOutlineServerStack,
  HiOutlineTrash,
  HiMiniTruck,
  HiOutlineWrenchScrewdriver,
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
      <nav className="flex justify-around gap-5 items-center py-3 backdrop-blur-lg">
        <div className="tab:w-32 tab:h-11 lg:w-40 lg:h-14 w-28 h-10">
          <img src="./Logos/Untitled.svg" alt="logo" className="" />
        </div>
        <ul className="hidden tab:flex tab:gap-2 md:gap-4 tab:text-sm lg:text-base lg:gap-8 items-center justify-center [&>*]:cursor-pointer">
          <li className="relative">
            <p className="flex justify-center items-center tab:gap-1 HoverEffect">
              <HiOutlineHome className="tab:w-6 tab:h-6" />
              Home
            </p>
          </li>
          <li className="group/product">
            <p className="flex justify-center items-center tab:gap-1 peer">
              Products <HiChevronDown className="text-gray-600" />
            </p>
            <div className="navMenuHover group-hover/product:translate-y-0 group-hover/product:visible">
              <li>
                <p className="navMenuIconWraperHover group/rack">
                  <HiOutlineInboxStack className="navMenuIconHover" />
                  Racks
                </p>
              </li>
              <li>
                <p className="navMenuIconWraperHover group/rack">
                  <HiOutlineBuildingLibrary className="navMenuIconHover" />
                  Sheds
                </p>
              </li>
              <li>
                <p className="navMenuIconWraperHover group/rack">
                  <HiOutlineTableCells className="navMenuIconHover" />
                  Cages
                </p>
              </li>
              <li className="group/storeItems relative">
                <p className="flex justify-center items-center tab:gap-1 cursor-pointer">
                  Plastic Store Items{" "}
                  <HiChevronDown className="text-gray-600" />
                </p>
                <div className="navMenuHover group-hover/storeItems:translate-y-0 group-hover/storeItems:visible ">
                  <li>
                    {" "}
                    <p className="navMenuIconWraperHover group/rack">
                      <HiOutlineTrash className="navMenuIconHover" />
                      Baskets
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p className="navMenuIconWraperHover group/rack">
                      <HiOutlineServerStack className="navMenuIconHover" />
                      Pallets
                    </p>
                  </li>
                </div>
              </li>
            </div>
          </li>
          <li className="group/services ">
            <p className="flex justify-center items-center tab:gap-1 ">
              <HiOutlineIdentification className="tab:w-6 tab:h-6" /> Services
              <HiChevronDown className="text-gray-600" />
            </p>
            <div className=" navMenuHover group-hover/services:translate-y-0 group-hover/services:visible">
              <li>
                <p className="navMenuIconWraperHover group/rack">
                  <HiOutlineWrenchScrewdriver className="navMenuIconHover" />
                  Maintenance
                </p>
              </li>
              <li>
                <p className="navMenuIconWraperHover group/rack">
                  <HiMiniTruck className="bg-gray-100/90  p-1 w-8 h-8 text-gray-600 rounded-md group-hover/rack:bg-white group-hover/rack:text-brand-secondaryLV" />
                  Transportation
                </p>
              </li>
            </div>
          </li>

          <li className="relative">
            <p className="flex justify-center items-center tab:gap-1 HoverEffect">
              <HiOutlineChatBubbleBottomCenterText className="tab:w-6 tab:h-6" />
              Contact us
            </p>
          </li>
          <li className="relative">
            <p className="flex justify-center items-center tab:gap-1 HoverEffect">
              <HiOutlinePencilSquare className="tab:w-6 tab:h-6" /> About Us
            </p>
          </li>
        </ul>
        <div className="flex gap-3 tab:gap-1 lg:gap-5 items-center justify-center">
          <button className="basicButton lg:text-lg tab:text-base ">
            Sign in
          </button>

          <div className="border border-blue-800 rounded-full flex justify-center items-center w-6 h-6">
            M
          </div>
          {/* hamburger Icon */}
          <div className="tab:hidden">
            <label className="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={toggleCheckbox}
              />
              <div
                className={`w-8 h-5 flex flex-col items-center justify-center ${
                  isChecked ? "-gap-1" : "gap-1"
                } transition-transform transition-rotate group`}
              >
                <div
                  className={`w-5 h-[3px] bg-black rounded-full transform ${
                    isChecked ? "scale-x-0" : "scale-x-100"
                  } transition-transform`}
                ></div>
                <div
                  className={`w-6 h-[3px] bg-black rounded-full transform ${
                    isChecked ? "rotate-45" : "rotate-0"
                  } transition-transform transition-rotate duration-200`}
                ></div>
                <div
                  className={`w-5 h-[3px] bg-black rounded-full transform ${
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
