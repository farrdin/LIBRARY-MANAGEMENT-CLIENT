import {
  AiFillFacebook,
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="#" className="link link-hover">
          Contact
        </Link>
        <Link to="/categories" className="link link-hover">
          Categories
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <AiFillFacebook className="text-3xl bg-base-100 box-content px-3 py-3 rounded-full shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 cursor-pointer hover:text-blue-600" />
          <AiFillGoogleCircle className="text-3xl bg-base-100 box-content px-3 py-3 rounded-full shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 cursor-pointer hover:text-red-600" />
          <AiFillGithub className="text-3xl bg-base-100 box-content px-3 py-3 rounded-full shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 cursor-pointer hover:text-secondary" />
          <AiFillInstagram className="text-3xl bg-base-100 box-content px-3 py-3 rounded-full shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 cursor-pointer hover:text-[#ED045A]" />
          <AiFillTwitterCircle className="text-3xl bg-base-100 box-content px-3 py-3 rounded-full shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 cursor-pointer hover:text-blue-600" />
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Knowledge Shelf Library</p>
      </aside>
    </footer>
  );
};

export default Footer;
