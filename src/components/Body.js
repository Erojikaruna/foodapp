import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //Optional Chaining
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };
  // Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="search"
        ></input>
        <button className="search-btn">Search</button>
      </div>
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
        {/*  <RestaurantCard resData={resList[0]} />
         */}
      </div>
    </div>
  );
};

export default Body;
