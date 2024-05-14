import ReactiveButton from "reactive-button";
import author from "../assets/Authors.jpg";
import { Link } from "react-router-dom";

const CategoryCard = () => {
  return (
    <div className="border rounded-2xl p-10 mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
      <div className=" space-y-3 p-5 border rounded-xl">
        <div className=" flex items-center">
          <img src={author} className="rounded-xl" />
        </div>

        <h1>Book Name : The Cats and Eye</h1>
        <h1>Author Name : Justin Trudo</h1>
        <h1>Category : History</h1>
        <h1>Rating : 4</h1>

        <Link to="/details">
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
      <div className=" space-y-3 p-5 border rounded-xl">
        <div className=" flex items-center">
          <img src={author} className="rounded-xl" />
        </div>

        <h1>Book Name : The Cats and Eye</h1>
        <h1>Author Name : Justin Trudo</h1>
        <h1>Category : History</h1>
        <h1>Rating : 4</h1>
        <Link to="/details">
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
      <div className=" space-y-3 p-5 border rounded-xl">
        <div className=" flex items-center">
          <img src={author} className="rounded-xl" />
        </div>

        <h1>Book Name : The Cats and Eye</h1>
        <h1>Author Name : Justin Trudo</h1>
        <h1>Category : History</h1>
        <h1>Rating : 4</h1>
        <Link to="/details">
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
      <div className=" space-y-3 p-5 border rounded-xl">
        <div className=" flex items-center">
          <img src={author} className="rounded-xl" />
        </div>

        <h1>Book Name : The Cats and Eye</h1>
        <h1>Author Name : Justin Trudo</h1>
        <h1>Category : History</h1>
        <h1>Rating : 4</h1>
        <Link to="/details">
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
      <div className=" space-y-3 p-5 border rounded-xl">
        <div className=" flex items-center">
          <img src={author} className="rounded-xl" />
        </div>

        <h1>Book Name : The Cats and Eye</h1>
        <h1>Author Name : Justin Trudo</h1>
        <h1>Category : History</h1>
        <h1>Rating : 4</h1>
        <Link to="/details">
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
      <div className=" space-y-3 p-5 border rounded-xl">
        <div className=" flex items-center">
          <img src={author} className="rounded-xl" />
        </div>

        <h1>Book Name : The Cats and Eye</h1>
        <h1>Author Name : Justin Trudo</h1>
        <h1>Category : History</h1>
        <h1>Rating : 4</h1>
        <Link to="/details">
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
      <div className=" space-y-3 p-5 border rounded-xl">
        <div className=" flex items-center">
          <img src={author} className="rounded-xl" />
        </div>

        <h1>Book Name : The Cats and Eye</h1>
        <h1>Author Name : Justin Trudo</h1>
        <h1>Category : History</h1>
        <h1>Rating : 4</h1>
        <Link to="/details">
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
      <div className=" space-y-3 p-5 border rounded-xl">
        <div className=" flex items-center">
          <img src={author} className="rounded-xl" />
        </div>

        <h1>Book Name : The Cats and Eye</h1>
        <h1>Author Name : Justin Trudo</h1>
        <h1>Category : History</h1>
        <h1>Rating : 4</h1>
        <Link to="/details">
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
    </div>
  );
};

export default CategoryCard;
