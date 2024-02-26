import { useState } from "react";
import RestaurantButton from "../Restaurant/RestaurantButton";

const Order = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li className="restaurant__item">
      Pizzas: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
