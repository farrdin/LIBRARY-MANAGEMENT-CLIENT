import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactiveButton from "reactive-button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all")
      .then((res) => res.json())
      .then((data) => {
        const cat = data.map((item) => item.category);
        setCategories(cat);
        const uniqueC = [...new Set(cat.map((c) => c.cname))];
        setUniqueCategories(uniqueC);
      });
  }, []);
  return (
    <div
      id="category"
      className="md:flex
    "
    >
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-2/3"
      >
        {uniqueCategories.map((categoryName, index) => {
          const category = categories.find((c) => c.cname === categoryName);
          return (
            <SwiperSlide key={index}>
              <div key={index} className="text-center p-5 space-y-3">
                <img className="h-48 rounded-md" src={category.cimage} />
                <hr />
                <p className="text-lg text-[#23BE0A] font-semibold pb-3">
                  #{category.cname}
                </p>
                <Link to={`/category/${category.cname}`}>
                  <ReactiveButton
                    size="tiny"
                    shadow
                    rounded
                    idleText={
                      <span className="text-xs font-semibold hover:text-black">
                        Show All
                      </span>
                    }
                  />
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Categories;
