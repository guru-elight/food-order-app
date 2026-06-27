import menuData from "../Data/Menu.json";
import MenuCard from "../Components/MenuCard";

const RestaurantDetails = ({ addToCart }) => {
  return (
    <div className="details">
      {menuData.map((section, index) => {
        const title = section.card.card.title;
        const items = section.card.card.itemCards;

        return (
          <div key={index}>
            <h2>{title}</h2>

            {items.map((item) => (
              <MenuCard
                key={item.card.info.id}
                item={item}
                addToCart={addToCart}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantDetails;