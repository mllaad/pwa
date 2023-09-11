import { Routes, Route } from "react-router-dom";
import Main from "./Main";

export const NewCardRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default NewCardRoute;
