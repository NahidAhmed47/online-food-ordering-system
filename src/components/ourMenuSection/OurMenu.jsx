import React, { useEffect } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../FoodCard/FoodCard";

const OurMenu = () => {
  const [menu] = useMenu();
  console.log(menu);
  return (
    <div>
      <div className="max-container my-12 md:my-24 px-3 lg:px-0">
        <h1 className="text-xl md:text-3xl font-bold font-serif text-center">
          OUR MENU
        </h1>
        <div className="w-full bg-slate-200 my-3 h-[2px]">
          <div className="w-[13%] mx-auto h-[2px] bg-[#E25111]"></div>
        </div>
      </div>
      {/* food menu */}
      <div className="max-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          menu.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
        }
      </div>
    </div>
  );
};

export default OurMenu;
