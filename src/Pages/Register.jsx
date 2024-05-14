import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    if (password.length < 6) {
      toast.error("You must enter 6 character or long", {
        theme: "colored",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("You must enter at least one Uppercase character", {
        theme: "colored",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("You must enter at least one Lowercase character", {
        theme: "colored",
      });
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("You must add one special character", {
        theme: "colored",
      });
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Congratulations Account Created Successfully", {
          theme: "colored",
        });
        e.target.reset();
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message, { theme: "colored" });
      });
  };

  return (
    <div className="p-10 mt-20 lg:flex">
      <div className="lg:border-t lg:border-l lg:border-b  lg:rounded-l-xl mb-5 lg:mb-0 w-full lg:w-3/5">
        <img
          src="https://i.ibb.co/p34VHsd/Thumbnails-7.jpg"
          className="rounded-xl lg:rounded-none lg:rounded-l-xl h-full"
        />
      </div>
      <div className="w-full lg:w-2/5 mx-auto items-end lg:max-w-md p-8 space-y-3 rounded-xl lg:rounded-none lg:rounded-r-xl bg-base-300 lg:border-l dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center text-[#4B7BEC]">
          Create New Account
        </h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Name
            </label>
            <input
              required
              type="name"
              name="name"
              id="name"
              placeholder="Enter your Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
              required
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter Your Photo URL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-[#6C63FE] hover:bg-[#3F3D55] shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30  duration-300 cursor-pointer">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center sm:px-6 dark:text-gray-600">
          Already have an account?
          <Link to="/login" className="text-blue-600 link-hover ml-1">
            Sing in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
