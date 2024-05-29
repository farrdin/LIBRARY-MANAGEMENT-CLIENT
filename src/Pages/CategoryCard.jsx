import { Helmet } from "react-helmet-async";
import ReactiveButton from "reactive-button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";

const CategoryCard = () => {
  const { categoryName } = useParams();
  URL;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://prb9-a11.vercel.app/all", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        const filteredBooks = data.filter(
          (book) => book.category.cname === categoryName
        );
        setBooks(filteredBooks);
      });
  }, [categoryName]);
  return (
    <div className="p-10 mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <Helmet>
        <title>KS | Catagories</title>
      </Helmet>
      {books.map((book, index) => (
        <div
          key={index}
          className="border rounded shadow-2xl flex flex-col p-3 space-y-3"
        >
          <div className="flex flex-col items-center flex-grow">
            <img src={book.image} className="rounded-xl h-48 mb-3" />

            <hr className="border w-full" />
          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold">{book.name}</span>
            <span className="text-sm font-normal">By : {book.authorName}</span>
            <span className="w-full text-base text-[#23BE0A] font-medium bg-[#23BE0A0D] mt-4 flex justify-between items-center">
              #{book.category.cname}
              <ReactStarsRating
                size="13"
                isEdit={false}
                primaryColor="gold"
                secondaryColor="gray"
                className="flex"
                value={book.rating}
              />
            </span>
          </div>
          <div className="text-center">
            <Link to={`/details/${book._id}`}>
              <ReactiveButton
                size="tiny"
                shadow
                rounded
                idleText={
                  <span className="text-sm font-semibold">View Details</span>
                }
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
