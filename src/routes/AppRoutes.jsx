import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Stats from "../components/Stats/Stats";
import Coaches from "../components/Coaches/Coaches";
import Reviews from "../components/Reviews/Reviews";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stats" element={<Stats/>}/>
      <Route path="/coaches" element={<Coaches/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
    </Routes>
  );
};

export default AppRoutes;