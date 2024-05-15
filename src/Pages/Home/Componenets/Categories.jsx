import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [defaultCollection, setDefaultCollection] = useState([]);
  useEffect(() => {
    fetch("Api.json")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.map((book) => book.category)),
        ];
        setDefaultCollection(uniqueCategories);
      });
  }, []);
  return (
    <div id="category" className="grid grid-cols-3 gap-4">
      {defaultCollection.map((category, index) => (
        <div
          key={index}
          className="w-full  border rounded-2xl bg-blue-500 text-center flex flex-col gap-5 p-5 "
        >
          <img
            className="rounded-full w-[200px] mx-auto h-[200px]"
            src={category}
          />
          <p> category : {category}</p>
          <Link to={`/category/${category}`}>
            <button className="btn btn-secondary">See Categories</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
