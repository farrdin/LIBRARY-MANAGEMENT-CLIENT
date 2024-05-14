import ReactiveButton from "reactive-button";

const Update = () => {
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
              Make changes on your Book
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
                Photo URL
              </label>
              <input
                id="photo"
                type="text"
                placeholder="PhotoURL"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Rating
              </label>
              <input
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
            <ReactiveButton
              shadow
              rounded
              idleText={<span className="text-lg font-bold">Update Book</span>}
              size="large"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Update;
