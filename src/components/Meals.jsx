"use client";
import { useState, useEffect } from "react";
import Image from "next/image";


const Meals = () => {
  // state management
  const [search, setSearchMeals] = useState("a");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);
  console.log(meals);

  //load data
  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();

      console.log(data);
      setMeals(data.meals);
      setError("");
    } catch (error) {
      // console.log(error.message);
      setError("No Data Found");
    }
  };

  // onChnage handler
  const handler = (e) => {
    setSearchMeals(e.target.value);
  };

  useEffect(() => {
    loadData();
  },[search]);

  // if(meals?.length === 0){
  //   return <h1>No Meals Found...</h1>
  // }

  return (
    <div>
      <input
        onChange={handler}
        placeholder="Search Your Favorite Food"
        type="text"
        className="outline-none px-4 py-3 border-2 border-blue-30000 m-4 text-black rounded-lg "
      />
      <button
        onClick={() => loadData()}
        type="button"
        className="outline-none px-4 py-3 bg-yellow-600 rounded-lg text-white font-bold "
      >
        Show
      </button>

      <div className="border-2 border-t-red-500 mt-12 grid grid-cols-3 gap-8">
        {meals?.length > 0 &&
          !error &&
          meals?.map((meal) => (
            <div key={meal?.idMeal} className="border-2 p-4">
              <Image
                src={meal?.strMealThumb} // Local image file or external URL
                alt="Food"
                width={500} // Desired width of the image
                height={300} // Desired height of the image
              />
              <h6>{meal.strMeal}</h6>
              <p>{meal.strInstructions}</p>
            </div>
          ))}
        {error && <h1 className="text-red-500">{error}</h1>}
      </div>
    </div>
  );
};

export default Meals;
