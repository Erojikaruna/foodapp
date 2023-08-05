import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  //Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);

    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    const resData = await checkJsonData(json);

    setListOfRestaurant(resData);
    setFilteredRestaurant(resData);

    //Optional Chaining

    /* setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); */
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h2>You're offline!! check your network connection;</h2>;
  }
  //Conditional Rendering
  /* if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  } */

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-12 ">
      <div className="flex m-5 bg-slate-800 justify-between">
        <div className="p-5 m-4 pl-32">
          <input
            className="outline-none p-1 w-80"
            type="text"
            data-testid="searchInput"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-1 bg-green-800 rounded-lg m-4"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-5 m-4 flex  items-center ">
          <button
            className=" px-4 py-2 bg-slate-400 rounded-lg"
            onClick={() => {
              //Filter logic here
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
        {/*  <RestaurantCard resData={resList[0]} />
         */}
      </div>
    </div>
  );
};

export default Body;
