import OneProduct from "./OneProduct";

const Cart = ({ products }) => {
  return (
    <div className="cart-container">
      <h3 className="cart-text">Ovo su Vaše roze majice:</h3>
      {products.map((prod) => (
        <OneProduct product={prod} key={prod.id} inCart={0} />
      ))}
    </div>
  );
};

export default Cart;
