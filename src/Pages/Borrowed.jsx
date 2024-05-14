import ReactiveButton from "reactive-button";

const Borrowed = () => {
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
            {/* row 1 */}
            <tr>
              <th>
                <img
                  src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                  className="mask mask-squircle w-12 h-12"
                />
              </th>
              <td>
                <p className="font-bold">Hart Hagerty</p>
              </td>
              <td>History</td>
              <td>12.12.2024</td>
              <td>13.12.2024</td>
              <td>
                <ReactiveButton
                  size="small"
                  rounded
                  outline
                  shadow
                  idleText={<span className="font-bold text-sm">Return</span>}
                />
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                  className="mask mask-squircle w-12 h-12"
                />
              </th>
              <td>
                <p className="font-bold">Hart Hagerty</p>
              </td>
              <td>History</td>
              <td>12.12.2024</td>
              <td>13.12.2024</td>
              <td>
                <ReactiveButton
                  size="small"
                  rounded
                  outline
                  shadow
                  idleText={<span className="font-bold text-sm">Return</span>}
                />
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                  className="mask mask-squircle w-12 h-12"
                />
              </th>
              <td>
                <p className="font-bold">Hart Hagerty</p>
              </td>
              <td>History</td>
              <td>12.12.2024</td>
              <td>13.12.2024</td>
              <td>
                <ReactiveButton
                  size="small"
                  rounded
                  outline
                  shadow
                  idleText={<span className="font-bold text-sm">Return</span>}
                />
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                  className="mask mask-squircle w-12 h-12"
                />
              </th>
              <td>
                <p className="font-bold">Hart Hagerty</p>
              </td>
              <td>History</td>
              <td>12.12.2024</td>
              <td>13.12.2024</td>
              <td>
                <ReactiveButton
                  size="small"
                  rounded
                  outline
                  shadow
                  idleText={<span className="font-bold text-sm">Return</span>}
                />
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                  className="mask mask-squircle w-12 h-12"
                />
              </th>
              <td>
                <p className="font-bold">Hart Hagerty</p>
              </td>
              <td>History</td>
              <td>12.12.2024</td>
              <td>13.12.2024</td>
              <td>
                <ReactiveButton
                  size="small"
                  rounded
                  outline
                  shadow
                  idleText={<span className="font-bold text-sm">Return</span>}
                />
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                  className="mask mask-squircle w-12 h-12"
                />
              </th>
              <td>
                <p className="font-bold">Hart Hagerty</p>
              </td>
              <td>History</td>
              <td>12.12.2024</td>
              <td>13.12.2024</td>
              <td>
                <ReactiveButton
                  size="small"
                  rounded
                  outline
                  shadow
                  idleText={<span className="font-bold text-sm">Return</span>}
                />
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                  className="mask mask-squircle w-12 h-12"
                />
              </th>
              <td>
                <p className="font-bold">Hart Hagerty</p>
              </td>
              <td>History</td>
              <td>12.12.2024</td>
              <td>13.12.2024</td>
              <td>
                <ReactiveButton
                  size="small"
                  rounded
                  outline
                  shadow
                  idleText={<span className="font-bold text-sm">Return</span>}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Borrowed;
