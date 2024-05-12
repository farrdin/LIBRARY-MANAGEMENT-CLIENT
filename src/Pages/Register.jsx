import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="border p-5 m-10 rounded-3xl bg-base-300">
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-base-200 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Create New Account</h1>
        <form noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Name
            </label>
            <input
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
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
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
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
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
