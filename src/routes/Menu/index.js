import TakeWallet from "./TakeWallet";
import Profile from "./Profile";
import Security from "./Security";
import AboutUs from "./AboutUs";
import ChangePassword from "./ChangePassword";
import Password from "./Password";
import { Route, Routes } from "react-router-dom";

const MenuRoute = () => {
  console.log("okok");
  return (
    <Routes>
      <Route path="Security" element={<Security />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="TakeWallet" element={<TakeWallet />} />
      <Route path="AboutUs" element={<AboutUs />} />
      <Route path="ChangePassword" element={<ChangePassword />} />
      <Route path="Password" element={<Password />} />
      <Route path="Security" element={<Security />} />
    </Routes>
  );
};

export default MenuRoute;
