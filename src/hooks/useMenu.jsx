import { useEffect, useState } from "react";
import axiosInstance from "../utls/axiosInstance";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [limit, setLimit] = useState(8);
  useEffect(() => {
    const getMenuData = async () => {
      const res = await axiosInstance.get(`/menu?limit=${limit}`);
      const data = await res.data;
      setMenu(data);
    };
    getMenuData();
  }, [limit]);
  return [menu, setLimit];
};
export default useMenu;
