import { Link } from "react-router-dom";

const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

const RestaurantCard = ({ restaurant }) => {
  if (!restaurant) {
    console.log("Restaurant prop is undefined");
    return null;
  }

  const { info } = restaurant;

  return (
    <Link
      to={`/restaurant/${info.id}`}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <div className="restaurant-card">
        <img
          src={`${IMG_URL}${info.cloudinaryImageId}`}
          alt={info.name}
        />

        <h3>{info.name}</h3>

        <p>⭐ {info.avgRating}</p>

        <p>{info.cuisines.join(", ")}</p>

        <p>{info.costForTwo}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;