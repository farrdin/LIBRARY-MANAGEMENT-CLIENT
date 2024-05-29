import { Helmet } from "react-helmet-async";
import ReactiveButton from "reactive-button";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import ReactStarsRating from "react-awesome-stars-rating";
import { HiViewGrid, HiOutlineViewList } from "react-icons/hi";

const AllBook = () => {
  const { user } = useContext(AuthContext);
  const [addBooks, setAddBooks] = useState([]);
  const [showAvailableBooks, setShowAvailableBooks] = useState(false);
  const [isTableView, setIsTableView] = useState(false);
  const url = "https://prb9-a11.vercel.app/all";
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setAddBooks(data));
  }, []);
  const filteredBooks = addBooks.filter(
    (a) => !showAvailableBooks || a.quantity > 0
  );
  const toggleFilter = () => {
    setShowAvailableBooks(!showAvailableBooks);
  };

  const toggleView = () => {
    setIsTableView(!isTableView);
  };

  return (
    <div className="mt-20">
      <Helmet>
        <title>KS | All Books</title>
      </Helmet>
      <div className="pt-10 mb-20 flex justify-between">
        <div>
          <select
            className="text-lg font-semibold shadow rounded p-2 bg-[#4F5CC1]"
            onChange={toggleFilter}
            value={showAvailableBooks ? "available" : "all"}
          >
            <option className="bg-base-300" disabled value="">
              Filter
            </option>
            <option className="bg-base-300" value="all">
              All
            </option>
            <option className="bg-base-300" value="available">
              Available
            </option>
          </select>
        </div>
        <div>
          <h1 className="text-center">All Books you Found Here</h1>
        </div>
        <div>
          <ReactiveButton
            size="tiny"
            shadow
            rounded
            onClick={toggleView}
            idleText={
              <span className="text-2xl">
                {isTableView ? (
                  <HiViewGrid className="inline-block" />
                ) : (
                  <HiOutlineViewList className="inline-block" />
                )}
              </span>
            }
          />
        </div>
      </div>

      {isTableView ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>Image</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Category</th>
                <th>Ratings</th>
                <th>Actions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((a) => (
                <tr key={a._id} className="text-center">
                  <td>
                    <img
                      src={a.image}
                      alt="Book Cover"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td>{a.name}</td>
                  <td>{a.authorName}</td>
                  <td>{a.category.cname}</td>
                  <td>{a.rating}</td>
                  <td>
                    <Link to={`/details/${a._id}`}>
                      <ReactiveButton
                        size="tiny"
                        shadow
                        rounded
                        idleText={
                          <span className="text-xs font-semibold">Details</span>
                        }
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/update/${a._id}`}>
                      <ReactiveButton
                        size="tiny"
                        shadow
                        rounded
                        idleText={
                          <span className="text-xs font-semibold">Update</span>
                        }
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBooks.map((a) => (
            <div
              className="bg-base-200 shadow-xl items-center p-3 flex flex-row w-full"
              key={a._id}
            >
              <div className="w-1/3 border-r p-1">
                <figure>
                  <img className="h-[160px]" src={a.image} alt="Book Cover" />
                </figure>
                <h1 className="mt-2">
                  <ReactStarsRating
                    size="15"
                    isEdit={false}
                    primaryColor="gold"
                    secondaryColor="gray"
                    className="flex"
                    value={a.rating}
                  />
                </h1>
              </div>
              <div className="ml-4 space-y-2 w-2/3">
                <h2 className="text-lg font-semibold">{a.name}</h2>
                <p className="text-sm font-medium">By: {a.authorName}</p>

                <p className="text-sm font-medium">
                  <span className="w-full text-base text-[#23BE0A] font-medium bg-[#23BE0A0D]  rounded-full mr-1">
                    Category:
                  </span>
                  {a.category.cname}
                </p>
                <div className="space-x-1">
                  <Link to={`/details/${a._id}`} className="text-center">
                    <ReactiveButton
                      size="tiny"
                      shadow
                      rounded
                      idleText={
                        <span className="text-sm font-semibold">Details</span>
                      }
                    />
                  </Link>
                  <Link to={`/update/${a._id}`} className="text-center">
                    <ReactiveButton
                      size="tiny"
                      shadow
                      rounded
                      idleText={
                        <span className="text-sm font-semibold">Update</span>
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBook;
