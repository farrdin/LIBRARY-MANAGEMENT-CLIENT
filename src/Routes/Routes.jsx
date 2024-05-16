import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import AddBook from "../Pages/AddBook";
import AllBook from "../Pages/AllBook";
import Borrowed from "../Pages/Borrowed";
import Login from "../Pages/Login";
import BookDetail from "../Pages/BookDetail";
import Register from "../Pages/Register";
import Update from "../Pages/Update";
import About from "../Pages/About";
import Error from "../Pages/Error";
import PrivateRoute from "./PrivateRoute";
import CategoryCard from "../Pages/CategoryCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/all",
        element: (
          <PrivateRoute>
            <AllBook></AllBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <BookDetail></BookDetail>
          </PrivateRoute>
        ),
      },
      {
        path: "/borrow",
        element: (
          <PrivateRoute>
            <Borrowed></Borrowed>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/category/:categoryName",
        element: <CategoryCard></CategoryCard>,
      },
    ],
  },
]);

export default router;
