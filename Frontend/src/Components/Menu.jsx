import {
  HiChevronDown,
  HiOutlineBuildingLibrary,
  HiOutlineInboxStack,
  HiOutlineTableCells,
  HiOutlineTrash,
  HiOutlineServerStack,
  HiMiniTruck,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

import { useState } from "react";
const Menu = ({ isChecked }) => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isPlasticOPen, setIsPlasticOPen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div
      className={`tab:hidden ${
        isChecked ? "left-0" : "-left-full"
      } h-full backdrop-blur-sm font-semibold w-56 absolute z-50 flex justify-start items-center flex-col p-14 gap-20 text-base transition-all ease-in-out duration-300 `}
    >
      <div className="w-5 h-5">icon</div>
      <ul className="flex flex-col gap-3 [&>*]:cursor-pointer">
        <li>Home</li>
        <li>
          <p
            className="flex justify-center items-center gap-2"
            onClick={() => {
              setIsProductOpen(!isProductOpen);
              setIsPlasticOPen(false);
              setIsServicesOpen(false);
            }}
          >
            Products <HiChevronDown />
          </p>
          <div
            className={`${
              isProductOpen && isChecked
                ? "visible translate-x-2 "
                : "invisible translate-x-0"
            }bg-white z-50 rounded-md absolute w-48 p-1 left-48 transition-all shadow-md duration-200 ease-in`}
          >
            <li>
              <p className="flex justify-start items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100/90 group/rack">
                <HiOutlineInboxStack className="bg-gray-100/90  p-1 w-8 h-8 text-gray-600 rounded-md group-hover/rack:bg-white group-hover/rack:text-brand-secondaryLV" />
                Racks
              </p>
            </li>
            <li>
              <p className="flex justify-start items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100/90 group/rack">
                <HiOutlineBuildingLibrary className="bg-gray-100/90  p-1 text-gray-600 w-8 h-8 rounded-md group-hover/rack:bg-white group-hover/rack:text-brand-secondaryLV" />
                Sheds
              </p>
            </li>
            <li>
              <p className="flex justify-start items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100/90 group/rack">
                <HiOutlineTableCells className="bg-gray-100/90  p-1 w-8 h-8 text-gray-600 rounded-md group-hover/rack:bg-white group-hover/rack:text-brand-secondaryLV" />
                Cages
              </p>
            </li>
            <li className="">
              <p
                className="flex justify-center items-center gap-2 cursor-pointer"
                onClick={() => setIsPlasticOPen(!isPlasticOPen)}
              >
                Plastic Store Items <HiChevronDown className="text-gray-600" />
              </p>
              <div
                className={`
               ${
                 isPlasticOPen && isProductOpen
                   ? "visible translate-x-2 "
                   : "invisible translate-x-0"
               }
           bg-white rounded-md shadow-md absolute p-2 transition-all ease-in duration-200`}
              >
                <li>
                  <p className="flex justify-start items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100/90 group/rack">
                    <HiOutlineTrash className="bg-gray-100/90  p-1 w-8 h-8 text-gray-600 rounded-md group-hover/rack:bg-white group-hover/rack:text-brand-secondaryLV" />
                    Baskets
                  </p>
                </li>
                <li>
                  <p className="flex justify-start items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100/90 group/rack">
                    <HiOutlineServerStack className="bg-gray-100/90  p-1 w-8 h-8 text-gray-600 rounded-md group-hover/rack:bg-white group-hover/rack:text-brand-secondaryLV" />
                    Pallets
                  </p>
                </li>
              </div>
            </li>
          </div>
        </li>
        <li>
          <p
            className="flex justify-center items-center gap-2"
            onClick={() => {
              setIsServicesOpen(!isServicesOpen);
              setIsProductOpen(false);
            }}
          >
            Services <HiChevronDown />
          </p>
          <div
            className={`
               ${
                 isServicesOpen
                   ? "visible translate-x-2 "
                   : "invisible translate-x-0"
               }
           bg-white rounded-md shadow-md absolute left-44 p-2 transition-all ease-in duration-200`}
          >
            <li>
              <p className="flex justify-start items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100/90 group/rack">
                <HiOutlineWrenchScrewdriver className="bg-gray-100/90  p-1 w-8 h-8 text-gray-600 rounded-md group-hover/rack:bg-white group-hover/rack:text-brand-secondaryLV" />
                Maintenance
              </p>
            </li>
            <li>
              <p className="flex justify-start items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100/90 group/rack">
                <HiMiniTruck className="bg-gray-100/90  p-1 w-8 h-8 text-gray-600 rounded-md group-hover/rack:bg-white group-hover/rack:text-brand-secondaryLV" />
                Transportation
              </p>
            </li>
          </div>
        </li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <button className="basicButton font-thin mt-20">Log out</button>
    </div>
  );
};

export default Menu;
