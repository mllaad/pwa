import { Routes, Route } from "react-router-dom";
import CardByCardPayment from "./CardByCardPayment";
import SelectCard from "./SelectCard";
import Main from "./Main";

export const CardByCardRoutes = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="SelectCard" element={<SelectCard />} />
      <Route path="CardByCardPayment" element={<CardByCardPayment />} />
      <Route path="*" element={<div> NotFound </div>} />
    </Routes>
  );
};

export default CardByCardRoutes;
