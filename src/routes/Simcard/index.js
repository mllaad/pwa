import ChargeSimCard from "./ChargeSimCard";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";

const SimcardRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="ChargeSimCard" element={<ChargeSimCard />} />
    </Routes>
  );
};

export default SimcardRoute;
