import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import ReactiveButton from "reactive-button";

const Update = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [upBooks, setUpBooks] = useState([]);
  const url = "https://prb9-a11.vercel.app/all";

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        const a = data.find((b) => b._id === id);
        setUpBooks(a);
      });
  }, [url]);

  useEffect(() => {
    fetch("https://prb9-a11.vercel.app/all", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        const cat = data.map((item) => item.category);
        setCategories(cat);

        const uniqueC = [...new Set(cat.map((c) => c.cname))];
        setUniqueCategories(uniqueC);
      });
  }, []);

  const handleupBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.bName.value;
    const authorName = form.aName.value;
    const rating = form.rating.value;
    const image = form.photo.value;
    const cname = form.category.value;
    const cimage = form.coverPhoto.value;

    const update = {
      name: name,
      authorName: authorName,
      rating: rating,
      image: image,
      category: {
        cname: cname,
        cimage: cimage,
      },
    };

    fetch(`https://prb9-a11.vercel.app/all/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated Successfully!",
            text: "You clicked the button!",
            icon: "success",
            timer: 4000,
          });
          setTimeout(() => {
            navigate(location?.state ? location.state : "/all");
          }, 1500);
        } else {
          toast.error("Failed to update the book.");
        }
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        toast.error("An error occurred while updating the book.");
      });
  };
  return (
    <div className="mt-20">
      <Helmet>
        <title>KS | Update Book</title>
      </Helmet>
      <section className="p-10 rounded-2xl shadow-xl">
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
                defaultValue={upBooks.name || ""}
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
                defaultValue={upBooks.authorName || ""}
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
              <label htmlFor="coverPhoto" className="text-sm">
                Category Cover Photo URL
              </label>
              <input
                defaultValue={upBooks.category ? upBooks.category.cimage : ""}
                name="coverPhoto"
                id="coverPhoto"
                type="text"
                placeholder="Cover Photo URL"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="rating" className="text-sm">
                Rating
              </label>
              <input
                max={5}
                min={0}
                step={0.1}
                defaultValue={upBooks.rating || ""}
                name="rating"
                id="rating"
                type="number"
                placeholder="Rating"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3 mt-6 w-full">
              <select
                name="category"
                className="select bg-[#3F68C7] text-white w-full"
                value={upBooks.category ? upBooks.category.cname : ""}
                onChange={(e) =>
                  setUpBooks({
                    ...upBooks,
                    category: { cname: e.target.value },
                  })
                }
              >
                <option disabled value="">
                  -- Select Category --
                </option>
                {uniqueCategories.map((categoryName, index) => {
                  const category = categories.find(
                    (c) => c.cname === categoryName
                  );
                  return (
                    <option key={index} value={categoryName}>
                      {category.cname}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <ReactiveButton
              size="large"
              width="300px"
              rounded
              successText="Done"
              shadow
              type={"submit"}
              idleText="Update Book"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Update;
