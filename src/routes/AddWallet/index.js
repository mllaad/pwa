import { Route, Routes } from "react-router-dom";

import Main from "./Main";
import PaymentType from "./PaymentType";

const AddWallet_Route = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="PaymentType" element={<PaymentType />} />
      <Route />
    </Routes>
  );
};

export default AddWallet_Route;
