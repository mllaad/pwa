import Bill from "./Bill";
import { Routes, Route } from "react-router-dom";
import CreateOrUpdateBill from "./CreateOrUpdateBill";
import BillList from "./BillList";
import Estelam from "./Estelam";
import BillPayedList from "./BillPayedList";

const BillRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Bill />} />
      <Route path="BillList" element={<BillList />} />
      <Route path="BillPayedList" element={<BillPayedList />} />
      <Route path="CreateOrUpdateBill" element={<CreateOrUpdateBill />} />
      <Route path="Estelam" element={<Estelam />} />
    </Routes>
  );
};

export default BillRoute;
