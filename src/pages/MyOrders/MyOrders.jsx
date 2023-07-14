import React, { useEffect, useState } from "react";
import PagesBanner from "../../components/shared/PagesBanner";
import OrderRow from "../../components/OrderRow/OrderRow";
import axiosInstance from "../../utls/axiosInstance";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const getOrdersData = async () => {
            const res = await axiosInstance.get(`/orders/${JSON.parse(localStorage.getItem('customerId'))}`);
            const data = await res.data;
            setOrders(data);
        };
        getOrdersData();
    },[])
    useEffect(() => {
        const getAllMenu = async () => {
            const res = await axiosInstance.get(`/menu?limit=0`);
            const data = await res.data;
            setMenu(data);
        };
        getAllMenu();
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
                orders.map((order, index) => <OrderRow key={order._id} order={order} index={index} menu={menu}></OrderRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
