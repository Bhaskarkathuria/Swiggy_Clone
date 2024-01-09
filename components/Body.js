import { useState } from "react";
import { RestaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom"
function filterdata(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING"
    );

    const jsondata = await data.json();
    
    console.log(
      jsondata?.data?.cards[2]?.card?.card.gridElements.infoWithStyle?.restaurants
    );

    async function checkJsonData(json) {
      const restaurantsArray = [];
      for (let i = 0; i <= 8; i++) {
        let cheeckedData =
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[
            i
          ];

        restaurantsArray.push(cheeckedData);
      }
      return restaurantsArray;
    }
    // console.log(
    //   jsondata.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
    // );
    const responseData = await checkJsonData(jsondata);
    console.log("resssss", responseData);
    setFilteredRestaurants(responseData);
    setAllRestaurants(responseData);
  }

  return (allRestaurants.length === 0) ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <button
        className="search-btn"
        onClick={() => {
          const data = filterdata(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
      <div className="Restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
        
    </>
  );
};

export default Body;
