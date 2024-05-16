import ReactiveButton from "reactive-button";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const BookDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/all")
      .then((res) => res.json())
      .then((data) => {
        const book = data.find((book) => book._id === id);
        setDetails(book);
      });
  }, [id]);

  const handleBorrowBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = user?.displayName;
    const returnDate = form.date.value
      ? new Date(form.date.value).toLocaleDateString(
          ("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })
        )
      : "";
    const borrowDate = startDate.toLocaleDateString(
      ("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })
    );
    const BorrowItem = {
      id: details._id,
      bookName: details.name,
      bookImage: details.image,
      bookCategory: details?.category?.cname,
      email: email,
      name: name,
      borrow: borrowDate,
      return: returnDate,
    };

    fetch("http://localhost:5000/borrowed", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(BorrowItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Booked Succesfully");
        }
      });
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
            {details?.category?.cname}
          </span>
          <hr className="my-3" />
          <p className="text-[#131313B2] font-normal text-base leading-7">
            <span className="text-[#131313] font-bold text-base leading-7">
              Review :
            </span>
            {details.shortDescription}
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-base text-[#23BE0A] font-medium bg-[#23BE0A0D] p-1">
            #Rating:
          </span>
          <span className="w-full text-base text-[#23BE0A] font-medium bg-[#23BE0A0D] p-1">
            <ReactStarsRating
              isEdit={false}
              primaryColor="yellow"
              secondaryColor="gray"
              className="flex"
              value={details.rating}
            />
          </span>
          <span className="text-center w-full text-base text-[#23BE0A] font-medium bg-[#23BE0A0D] p-1">
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
                  <label htmlFor="name" className="text-sm">
                    Your Name
                  </label>
                  <input
                    defaultValue={user.displayName}
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
                    Your Email
                  </label>
                  <input
                    defaultValue={user.email}
                    required
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                  <div>
                    <label for="date" className="mr-2 text-base font-bold">
                      Select Return Date:
                    </label>
                    <input
                      required
                      name="date"
                      id="date"
                      type="date"
                      className="px-6 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date-picker"
                      className="mr-2 text-base font-bold"
                    >
                      Borrow Date:
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
