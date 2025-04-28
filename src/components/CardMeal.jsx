import { Card, CardBody, CardFooter, CardHeader, CircularProgress, Image, Modal } from "@heroui/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CardMeal = () => {

  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false)
  const [hoverCategories, setHoverCategories] = useState(null)

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/categories.php");
      setValues(response.data.categories);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  const handleHoverEnter = (categories) => {
    setHoverCategories(categories)
    setIsHovered(true)
  }

  const handleHoverLeave = () => {
    setHoverCategories(null)
    setIsHovered(false)
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress className="flex justify-center text-center" aria-label="Loading..." />;
  }

  if (error) {
    return <p className="flex justify-center text-center">Error: {error}</p>;
  }

  const CardComponent = ({key, meal}) => {
    return (
    <div className="p-2">

        <Card 
        isFooterBlurred 
        className="w-[200px] h-[200px] col-span-12 sm:col-span-5 rounded-b-none" 
        key={key}
        >
        
        <CardHeader className="absolute z-10 top-1 flex-row items-start">
          <p className="text-lg text-black hover:text-white drop-shadow-2xl uppercase font-bold text-shadow">{meal.strCategory}</p>
          <h4 className="text-black font-medium text-2xl">{meal.strMeal}</h4>
          <p className="text-tiny text-black-50 hover:text-white uppercase font-bold">{meal.strArea}</p>
        </CardHeader>
        <Link className="w-[200px] h-[200px]" to={`/filter-categories/${meal.strCategory}`}>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={meal.strCategoryThumb}
        />
        </Link>
        <CardFooter className="flex absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          
          <FaAngleDoubleDown
          className="hover:text-blue-700"
          fontSize={20} 
          onMouseEnter={() => handleHoverEnter(meal.strCategory)}
          />
        </CardFooter>
      </Card>

      {isHovered && hoverCategories === meal.strCategory && (
       <Card 
       className="w-[200px] h-[200px] col-span-12 sm:col-span-5 text-xs rounded-t-none rounded-b-md"
       >
        <CardBody onMouseLeave={handleHoverLeave}>
          <p>{meal.strCategoryDescription}</p>
        </CardBody>
          {/* {isHovered && (
            <div className="absolute bottom-14 justify-start left-1/2 z-20 transform -translate-x-1/2 p-4 bg-slate-800 text-white rounded-md shadow-lg">
              <h4 className="font-bold">Italy</h4>
              <img src="italy.svg" height={300} width={200} alt="Italy" />
            </div>
          )} */}
      </Card>
      )}
    </div>
        
    )
}

return (
    <>
      {values && values.length > 0 ? (
          values.map((meal) => (
              <CardComponent key={meal.idMeal} meal={meal} />
            ))
        ) : (
            <p>No meals found.</p>
        )}
        </>    
    )
}