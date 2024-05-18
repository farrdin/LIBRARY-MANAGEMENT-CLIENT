import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthProvider";

const AddBook = () => {
  const { user } = useContext(AuthContext);
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.book.value;
    const author = form.author.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const email = user?.email;
    const addItem = {
      email: email,
      image: photo,
      name: name,
      quantity: quantity,
      authorName: author,
      category: category,
      shortDescription: description,
      rating: rating,
    };

    fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Booked Succesfully");
        }
      });
  };

  return (
    <div className="mt-20">
      <section className="p-10 bg-[#E6E6FA] rounded-2xl shadow-xl">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <h1 className="font-semibold text-4xl text-center text-[#4572DB] mb-10">
            Add New Books
          </h1>
        </div>
        <form
          onSubmit={handleAddBook}
          className="container flex flex-col mx-auto space-y-12"
        >
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="book" className="text-sm">
                Book Name
              </label>
              <input
                required
                name="book"
                id="Book"
                type="text"
                placeholder="Book name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="author" className="text-sm">
                Author Name
              </label>
              <input
                required
                name="author"
                id="author"
                type="text"
                placeholder="Author name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="category" className="text-sm">
                Category
              </label>
              <input
                required
                name="category"
                id="category"
                type="text"
                placeholder="Category"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="rating" className="text-sm">
                Rating
              </label>
              <input
                required
                max={5}
                min={0}
                name="rating"
                id="rating"
                type="number"
                placeholder="Rating"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full">
              <label for="description" className="text-sm">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                type="text"
                placeholder="Description"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="quantity" className="text-sm">
                Quantity
              </label>
              <input
                name="quantity"
                id="quantity"
                type="number"
                placeholder="Amount"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-4">
              <label for="photo" className="text-sm">
                Image URL
              </label>
              <input
                name="photo"
                id="photo"
                type="text"
                placeholder="Image Link"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                className="btn btn-secondary"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddBook;
