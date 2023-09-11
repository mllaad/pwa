import { Route, Routes } from "react-router-dom";
import Payment1 from "./Payment1";
import Payment2 from "./Payment2";
import Result from "./Result";

const PaymentRoute = () => {
  return (
    <Routes>
      <Route index element={<Payment1 />} />
      <Route path="Payment2" element={<Payment2 />} />
      <Route path="Result" element={<Result />} />
    </Routes>
  );
};

export default PaymentRoute;
