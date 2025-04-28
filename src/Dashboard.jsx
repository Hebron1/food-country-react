import { FaArrowLeft } from "react-icons/fa";
import { CardMeal } from "./components/CardMeal";
import CountryFood from "./components/CountryFood";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {

  return (
    <>
    <div className="flex justify-content-center text-center bg-black text-white p-2">
      <Link to={'/'}>
      <FaArrowLeft size={20}  />
      </Link>
        <h3 className="flex-4 ml-20">Country</h3>
      <h3 className="flex-1">Categories</h3>
    </div>

    <div className="p-10">
    <div className="flex w-full">
      <div className="flex-1 flex-row w-[50%]">
        <CountryFood />
      </div>
    
    <div className="flex flex-wrap justify-start mx-auto w-full h-full">
    
        <CardMeal />
    
    </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default Dashboard;
