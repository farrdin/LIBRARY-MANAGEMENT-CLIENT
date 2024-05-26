import { Helmet } from "react-helmet-async";
import Banner from "./Componenets/Banner";
import Categories from "./Componenets/Categories";
import Section1 from "./Componenets/Section1";
import Section2 from "./Componenets/Section2";

const Home = () => {
  return (
    <div className="space-y-20">
      <Helmet>
        <title>KS | Home</title>
      </Helmet>
      <Banner></Banner>
      <Section1></Section1>
      <Categories></Categories>
      <Section2></Section2>
    </div>
  );
};

export default Home;
