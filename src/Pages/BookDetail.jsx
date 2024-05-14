import ReactiveButton from "reactive-button";
import author from "../assets/Authors.jpg";

const BookDetail = () => {
  return (
    <div className="mt-20  lg:flex gap-5 justify-between border p-5 rounded-xl">
      <div className="mb-10 lg:mb-0 lg:w-[45%] border rounded flex justify-center bg-[#1313130D]">
        <img src={author} className="min-h-[calc(100vh-100px)] p-20" />
      </div>
      <div className="lg:w-[55%] flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#131313] text-4xl font-bold">1975</h1>
          <p className="text-[#131313CC] text-xl font-medium">
            Author : Fardin Ahmed
          </p>
        </div>
        <hr />
        <div>
          <span className="text-xl font text-[#131313CC] font-medium">
            History
          </span>
          <hr className="my-3" />
          <p className="text-[#131313B2] font-normal text-base leading-7">
            <span className="text-[#131313] font-bold text-base leading-7">
              Review :
            </span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            ad doloribus officiis consequuntur saepe obcaecati rem nisi nobis
            sapiente ipsum incidunt reprehenderit, optio, a cumque modi fuga
            quis eius culpa blanditiis amet aperiam, quibusdam autem error.
            Quia, laboriosam omnis neque ducimus sint laudantium autem
            exercitationem. Obcaecati aliquid voluptate vitae accusamus!
          </p>
        </div>
        <div className="flex gap-3">
          <span className="text-base text-[#23BE0A] font-medium bg-[#23BE0A0D] p-1">
            #Rating :
          </span>
          <span className="text-base text-[#23BE0A] font-medium bg-[#23BE0A0D] p-1">
            #Quantity :
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
            <div className="modal-box space-y-10 bg-base-300">
              <h3 className="font-bold text-lg text-center">
                Enter Details to Borrow This Book
              </h3>
              <div className="flex gap-5">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Your Name
                  </label>
                  <input
                    id="name "
                    type="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
              </div>
              <div>
                
            </div>
              <div className="modal-action flex justify-center">
                <button className="btn">Submit</button>
                <form method="dialog">
                  <button className="btn">Cancle</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
