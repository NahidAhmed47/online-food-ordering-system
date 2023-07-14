import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [limit, setLimit] = useState(8);
  useEffect(() => {
    const getMenuData = async () => {
      const res = await fetch(`http://localhost:3000/menu?limit=${limit}`);
      const data = await res.json();
      setMenu(data);
    };
    getMenuData();
  }, [limit]);
  return [menu, setLimit];
};
export default useMenu;
