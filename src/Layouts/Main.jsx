import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Home/Componenets/NavBar";
import Footer from "../Pages/Home/Componenets/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
