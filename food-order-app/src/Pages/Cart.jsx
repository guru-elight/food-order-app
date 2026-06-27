const Cart = ({ cart, setCart }) => {
  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const total = cart.reduce(
    (sum, item) =>
      sum +
      ((item.defaultPrice || item.price || 0) / 100),
    0
  );

  return (
    <div className="container">
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <h2>Cart Empty</h2>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>

              <p>
                ₹
                {(item.defaultPrice ||
                  item.price ||
                  0) / 100}
              </p>

              <button
                onClick={() =>
                  removeItem(index)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;