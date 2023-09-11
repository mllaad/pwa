import Main from "./Main";
import InternetOption from "./InternetOption";
import { Routes, Route } from "react-router-dom";

const InternetRoutes = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/InternetOption" element={<InternetOption />} />
    </Routes>
  );
};

export default InternetRoutes;
