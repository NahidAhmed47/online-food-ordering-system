import React, { useEffect, useState } from "react";
import PagesBanner from "../../components/shared/PagesBanner";
import OrderRow from "../../components/OrderRow/OrderRow";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrdersData = async () => {
            const res = await fetch("http://localhost:3000/orders");
            const data = await res.json();
            setOrders(data);
        };
        getOrdersData();
    },[])
  return (
    <div>
      <PagesBanner>My Orders</PagesBanner>
      <div className="max-container my-14 md:my-20 min-h-[350px]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-base text-gray-600 font-medium">
                <th>No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Order Time</th>
                <th>Estimate Delivery Time</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((order, index) => <OrderRow key={order._id} order={order} index={index}></OrderRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
