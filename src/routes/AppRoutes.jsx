import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AllCoaches from "../pages/AllCoaches";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coaches" element={<AllCoaches/>}/>
    </Routes>
  );
};

export default AppRoutes;