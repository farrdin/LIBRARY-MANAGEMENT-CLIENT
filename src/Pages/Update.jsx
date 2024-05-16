import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [upBooks, setUpBooks] = useState([]);
  const url = `http://localhost:5000/add?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const a = data.find((b) => b._id === id);
        setUpBooks(a);
      });
  }, [url, user?.email]);
  const handleupBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const bName = form.bName.value;
    const aName = form.aName.value;
    const rating = form.rating.value;
    const url = form.photo.value;
    const updatedBook = {
      bName,
      aName,
      rating,
      url,
    };

    fetch(`http://localhost:5000/add/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ bName, aName, rating, url }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully Updated");
        } else {
          alert("Failed to update the book.");
        }
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        alert("An error occurred while updating the book.");
      });
  };
  return (
    <div className="mt-20">
      <section className="p-10 bg-[#E6E6FA] rounded-2xl shadow-xl">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <h1 className="font-semibold text-4xl text-center text-[#4572DB]">
            Make changes on your Book
          </h1>
        </div>
        <form
          onSubmit={handleupBook}
          className="container flex flex-col mx-auto space-y-12"
        >
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="bName" className="text-sm">
                Book Name
              </label>
              <input
                defaultValue={upBooks.bName || ""}
                name="bName"
                id="bName"
                type="text"
                placeholder="Book name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="aName" className="text-sm">
                Author Name
              </label>
              <input
                defaultValue={upBooks.aName || ""}
                name="aName"
                id="aName"
                type="text"
                placeholder="Author name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="photo" className="text-sm">
                Photo URL
              </label>
              <input
                defaultValue={upBooks.image || ""}
                name="photo"
                id="photo"
                type="text"
                placeholder="PhotoURL"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="rating" className="text-sm">
                Rating
              </label>
              <input
                defaultValue={upBooks.rating || ""}
                name="rating"
                id="rating"
                type="text"
                placeholder="Rating"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-6">
              <select className="select bg-[#3F68C7] text-white">
                <option disabled selected className="bg-white text-black">
                  Category
                </option>
                <option className="bg-white text-black">Rating</option>
                <option className="bg-white text-black">Number of pages</option>
                <option className="bg-white text-black">Published year</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value="Update Book"
              className="btn btn-secondary"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Update;
