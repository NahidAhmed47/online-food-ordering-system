import React, { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../FoodCard/FoodCard";
import { FaMinus, FaPlus } from "react-icons/fa";
import setCustomerId from "../../utls/setCustomerId";
import { toast } from "react-hot-toast";
import axiosInstance from "../../utls/axiosInstance";

const OurMenu = () => {
  const [menu, setLimit] = useMenu();
  const [selectedFood, setSelectedFood] = useState({});
  const [quantity, setQuantity] = useState(2);
  // order handle
  const handleOrder = (e) => {
    const findSelectedFood = menu.find(food => food._id === e)
    setSelectedFood(findSelectedFood)
    setQuantity(1)
    setCustomerId()
  }
  // handle confirm order
  const handleConfirmOrder = () => {
    const order = {
      foodId: selectedFood?._id,
      quantity,
      price: parseFloat((selectedFood?.price * quantity).toFixed(2)),
      order_time: [new Date().toLocaleTimeString(), new Date().toDateString()],
      estimated_delivery_date: new Date(new Date().setDate(new Date().getDate()+Math.floor(Math.random() * 10))).toDateString(),
      customerId: JSON.parse(localStorage.getItem('customerId'))
    }
    axiosInstance.put('/order', order).then(res => {
      if(res.data.insertedId || res.data.modifiedCount === 1){
        toast.success('Order Successful!')
        document.getElementById('food_order_modal').close()
      }
    })
  }
  return (
    <div>
      <div className="max-container mt-12 mb-8 md:mt-24 md:mb-14 px-3 lg:px-0">
        <h1 className="text-xl md:text-3xl font-bold font-serif text-center">
          OUR MENU
        </h1>
        <div className="w-full bg-slate-200 my-3 h-[2px]">
          <div className="w-[13%] mx-auto h-[2px] bg-[#E25111]"></div>
        </div>
      </div>
      {/* food menu */}
      <div className="max-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-2 md:px-0">
        {menu.map((food) => (
          <FoodCard key={food._id} food={food} handleOrder={handleOrder}></FoodCard>
        ))}
      </div>
      <div className="w-full h-fit flex justify-center mt-8 mb-20">
        {
          menu.length <= 8 ? <button onClick={()=> setLimit(0)} className="text-[#E25111] font-semibold">See More &#8594;</button> : <button onClick={()=> setLimit(8)} className="text-[#E25111] font-semibold">See Less</button>
        }
      </div>
      {/* Modal */}
      <dialog id="food_order_modal" className="modal">
        <div method="dialog" className="modal-box w-fit">
          <div>
            <img src={selectedFood?.image} alt={selectedFood?.name} className="mx-auto"/>
            <div className="max-w-[350px] mt-3">
              <h1 className="text-sm md:text-lg font-semibold">{selectedFood?.name}</h1>
              <p className="text-sm">{selectedFood?.recipe}</p>
            </div>
            <div className="w-full grid grid-cols-2 mt-2">
              <div className="px-3 py-1 border rounded flex items-center justify-around">
                <button onClick={()=> quantity > 1 && setQuantity(quantity - 1)} className="w-full h-full flex justify-center items-center"><FaMinus className="w-3 h-3"/></button>
                <input
                readOnly
                value={quantity}
                 type="number" className="[-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none text-center max-w-[100px] font-medium"/>
                 <button className="w-full h-full flex justify-center items-center" onClick={()=> setQuantity(quantity + 1)}><FaPlus className="w-3 h-3"></FaPlus></button>
              </div>
              <div className="flex items-center justify-end font-medium text-[#E25111]">
                Total Price: ${(selectedFood?.price * quantity).toFixed(2) || 0}
              </div>
            </div>
            <button onClick={handleConfirmOrder} className="mt-3 w-full text-center py-1 hover:bg-white border border-[#E25111] hover:text-[#E25111] duration-300 bg-[#E25111] text-white font-semibold rounded">Confirm Order</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </dialog>
    </div>
  );
};

export default OurMenu;
