const FoodCard = ({ item, addToCart }) => {
  const info = item.card.info;

  return (
    <div className="food-card">
      <h3>{info.name}</h3>

      <p>
        ₹
        {(info.defaultPrice || info.price || 0) / 100}
      </p>

      <p>{info.description}</p>

      <button onClick={() => addToCart(info)}>
        Add To Cart
      </button>
    </div>
  );
};

export default FoodCard;