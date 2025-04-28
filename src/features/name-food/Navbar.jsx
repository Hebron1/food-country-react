import React, { useState } from "react";
import { PiBowlFood } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navigation = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchTerm)
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
     
        <div className="container mx-auto flex justify-between items-center">
                  <h1 className="flex text-white text-3xl font-semibold flex-row">
                    <PiBowlFood />
                     MEAL</h1>
                
        <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-l-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700"
          >
            Search
          </button>
         </form>

        <div>
          <Link to={'/dashboard'}>
          <button className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-700">
            Back
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
