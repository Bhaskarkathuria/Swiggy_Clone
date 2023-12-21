import { useState } from "react";
import { RestaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterdata(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(RestaurantList);

  return (
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
          const data = filterdata(searchText, restaurants);
          setRestaurants(data);
        }}
      >
        Search
      </button>

      <div className="Restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
