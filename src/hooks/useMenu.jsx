import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const getMenuData = async () => {
      const res = await fetch("https://bistro-boss-server-two.vercel.app/menu");
      const data = await res.json();
      setMenu(data);
    };
    getMenuData();
  }, []);
  return [menu];
};
export default useMenu;
