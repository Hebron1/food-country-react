import { Button } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { CiFlag1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { PiBowlFood } from "react-icons/pi";

const HomePage = () => {
  const [meal, setMeal] = useState(null);

  // Fetch random meal data from API
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);

  if (!meal) return <div>Loading...</div>;

  return (
    <div className="font-sans min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="flex text-white text-3xl font-semibold flex-row">
            <PiBowlFood />
             MEAL</h1>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mx-auto p-6 text-left bg-white w-[900px]">
        <div className=" gap-6">
          {/* Card for Meal */}
          <div className="overflow-hidden flex">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-72 h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{meal.strMeal}</h2>
              <p className="text-gray-700 mt-2">{meal.strCategory}</p>
              <p className="text-gray-700 mt-1">{meal.strArea}</p>
            </div>
          </div>
              <div className="mt-4 flex space-x-4">
                <p className="text-justify">{meal.strInstructions}</p>
              </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center p-10">
      <Link to="/world-food">
      <Button color="primary" endContent={<BiWorld />}>
        World food
      </Button>
      </Link>
      <Link to="/dashboard">
      <Button color="primary" endContent={<CiFlag1 />}>
        Country food
      </Button>
      </Link>
    </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p>@2025 made by Yusuf</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
