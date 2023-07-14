import React from "react";
import useMenu from "../../hooks/useMenu";

const OrderRow = ({ order, index }) => {
    const [menu] = useMenu();
    const findFood = menu.find(food => food._id === order.foodId);
    const {quantity, price, order_time, estimated_delivery_date} = order;
  return (
    <tr>
      <th className="font-medium">{index + 1}</th>
      <td><img src={findFood?.image} alt={findFood?.name} className="max-w-[150px] rounded" /></td>
      <td>{findFood?.name}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td><div>
        <p>{order_time[0]}</p>
        <p>{order_time[1]}</p>
        </div></td>
        <td>{estimated_delivery_date}</td>
    </tr>
  );
};

export default OrderRow;
