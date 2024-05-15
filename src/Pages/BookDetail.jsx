import ReactiveButton from "reactive-button";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    fetch("/Api.json")
      .then((res) => res.json())
      .then((data) => {
        const book = data.find((book) => book._id === id);
        setDetails(book);
      });
  }, [id]);

  const handleBorrowBook = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const date = startDate;
    console.log(email, name, date);
  };

  return (
    <div className="mt-20  lg:flex gap-5 justify-between border p-5 rounded-xl">
      <div className="mb-10 lg:mb-0 lg:w-[45%] border rounded flex justify-center bg-[#1313130D]">
        <img src={details.image} className="min-h-[calc(100vh-100px)] p-20" />
      </div>
      <div className="lg:w-[55%] flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#131313] text-4xl font-bold">{details.name}</h1>
          <p className="text-[#131313CC] text-xl font-medium">
            Author : {details.authorName}
          </p>
        </div>
        <hr />
        <div>
          <span className="text-xl font text-[#131313CC] font-medium">
            {details.category}
          </span>
          <hr className="my-3" />
          <p className="text-[#131313B2] font-normal text-base leading-7">
            <span className="text-[#131313] font-bold text-base leading-7">
              Review :
            </span>
            {details.shortDescription}
          </p>
        </div>
        <div className="flex gap-3">
          <span className="text-base text-[#23BE0A] font-medium bg-[#23BE0A0D] p-1">
            #Rating : {details.rating}
          </span>
          <span className="text-base text-[#23BE0A] font-medium bg-[#23BE0A0D] p-1">
            #Quantity : {details.quantity}
          </span>
        </div>
        <hr />

        <div className="flex-grow flex gap-3">
          <ReactiveButton
            shadow
            outline
            onClick={() => document.getElementById("my_modal_5").showModal()}
            idleText={
              <span className="text-base font-medium">Borrow Book </span>
            }
          />
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box bg-base-300 ">
              <h3 className="font-bold text-lg text-center mb-10">
                Enter Details to Borrow This Book
              </h3>
              <form onSubmit={handleBorrowBook}>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Your Name
                  </label>
                  <input
                    required
                    name="name"
                    id="name "
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 mb-10">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="date-picker"
                    className="mr-2 text-base font-bold"
                  >
                    Select a date:
                  </label>
                  <DatePicker
                    id="date-picker"
                    placeholderText="Select a date"
                    required
                    isClearable
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  {!startDate && (
                    <div style={{ color: "red" }}>This field is required</div>
                  )}
                </div>
                <div className="modal-action flex justify-center gap-5">
                  <input className="btn" type="submit" value="Submit" />
                  <form method="dialog">
                    <button className="btn">Cancle</button>
                  </form>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
