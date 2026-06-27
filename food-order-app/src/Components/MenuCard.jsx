const MenuCard = ({ item, addToCart }) => {
  const info = item.card.info;

  return (
    <div className="menu-card">
      <div className="left">
        <h3>{info.name}</h3>

        <h4>
          ₹{(info.defaultPrice || 0) / 100}
        </h4>

        <p>{info.description}</p>
      </div>

      <div className="right">
        <img
          src={`/images/${info.imgName}`}
          alt={info.name}
        />

        <button
          onClick={() => addToCart(info)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default MenuCard;