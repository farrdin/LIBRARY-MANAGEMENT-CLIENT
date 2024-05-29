import { Link } from "react-router-dom";
import ReactiveButton from "reactive-button";

const EasyBook = () => {
  return (
    <div>
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Easy B<span className="dark:text-[#4F5CC1]">oo</span>king System
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            "Experience Hassle-Free Scheduling with Our Easy
            <br className="hidden md:inline lg:hidden" />
            Booking System."Your Ultimate Solution for Seamless and Quick
            Bookings
          </p>
          <div>
            <ReactiveButton
              size="large"
              shadow
              rounded
              idleText={<Link to="/all"> Discover More</Link>}
            />
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://i.ibb.co/G746Mnf/Thumbnails-4.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EasyBook;
