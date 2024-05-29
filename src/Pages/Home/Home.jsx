import { Helmet } from "react-helmet-async";
import Banner from "./Componenets/Banner";
import Categories from "./Componenets/Categories";
import OurService from "./Componenets/OurService";
import EasyBook from "./Componenets/EasyBook";
import MeetAuthor from "./Componenets/MeetAuthor";

const Home = () => {
  return (
    <div className="space-y-20">
      <Helmet>
        <title>KS | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <EasyBook></EasyBook>
      <MeetAuthor></MeetAuthor>
      <OurService></OurService>
    </div>
  );
};

export default Home;
