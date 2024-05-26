import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg text-secondary mx-auto flex items-center justify-center"></span>
    );
  }
  if (user) {
    return children;
  }
  Swal.fire({
    title: "Sign In to See Details",
    text: "If you don't have any account, please SingUp",
    icon: "warning",
  });
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
