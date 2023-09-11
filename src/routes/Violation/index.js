import Violation1 from "./Violation1";
import Violation2 from "./Violation2";
import Violation4 from "./Violation4";
import Violation3 from "./Violation3";
import Pelak from "./Pelak";
import PelakDetail from "./PelakDetail";
import VioAllResult from "./VioAllResult";
import VioDetailList from "./VioDetailList";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";

const ViolationRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="Violation1" element={<Violation1 />} />
      <Route path="Violation2" element={<Violation2 />} />
      <Route path="Violation3" element={<Violation3 />} />
      <Route path="Violation4" element={<Violation4 />} />
      <Route path="Pelak" element={<Pelak />} />
      <Route path="VioAllResult" element={<VioAllResult />} />
      <Route path="VioDetailList" element={<VioDetailList />} />
      <Route path="PelakDetail" element={<PelakDetail />} />
    </Routes>
  );
};

export default ViolationRoute;
