import ReactiveButton from "reactive-button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryCard = () => {
  const { category } = useParams(); // Get the category parameter from the URL
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch all books
    fetch("/Api.json")
      .then((res) => res.json())
      .then((data) => {
        // Filter books based on the selected category
        const filteredBooks = data.filter((book) => book.category === category);
        setBooks(filteredBooks);
      });
  }, [category]);
  console.log(books);
  return (
    <div className="border rounded-2xl p-10 mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {books.map((book, index) => (
        <div key={index} className=" space-y-3 p-5 border rounded-xl">
          <div className=" flex items-center">
            <img src={book.image} className="rounded-xl" />
          </div>

          <h1>Book Name : {book.name}</h1>
          <h1>Author Name : {book.authorName}</h1>
          <h1>Category : {book.category}</h1>
          <h1>Rating : {book.rating}</h1>

          <Link to={`/details/${book._id}`}>
            <div className="text-center mt-5">
              <ReactiveButton
                shadow
                rounded
                idleText={
                  <span className="text-lg font-semibold">View Details</span>
                }
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
