import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Home/Componenets/NavBar";
import Footer from "../Pages/Home/Componenets/Footer";

const Main = () => {
  return (
    <div className="space-y-20">
      <NavBar></NavBar>
      <div className="w-[85%] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
