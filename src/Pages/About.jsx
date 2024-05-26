import { Helmet } from "react-helmet-async";
import {
  FaRocket,
  FaRegHeart,
  FaAddressCard,
  FaBook,
  FaBookReader,
  FaMedal,
} from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { LuLeaf } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { IoMail } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>KS | About</title>
      </Helmet>
      <div className="text-center my-20">
        <h1 className="text-4xl font-semibold text-[#4F5CC1]">ABOUT US</h1>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-[#4F5CC1]" />
          <span className="absolute  -translate-x-1/2  left-1/2 dark:text-white dark:bg-[#4F5CC1] rounded-full">
            <CiStar />
          </span>
        </div>
        <p className="text-base font-medium w-2/3 mx-auto">
          Knowledge Shelf is an online library platform where users can explore
          an extensive collection of books, borrow them with ease, and return
          them seamlessly.
        </p>
      </div>
      <div className="w-2/3 space-y-3 my-10">
        <div className="flex ">
          <CiStar className="bg-[#4F5CC1] rounded-full text-xl" />
          <CiStar className="bg-[#4F5CC1] rounded-full text-xl" />
          <CiStar className="bg-[#4F5CC1] rounded-full text-xl" />
        </div>
        <p className="text-base font-medium">
          The website facilitates efficient book management, allowing
          administrators to add, update, and categorize books within the
          collection. Users can easily browse the catalog, check book
          availability, and borrow or return items using their accounts.
        </p>
      </div>
      <div className="w-full flex">
        <div className=" w-2/3 grid grid-cols-2 gap-5 p-5">
          <div className=" space-y-2 p-2">
            <h1 className="flex items-center gap-2 text-sm font-semibold">
              <FaAddressCard className="text-2xl" />
              <hr className="w-28 border-[#4F5CC1]" />
            </h1>
            <h1 className="text-xl font-semibold">Member Card </h1>
            <p className="text-sm font-medium">
              Unlock exclusive benefits! Enjoy early access to new releases,
              discounts, and special events. Join our community today.
            </p>
          </div>
          <div className=" space-y-2 p-2">
            <h1 className="flex items-center gap-2">
              <FaMedal className="text-2xl" />
              <hr className="w-28 border-[#4F5CC1]" />
            </h1>
            <h1 className="text-xl font-semibold">High Quality Books </h1>
            <p className="text-sm font-medium">
              Discover our collection of top-quality books. From classics to
              bestsellers, we ensure every book is a masterpiece.
            </p>
          </div>
          <div className=" space-y-2 p-2">
            <h1 className="flex items-center gap-2">
              <FaBookReader className="text-2xl" />
              <hr className="w-28 border-[#4F5CC1]" />
            </h1>
            <h1 className="text-xl font-semibold">Free All Books</h1>
            <p className="text-sm font-medium">
              Access thousands of free books in our library. Enjoy fiction,
              non-fiction, and academic texts at no cost.
            </p>
          </div>
          <div className=" space-y-2 p-2">
            <h1 className="flex items-center gap-2">
              <FaBook className="text-2xl" />
              <hr className="w-28 border-[#4F5CC1]" />
            </h1>
            <h1 className="text-xl font-semibold">Up to Date Books</h1>
            <p className="text-sm font-medium">
              Stay current with our updated collection. We offer the latest
              publications and bestsellers for your reading pleasure.
            </p>
          </div>
        </div>
        <div className="w-1/3">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="h-80 rounded-xl w-[90%] mx-auto"
                src="https://i.ibb.co/Np6LnWn/Shelf-1.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-80 rounded-xl w-[90%] mx-auto"
                src="https://i.ibb.co/9bgVMP7/Shelf-1.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-80 rounded-xl w-[90%] mx-auto"
                src="https://i.ibb.co/ZSRrZBV/Shelf-3.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-80 rounded-xl w-[90%] mx-auto"
                src="https://i.ibb.co/PCjWRVy/Shelf-1.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-80 rounded-xl w-[90%] mx-auto"
                src="https://i.ibb.co/zW3WN03/Shelf-4.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-80 rounded-xl w-[90%] mx-auto"
                src="https://i.ibb.co/S6RBGF0/Shelf-5.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-80 rounded-xl w-[90%] mx-auto"
                src="https://i.ibb.co/c2C8SH7/Shelf-6.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-80 rounded-xl w-[90%] mx-auto"
                src="https://i.ibb.co/sbgswCp/Shelf-7.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-80 rounded-xl w-[90%] mx-auto"
                src="https://i.ibb.co/WgpJZmW/Shelf-9.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <hr className="my-5 border-[#4F5CC1]" />
      <div className="flex justify-around border-r border-l border-[#4F5CC1]">
        <span className="flex items-center gap-3">
          <FaRocket className="text-3xl" />
          <div>
            <p className="text-base font-bold">Fast Delivery</p>
            <p className="text-xs font-medium">Shipping Worldwide</p>
          </div>
        </span>
        <span className="flex items-center gap-3">
          <MdOutlineDiscount className="text-3xl" />
          <div>
            <p className="text-base font-bold">Open Discount</p>
            <p className="text-xs font-medium">Offering Open Discount</p>
          </div>
        </span>
        <span className="flex items-center gap-3">
          <LuLeaf className="text-3xl" />
          <div>
            <p className="text-base font-bold">Eyes on Quality</p>
            <p className="text-xs font-medium">Publishing Quality work</p>
          </div>
        </span>
        <span className="flex items-center gap-3">
          <FaRegHeart className="text-3xl" />
          <div>
            <p className="text-base font-bold">24/7 Support</p>
            <p className="text-xs font-medium">Serving Every Moments</p>
          </div>
        </span>
      </div>
      <hr className="my-5 border-[#4F5CC1]" />
      <div className="flex justify-around mt-20">
        <div className="flex flex-col border-r pr-3 border-[#4F5CC1] space-y-3">
          <div className="flex items-center">
            <img src="https://i.ibb.co/jbPptgf/logo.png" className="h-16" />
            <h1 className="text-4xl font-bold">Knowledge Shelf</h1>
          </div>
          <span className="flex items-center gap-2 text-sm font-semibold">
            <BsBuildings />
            Suit: #7, Rose world Building, street #2, At236t Manchester
          </span>
          <span className="flex items-center gap-2 text-sm font-semibold">
            <LuPhone />
            0800 12345-678-89
          </span>
          <span className="flex items-center gap-2 text-sm font-semibold">
            <LuPhone />
            +4123-4568-68
          </span>
          <span className="flex items-center gap-2 text-sm font-semibold">
            <GoClock />
            Serving 7 days a week from 9am-5pm
          </span>
          <span className="flex items-center gap-2 text-sm font-semibold">
            <IoMail />
            Knowledge@shelf.com
          </span>
          <span className="flex items-center gap-2 text-sm font-semibold">
            <IoMail />
            ks@home.com
          </span>
        </div>
        <div>
          <h1 className="text-xl font-bold">Shipping & Help Information</h1>
          <hr className="my-5 border-[#4F5CC1] " />
          <div className="flex gap-10 ml-4">
            <ul className="list-disc text-sm font-medium space-y-1">
              <li className="link-hover">terms of use</li>
              <li className="link-hover">terms of sale</li>
              <li className="link-hover">returns</li>
              <li className="link-hover">Privacy</li>
              <li className="link-hover">cookies</li>
              <li className="link-hover">contact us</li>
              <li className="link-hover">Our Affiliates</li>
              <li className="link-hover">Vision & Aim</li>
            </ul>
            <ul className="list-disc  text-sm font-medium space-y-1">
              <li className="link-hover">Our Story</li>
              <li className="link-hover">Meet Our Team</li>
              <li className="link-hover">FAQ</li>
              <li className="link-hover">Testimonials</li>
              <li className="link-hover">Join Our Teams</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold">Top Selling Authors</h1>
          <hr className="my-5 border-[#4F5CC1]" />
          <div className="p-2 space-y-3">
            <div className="flex gap-3">
              <div>
                <img
                  src="https://i.ibb.co/wzb4y9b/Authors-1.jpg"
                  className="h-[50px] w-[50px]"
                  alt=""
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-base font-bold">George Orwell</h1>
                <p className="text-xs font-normal">21,658 Published Books</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <img
                  src="https://i.ibb.co/WgRpKtJ/Authors-1.png"
                  className="h-[50px] w-[50px]"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-base font-bold">Jane Austen</h1>
                <p className="text-xs font-normal">11,843 Published Books</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <img
                  src="https://i.ibb.co/WybkXYw/Authors-2.jpg"
                  className="h-[50px] w-[50px]"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-base font-bold">F. Scott Fitzgerald</h1>
                <p className="text-xs font-normal">31,215 Published Books</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
