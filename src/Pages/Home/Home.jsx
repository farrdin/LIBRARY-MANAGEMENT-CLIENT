import { Helmet } from "react-helmet-async";
import Banner from "./Componenets/Banner";
import Categories from "./Componenets/Categories";
import Section1 from "./Componenets/Section1";
import Section2 from "./Componenets/Section2";
import Section3 from "./Componenets/Section3";

const Home = () => {
  return (
    <div className="space-y-20">
      <Helmet>
        <title>KS | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <Section2></Section2>
      <Section3></Section3>
      <Section1></Section1>
    </div>
  );
};

export default Home;
