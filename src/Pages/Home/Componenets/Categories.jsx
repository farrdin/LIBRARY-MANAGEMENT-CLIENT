import { Link } from "react-router-dom";
import author from "../../../assets/Authors.jpg";

const Categories = () => {
  return (
    <div id="category" className="grid grid-cols-3 gap-4">
      <div className="w-full  border rounded-2xl bg-blue-500 text-center flex flex-col gap-5 p-5 ">
        <img
          className="rounded-full w-[200px] mx-auto h-[200px]"
          src={author}
          alt=""
        />
        <p> category :RealStics</p>
        <Link to="/category">
          <button className="btn btn-secondary">See Categories</button>
        </Link>
      </div>
      <div className="w-full  border rounded-2xl bg-blue-500 text-center flex flex-col gap-5 p-5 ">
        <img
          className="rounded-full w-[200px] mx-auto h-[200px]"
          src={author}
          alt=""
        />
        <p> category :RealStics</p>
        <Link to="/category">
          <button className="btn btn-secondary">See Categories</button>
        </Link>
      </div>
      <div className="w-full  border rounded-2xl bg-blue-500 text-center flex flex-col gap-5 p-5 ">
        <img
          className="rounded-full w-[200px] mx-auto h-[200px]"
          src={author}
          alt=""
        />
        <p> category :RealStics</p>
        <Link to="/category">
          <button className="btn btn-secondary">See Categories</button>
        </Link>
      </div>
      <div className="w-full  border rounded-2xl bg-blue-500 text-center flex flex-col gap-5 p-5 ">
        <img
          className="rounded-full w-[200px] mx-auto h-[200px]"
          src={author}
          alt=""
        />
        <p> category :RealStics</p>
        <Link to="/category">
          <button className="btn btn-secondary">See Categories</button>
        </Link>
      </div>
      <div className="w-full  border rounded-2xl bg-blue-500 text-center flex flex-col gap-5 p-5 ">
        <img
          className="rounded-full w-[200px] mx-auto h-[200px]"
          src={author}
          alt=""
        />
        <p> category :RealStics</p>
        <Link to="/category">
          <button className="btn btn-secondary">See Categories</button>
        </Link>
      </div>
      <div className="w-full  border rounded-2xl bg-blue-500 text-center flex flex-col gap-5 p-5 ">
        <img
          className="rounded-full w-[200px] mx-auto h-[200px]"
          src={author}
          alt=""
        />
        <p> category :RealStics</p>
        <Link to="/category">
          <button className="btn btn-secondary">See Categories</button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
