import {
  FaRegLightbulb,
  FaBookMedical,
  FaRegHeart,
  FaCalendarTimes,
  FaPencilAlt,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Section1 = () => {
  return (
    <div>
      <div className="container mx-auto p-4 mb-6 space-y-2 text-center">
        <h2 className="text-4xl font-bold text-[#4F5CC1]">
          OUR FEATURED SERVICES
        </h2>
        <p className="text-base font-medium">
          Large online bookstores offer used books for sale too. Individuals
          wishings to sell their used Books
        </p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 text-center">
        <div className="flex flex-col items-center p-4 border rounded-lg border-[#4F5CC1] shadow-2xl ">
          <FaBookMedical className="text-5xl " />
          <h3 className="my-3 text-xl font-semibold">START YOUR CAMPAIGN</h3>
          <div className="space-y-1 leading-tight">
            <p className="text-sm font-medium">
              Define your goals, target your audience, and launch through
              various marketing channels.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 border rounded-lg border-[#4F5CC1] shadow-2xl">
          <FaRegLightbulb className="text-5xl " />
          <h3 className="my-3 text-xl font-semibold">DEVELOP AN IDEA</h3>
          <div className="space-y-1 leading-tight">
            <p className="text-sm font-medium">
              Brainstorm innovative concepts that align with your brand's
              mission and values.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 border rounded-lg border-[#4F5CC1] shadow-2xl">
          <CgProfile className="text-5xl " />
          <h3 className="my-3 text-xl font-semibold">ENGAGE NEW USER</h3>
          <div className="space-y-1 leading-tight">
            <p className="text-sm font-medium">
              Attract and engage new users with offers, valuable content, and
              interactive strategies.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 border rounded-lg border-[#4F5CC1] shadow-2xl">
          <FaRegHeart className="text-5xl " />
          <h3 className="my-3 text-xl font-semibold">CREATE YOUR OFFER</h3>
          <div className="space-y-1 leading-tight">
            <p className="text-sm font-medium">
              Design compelling offers that highlight your product's value and
              prompt immediate response.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 border rounded-lg border-[#4F5CC1] shadow-2xl">
          <FaCalendarTimes className="text-5xl " />
          <h3 className="my-3 text-xl font-semibold">SAVE YOUR TIME</h3>
          <div className="space-y-1 leading-tight">
            <p className="text-sm font-medium">
              Use automation tools and project management software to streamline
              tasks and save time.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 border rounded-lg border-[#4F5CC1] shadow-2xl">
          <FaPencilAlt className="text-5xl " />
          <h3 className="my-3 text-xl font-semibold">
            PRINTED BOOKS AVAILABLE
          </h3>
          <div className="space-y-1 leading-tight">
            <p className="text-sm font-medium">
              Access in-depth insights and guides with our printed books to
              enhance your campaign efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
