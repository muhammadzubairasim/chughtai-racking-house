const Menu = ({ isChecked }) => {
  return (
    <div
      className={`${
        isChecked ? "left-0" : "-left-full"
      } h-full backdrop-blur-md w-72 absolute z-50 flex justify-start items-center flex-col p-14 gap-20 text-sm transition-all ease-in-out duration-300`}
    >
      <div className="w-5 h-5">icon</div>
      <ul className="flex flex-col gap-3">
        <li>Home</li>
        <li>Products</li>
        <li>Services</li>
        <li>About us</li>
      </ul>
      <button className="basicButton mt-36">Log out</button>
    </div>
  );
};

export default Menu;
