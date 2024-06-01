import { Helmet } from "react-helmet-async";
import ReactiveButton from "reactive-button";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const BookDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://prb9-a11.vercel.app/all", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        const book = data.find((book) => book._id === id);
        setDetails(book);
      });
  }, [id]);

  const handleBorrowBook = (e) => {
    e.preventDefault();
    fetch(
      `https://prb9-a11.vercel.app/borrowed?email=${encodeURIComponent(
        user?.email
      )}&id=${details._id}`,
      { credentials: "include" }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.find((f) => f.id === details._id)) {
          toast.error(
            "You have already borrowed this book. Please return it before borrowing again."
          );
          return;
        }
        const form = e.target;
        const email = user?.email;
        const name = user?.displayName;
        const returnDate = form.date.value
          ? new Date(form.date.value).toLocaleDateString(
              ("en-US",
              {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })
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

        fetch("https://prb9-a11.vercel.app/borrowed", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(BorrowItem),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Congratulations!",
                text: "Borrowed Book  Successfully!",
                icon: "success",
                timer: 2000,
              });
              document.getElementById("my_modal_5").close();
              setStartDate(new Date());
              setReturnDate(new Date());
            }
          });

        fetch(`https://prb9-a11.vercel.app/all/decr/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            $inc: { quantity: -1 },
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              setDetails((prevDetails) => ({
                ...prevDetails,
                quantity: prevDetails.quantity - 1,
              }));
            }
          });
      });
  };
  return (
    <div className="mt-20  lg:flex gap-5 justify-between border p-5 rounded-xl">
      <Helmet>
        <title>KS | Details</title>
      </Helmet>
      <div className="mb-10 lg:mb-0 lg:w-[45%] border rounded flex justify-center">
        <img src={details.image} className="min-h-[calc(100vh-100px)] p-20" />
      </div>
      <div className="lg:w-[55%] flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h1 className=" text-4xl font-bold">{details.name}</h1>
          <p className=" text-xl font-medium">Author : {details.authorName}</p>
        </div>
        <hr />
        <div>
          <span className="text-xl font  font-medium">
            {details?.category?.cname}
          </span>
          <hr className="my-3" />
          <p className=" font-normal text-base leading-7">
            <span className=" font-bold text-base leading-7">Review :</span>
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
            disabled={details?.quantity < 1}
          />
          {details?.quantity < 1 && (
            <>
              <h1 className="text-sm font-bold text-red-600">
                This book is out of stock now*
              </h1>
            </>
          )}

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
                    disabled
                    defaultValue={user.displayName}
                    name="name"
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-md input input-bordered"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 mb-10">
                  <label htmlFor="email" className="text-sm">
                    Your Email
                  </label>
                  <input
                    defaultValue={user.email.replace(
                      /(?<=.{1}).*(?=@)/,
                      "******"
                    )}
                    disabled
                    name="email"
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-md input input-bordered"
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
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="px-8 rounded-lg"
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
                <div className="modal-action flex justify-center gap-2">
                  <ReactiveButton
                    shadow
                    rounded
                    type={"submit"}
                    idleText="Submit"
                  />
                  <ReactiveButton
                    shadow
                    rounded
                    onClick={() =>
                      document.getElementById("my_modal_5").close()
                    }
                    idleText="Cancel"
                  />
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
