import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ReactTyped } from "react-typed";
import ReactiveButton from "reactive-button";
import Banner1 from "../../../assets/Banner1.jpg";
import Banner2 from "../../../assets/Banner2.jpg";
import Banner3 from "../../../assets/Banner3.jpg";

const Banner = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="mt-[69px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img className="w-full rounded-2xl" src={Banner1} alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10 bg-gradient-to-l from-transparent to-black space-y-10 ">
              <h1 className="text-center leading-10 text-4xl font-bold w-2/3 mx-auto">
                <ReactTyped
                  strings={[
                    "Uncover Literary Treasures:",
                    "Where Books Speak with Every Keystroke",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={Infinity}
                />
              </h1>
              <ReactiveButton
                size="large"
                onClick={() => scrollToSection("category")}
                idleText={<span> View Categories</span>}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full rounded-2xl" src={Banner2} alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10 bg-gradient-to-l from-transparent to-black space-y-10">
              <h1 className="text-center leading-10 text-4xl font-bold w-2/3 mx-auto">
                <ReactTyped
                  strings={[
                    "Uncover Literary Treasures:",
                    "Where Books Speak with Every Keystroke",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={Infinity}
                />
              </h1>
              <ReactiveButton
                size="large"
                onClick={() => scrollToSection("category")}
                idleText={<span> View Categories</span>}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full rounded-2xl" src={Banner3} alt="Banner 3" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10 bg-gradient-to-l from-transparent to-black space-y-10">
              <h1 className="text-center leading-10 text-4xl font-bold w-2/3 mx-auto">
                <ReactTyped
                  strings={[
                    "Uncover Literary Treasures:",
                    "Where Books Speak with Every Keystroke",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={Infinity}
                />
              </h1>
              <ReactiveButton
                size="large"
                onClick={() => scrollToSection("category")}
                idleText={<span> View Categories</span>}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
