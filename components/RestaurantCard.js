import { IMG_URL_CDN } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_URL_CDN + cloudinaryImageId} />
      <h3>{name}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>{lastMileTravelString} Minutes </h3>
    </div>
  );
};

export default RestaurantCard;