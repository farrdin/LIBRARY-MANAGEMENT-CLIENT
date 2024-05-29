import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const { logIn, googleLogIn, gitHubLogIn, facebookLogin } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
      .then((result) => {
        // console.log(result.user);
        Swal.fire({
          title: "Congratulations!",
          text: "Signed In  Successfully!",
          icon: "success",
          timer: 2000,
        });
        e.target.reset();
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Invalid Email or Password", { theme: "colored" });
      });
  };
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        // console.log(result.user);
        Swal.fire({
          title: "Congratulations!",
          text: "Google Signed In  Successfully with!",
          icon: "success",
          timer: 2000,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGitHubLogin = () => {
    gitHubLogIn()
      .then((result) => {
        // console.log(result.user);
        Swal.fire({
          title: "Congratulations!",
          text: "Github Signed In  Successfully with!",
          icon: "success",
          timer: 2000,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        // console.log(result.user);
        Swal.fire({
          title: "Congratulations!",
          text: "Facebook Signed In  Successfully with!",
          icon: "success",
          timer: 2000,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="border p-5 m-10 rounded-3xl bg-base-300 flex flex-col md:flex-row mt-28">
      <Helmet>
        <title>KS | LogIn</title>
      </Helmet>
      <div className="w-full mx-auto max-w-md p-8 space-y-3 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center text-[#4B7BEC]">
          Sing In to Continue Access
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <span
              className="absolute right-2 bottom-8"
              onClick={() => setShowPass(!showPass)}
            >
              {!showPass ? (
                <FaEye className="text-xl"></FaEye>
              ) : (
                <FaEyeSlash className="text-xl"></FaEyeSlash>
              )}
            </span>
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-[#6C63FF] hover:bg-[#3F3D55] shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30  duration-300 cursor-pointer">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleLogin}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FcGoogle className="text-4xl" />
          </button>
          <button
            onClick={handleFacebookLogin}
            aria-label="Log in with facebook"
            className="p-3 rounded-sm"
          >
            <FaFacebook className="text-4xl text-blue-700" />
          </button>
          <button
            onClick={handleGitHubLogin}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm"
          >
            <FaGithub className="text-4xl text-secondary" />
          </button>
        </div>
        <p className="text-sm text-center sm:px-6 dark:text-gray-600">
          Dont have an account?
          <Link to="/register" className="text-blue-600 link-hover ml-1">
            Sing Up
          </Link>
        </p>
      </div>
      <div className="rounded-2xl relative hidden lg:block">
        <img
          className="rounded-2xl h-full"
          src="https://i.ibb.co/wMydrvh/Thumbnails-5.png"
        />
        <h1
          className="absolute top-[2%] left-[30%] text-4xl text-end pr-10  font-bold overflow-hidden
        "
        >
          New here? Register now and start exploring!
        </h1>
        <Link
          to="/register"
          className="text-white text-xl font-bold link-hover ml-1 absolute bottom-[48%] left-[19%]"
        >
          Sing Up
        </Link>
        <h1 className="text-sm font-semibold text-center text-Black absolute bottom-[39%] left-[17%]">
          If You Dont have <br /> an account?
        </h1>
      </div>
    </div>
  );
};

export default Login;
