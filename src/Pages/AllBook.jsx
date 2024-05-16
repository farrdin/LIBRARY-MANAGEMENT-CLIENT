import ReactiveButton from "reactive-button";
import author from "../assets/Authors.jpg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const AllBook = () => {
  const { user } = useContext(AuthContext);
  const [addBooks, setAddBooks] = useState([]);
  const url = `http://localhost:5000/add?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddBooks(data));
  }, []);

  return (
    <div className="mt-20">
      <div className="pt-10 mb-20 flex justify-between">
        <div>FilterButton</div>
        <div>
          <h1 className="text-center">All Books you Found Here</h1>
        </div>
        <div> table view / card View</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {addBooks.map((a) => (
          <div className="card bg-base-200 shadow-xl p-5" key={a._id}>
            <figure>
              <img src={a.image} alt="Shoes" />
            </figure>
            <div className="card-body space-y-2">
              <h2 className="card-title">Book Name :{a.bName}</h2>
              <p>Author Name : {a.aName}</p>
              <p>Category : {a.category}</p>
              <p>Ratings : {a.rating}</p>
              <Link to={`/update/${a._id}`}>
                <ReactiveButton
                  shadow
                  rounded
                  idleText={
                    <span className="text-lg font-semibold">Update</span>
                  }
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBook;
