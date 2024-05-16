import { useContext, useEffect, useState } from "react";
import ReactiveButton from "reactive-button";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const Borrowed = () => {
  const { user } = useContext(AuthContext);
  const [borrows, setBorrows] = useState([]);
  const url = `http://localhost:5000/borrowed?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBorrows(data));
  }, []);

  const handleReturn = (id) => {
    fetch(`http://localhost:5000/borrowed/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Returned Book SuccessFully");
          const remaining = borrows.filter((borrow) => borrow._id !== id);
          setBorrows(remaining);
        }
      });
  };
  return (
    <div className="mt-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
                    onClick={() => handleReturn(borrow._id)}
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
