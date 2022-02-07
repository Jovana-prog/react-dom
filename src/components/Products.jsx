//arrow function komponenta
//precica rafce
import React from "react";
import OneProduct from "./OneProduct.jsx";

const Products = ({ products, onAdd }) => {
  // const name = "Naziv proizvoda";
  // const desc = "Neki opis mog proizvoda";
  // const prod = {
  //   title: "Naziv proizvoda",
  //   description: "Neki opis mog proizvoda",
  // };

  // function (a) {
  //   return a + 10;
  // }

  // (a) => {
  //   let b = 10;
  //   return a + b;
  // }

  // (a) => a + 10;

  return (
    <div className="all-products">
      {products.map((prod) => (
        <OneProduct product={prod} key={prod.id} onAdd={onAdd} inCart={1} />
      ))}
      {/* {products.map((prod) => {
        return <OneProduct product={prod} />;
      })} */}
      {/* <OneProduct product={products[0]} />
      <OneProduct product={products[1]} />
      <OneProduct product={products[2]} /> */}
    </div>
  );
};

export default Products;
