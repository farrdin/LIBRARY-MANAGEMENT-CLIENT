import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/LvsHwQc/404.png')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="text-center pt-16 space-y-3">
        <span className="text-5xl font-bold text-[#3F3D56] ">Error </span>
        <span className="text-3xl font-medium text-[#3F3D56]">
          Page not found
        </span>
        <p className="font-semibold text-lg text-[#6C63FF]">
          Sorry, the page you are looking for doesnt exist.
        </p>
      </div>
      <div className="flex items-end justify-center min-h-[calc(100vh-165px)]">
        <Link to="/">
          <button className="btn btn-md  lg:btn-lg btn-secondary">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
