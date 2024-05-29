import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const AddBook = () => {
  const { user } = useContext(AuthContext);

  const handleAddBook = async (e) => {
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
      category: { cname: category },
      shortDescription: description,
      rating: rating,
    };

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ml-2",
        cancelButton: "btn btn-error mr-2",
      },
      buttonsStyling: false,
    });

    const result = await swalWithBootstrapButtons.fire({
      title: "Are you sure want to Add this book?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "cancel!",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch("https://prb9-a11.vercel.app/all", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(addItem),
        });
        const data = await response.json();
        if (data.insertedId) {
          form.reset();
          swalWithBootstrapButtons.fire({
            title: "Successfully!",
            text: "Your book has been added.",
            icon: "success",
            timer: 2000,
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to add the book.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error adding book:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while adding the book.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your book addition was cancelled.",
        icon: "error",
      });
    }
  };

  return (
    <div className="mt-20">
      <Helmet>
        <title>KS | Add Book</title>
      </Helmet>
      <section className="p-10 rounded-2xl shadow-xl">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <h1 className="font-semibold text-4xl text-center text-[#4F5CC1] mb-10">
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
                id="book"
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
                step={0.1}
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
                required
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
                required
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
                required
                name="photo"
                id="photo"
                type="text"
                placeholder="Image Link"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full">
              <input
                type="submit"
                className="btn bg-[#4F5CC1] w-full"
                value="ADD BOOK"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddBook;
