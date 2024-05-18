import ReactiveButton from "reactive-button";
import author from "../assets/Authors.jpg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const AllBook = () => {
  const { user } = useContext(AuthContext);
  const [addBooks, setAddBooks] = useState([]);
  const [showAvailableBooks, setShowAvailableBooks] = useState(false);
  const [isTableView, setIsTableView] = useState(false);
  const url = `http://localhost:5000/add?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddBooks(data));
  }, []);

  const toggleFilter = () => {
    setShowAvailableBooks(!showAvailableBooks);
  };
  const filteredBooks = addBooks.filter(
    (a) => !showAvailableBooks || a.quantity > 0
  );
  console.log(filteredBooks);
  console.log(addBooks);
  const toggleView = () => {
    setIsTableView(!isTableView);
  };

  return (
    <div className="mt-20">
      <div className="pt-10 mb-20 flex justify-between">
        <div>
          <ReactiveButton
            shadow
            rounded
            onClick={toggleFilter}
            idleText={
              <span className="text-lg font-semibold">
                {showAvailableBooks ? "Show All Books" : "Show Available Books"}
              </span>
            }
          />
        </div>
        <div>
          <h1 className="text-center">All Books you Found Here</h1>
        </div>
        <div>
          <ReactiveButton
            shadow
            rounded
            onClick={toggleView}
            idleText={
              <span className="text-lg font-semibold">
                {isTableView ? "Card View" : "Table View"}
              </span>
            }
          />
        </div>
      </div>

      {isTableView ? (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Image</th>
              <th className="py-2">Book Name</th>
              <th className="py-2">Author Name</th>
              <th className="py-2">Category</th>
              <th className="py-2">Ratings</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((a) => (
              <tr key={a._id}>
                <td className="border px-4 py-2">
                  <img
                    src={a.image}
                    alt="Book Cover"
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="border px-4 py-2">{a.bName}</td>
                <td className="border px-4 py-2">{a.aName}</td>
                <td className="border px-4 py-2">{a.category}</td>
                <td className="border px-4 py-2">{a.rating}</td>
                <td className="border px-4 py-2">
                  <Link to={`/update/${a._id}`}>
                    <ReactiveButton
                      shadow
                      rounded
                      idleText={
                        <span className="text-lg font-semibold">Update</span>
                      }
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBooks.map((a) => (
            <div className="card bg-base-200 shadow-xl p-5" key={a._id}>
              <figure>
                <img src={a.image} alt="Book Cover" />
              </figure>
              <div className="card-body space-y-2">
                <h2 className="card-title">Book Name: {a.bName}</h2>
                <p>Author Name: {a.aName}</p>
                <p>Category: {a.category}</p>
                <p>Ratings: {a.rating}</p>
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
      )}
    </div>
  );
};

export default AllBook;
