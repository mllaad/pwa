import CarBills from "./CarBills";
import Pelak from "./Pelak";
import CarBillPayment from "./CarBillPayment";
import AllBillsList from "./AllBillsList";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";

const TaxRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="CarBills" element={<CarBills />} />
      <Route path="Pelak" element={<Pelak />} />
      <Route path="CarBillPayment" element={<CarBillPayment />} />
      <Route path="AllBillsList" element={<AllBillsList />} />
    </Routes>
  );
};

export default TaxRoute;
