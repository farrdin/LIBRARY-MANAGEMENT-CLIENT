import ReactiveButton from "reactive-button";

const AddBook = () => {
  const handleAddBook = () => {};

  return (
    <div className="mt-20">
      <section className="p-10 bg-[#E6E6FA] rounded-2xl shadow-xl">
        <form
          onSubmit={handleAddBook}
          className="container flex flex-col mx-auto space-y-12"
        >
          <div className="space-y-2 col-span-full lg:col-span-1">
            <h1 className="font-semibold text-4xl text-center text-[#4572DB]">
              Add New Books
            </h1>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Book Name
              </label>
              <input
                id="Book"
                type="text"
                placeholder="Book name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Author Name
              </label>
              <input
                id="author"
                type="text"
                placeholder="Author name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Category
              </label>
              <input
                id="category"
                type="category"
                placeholder="Category"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Rating
              </label>
              <input
                id="rating"
                type="rating"
                placeholder="Rating"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Description
              </label>
              <textarea
                id="address"
                type="text"
                placeholder="Description"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                Quantity
              </label>
              <input
                id="city"
                type="text"
                placeholder="Amount"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-4">
              <label htmlFor="state" className="text-sm">
                Image URL
              </label>
              <input
                id="state"
                type="text"
                placeholder="Image Link"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <ReactiveButton
              shadow
              rounded
              idleText={<span className="text-lg font-bold">Add Book</span>}
              size="large"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddBook;
