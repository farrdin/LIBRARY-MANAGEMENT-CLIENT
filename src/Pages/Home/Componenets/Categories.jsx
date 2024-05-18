import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactiveButton from "reactive-button";

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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {uniqueCategories.map((categoryName, index) => {
        const category = categories.find((c) => c.cname === categoryName);
        return (
          <div
            key={index}
            className="w-full  border rounded-2xl text-center flex flex-col gap-5 p-5 "
          >
            <div>
              <img
                className="rounded-full w-[200px] mx-auto h-[200px]"
                src={category.cimage}
              />
              <p> category : {category.cname}</p>
            </div>
            <Link to={`/category/${category.cname}`}>
              <ReactiveButton
                shadow
                rounded
                idleText={
                  <span className="text-lg font-semibold">See Books</span>
                }
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
