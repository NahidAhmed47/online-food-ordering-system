import React from "react";

const FoodCard = ({ food, handleOrder }) => {
  const { _id, name, recipe, image, price } = food;
  return (
    <div className="flex flex-col justify-between rounded-md shadow hover:shadow-lg p-4 group duration-300">
      <div className=" relative">
        <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-[1.1] origin-center duration-300"
        />
        </div>
        <div className="absolute -bottom-4 left-1 bg-white shadow-md hover:shadow-lg ">
          <h1 className="text-lg font-semibold px-2">{name}</h1>
          <div className="h-[1px] bg-[#E25111]"></div>
        </div>
      </div>
      <div className="my-2 relative">
        <div className="pt-4 ">
          <p className="text-base text-gray-700">{recipe}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-base font-semibold text-[#E25111]">${(price).toFixed(2)}</p>
        <button className="bg-white border border-[#E25111] text-[#E25111] px-3 py-1 duration-300 hover:bg-[#E25111] font-medium  text-sm rounded hover:text-white" onClick={() => (window.food_order_modal.showModal(), handleOrder(_id))}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
