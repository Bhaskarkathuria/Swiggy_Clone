import { IMG_URL_CDN } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img src={IMG_URL_CDN + cloudinaryImageId} />
      <h3>{name}</h3>
     {/* <h3>{cuisines.join("")}</h3> */}
      <h3>{areaName}  </h3>
      <h3>{avgRatingString}star</h3>
    </div>
  );
};

export default RestaurantCard;