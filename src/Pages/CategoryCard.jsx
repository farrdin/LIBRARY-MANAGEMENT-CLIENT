import ReactiveButton from "reactive-button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";

const CategoryCard = () => {
  const { categoryName } = useParams();
  URL;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/Api.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredBooks = data.filter(
          (book) => book.category.cname === categoryName
        );
        setBooks(filteredBooks);
      });
  }, [categoryName]);
  return (
    <div className="border-t border-b rounded-2xl p-10 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {books.map((book, index) => (
        <div
          key={index}
          className=" space-y-8 p-5 border rounded-xl flex flex-col"
        >
          <div className="flex justify-center flex-grow">
            <img src={book.image} className="rounded-xl h-48 " />
          </div>
          <div className="space-y-2">
            <h1>Book Name : {book.name}</h1>
            <h1>Author Name : {book.authorName}</h1>
            <h1>Category : {book.category.cname}</h1>
            <h1>
              <ReactStarsRating
                isEdit={false}
                primaryColor="yellow"
                secondaryColor="gray"
                className="flex"
                value={book.rating}
              />
            </h1>
          </div>
          <div className="text-center">
            <Link to={`/details/${book._id}`}>
              <ReactiveButton
                shadow
                rounded
                idleText={
                  <span className="text-lg font-semibold">View Details</span>
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
