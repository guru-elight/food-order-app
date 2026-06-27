import { useState } from "react";
import restaurants from "../Data/Restaurant.json";
import RestaurantCard from "../Components/RestaurantCard";

const Home = () => {
  const [search, setSearch] = useState("");

  const filtered = restaurants.filter((item) =>
    item.info.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="home">

      <div className="hero">
        <h1>
          Restaurants with online food delivery
        </h1>

        <input
          type="text"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="restaurant-grid">
        {filtered.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurant={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;