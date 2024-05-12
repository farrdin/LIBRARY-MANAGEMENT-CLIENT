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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "add",
        element: <AddBook></AddBook>,
      },
      {
        path: "all",
        element: <AllBook></AllBook>,
      },
      {
        path: "detail",
        element: <BookDetail></BookDetail>,
      },
      {
        path: "borrow",
        element: <Borrowed></Borrowed>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "update",
        element: <Update></Update>,
      },
    ],
  },
]);

export default router;
