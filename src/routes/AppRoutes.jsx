import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AllCoaches from "../pages/AllCoaches";
import MembershipPlans from "../pages/MembershipPlans";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coaches" element={<AllCoaches/>}/>
      <Route path="/membershipplans" element={<MembershipPlans/>}/>
    </Routes>
  );
};

export default AppRoutes;