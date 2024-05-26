import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import ReactiveButton from "reactive-button";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Borrowed = () => {
  const { user } = useContext(AuthContext);
  const [borrows, setBorrows] = useState([]);
  const url = `http://localhost:5000/borrowed?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBorrows(data));
  }, []);

  const handleReturn = async (id, ide) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ml-2",
        cancelButton: "btn btn-error mr-2",
      },
      buttonsStyling: false,
    });

    const result = await swalWithBootstrapButtons.fire({
      title: "Return This Book?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, return it",
      cancelButtonText: "cancel",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const deleteResponse = await fetch(
          `http://localhost:5000/borrowed/${id}`,
          {
            method: "DELETE",
          }
        );
        const deleteData = await deleteResponse.json();

        if (deleteData.deletedCount > 0) {
          const remaining = borrows.filter((borrow) => borrow._id !== id);
          setBorrows(remaining);

          const updateResponse = await fetch(
            `http://localhost:5000/all/incr/${ide}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                $inc: { quantity: 1 },
              }),
            }
          );
          const updateData = await updateResponse.json();
          console.log("Quantity updated successfully:", updateData);

          swalWithBootstrapButtons.fire({
            title: "Returned!",
            text: "Book has been Returned.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to Return the Book.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while Returning the Book.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Book is  not returned",
        icon: "error",
      });
    }
  };
  return (
    <div className="mt-20">
      <Helmet>
        <title>KS | Borrowed Books</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Book Name</th>
              <th>Category</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
              <th>Return</th>
            </tr>
          </thead>
          <tbody>
            {borrows.map((borrow) => (
              <tr key={borrow._id}>
                <th>
                  <img
                    src={borrow.bookImage}
                    className=" w-12 h-16 rounded-md"
                  />
                </th>
                <td>
                  <p className="font-bold">{borrow.bookName}</p>
                </td>
                <td>{borrow.bookCategory}</td>
                <td>{borrow.borrow}</td>
                <td>{borrow.return}</td>
                <td>
                  <ReactiveButton
                    onClick={() => handleReturn(borrow._id, borrow.id)}
                    size="small"
                    rounded
                    outline
                    shadow
                    idleText={<span className="font-bold text-sm">Return</span>}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Borrowed;
