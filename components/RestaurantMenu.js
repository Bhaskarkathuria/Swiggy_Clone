import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_URL_CDN } from "../config";

const RestaurantMenu = ()=>{

    const params = useParams();
    console.log(params);
    const { id } = params;

    const [restaurants,setRestaurants] = useState({})

    useEffect(()=>{
        getRestaurantInfo()
    },[])

    async function getRestaurantInfo(){
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+id
        );
        const json = await data.json()
        console.log(json?.data)
        setRestaurants(json?.data?.cards[0]?.card?.card?.info);
    }

    return (
      <div>
        <h1>Restaurant id : {id}</h1>
        <h1>{restaurants?.name}</h1>
        <img src={IMG_URL_CDN + restaurants.cloudinaryImageId}></img>
        <h2>City: {restaurants.city}</h2>
        <h2>Locality: {restaurants.locality}</h2>
        <h2>Avg rating: {restaurants.avgRating}Stars</h2>
        <h2>Cost for two: {restaurants.costForTwoMessage}</h2>
      </div>
    );
}
export default RestaurantMenu;