import React from "react";
//stavljam {} zato sto zelim tacno tu ikonicu
import { BsPlusLg, BsDashLg } from "react-icons/bs";

//za CSS koristimo camelCase notaciju
//interni CSS kao promenljiva
//inline CSS, obavezno {{duple zagrade}}

// function OneProduct(props) {

//DESTRUKTURIRANJE PROPS
function OneProduct({ product, onAdd, inCart }) {
  const stil = { margin: 1 + "em", borderStyle: "dotted" };
  //console.log(props);
  // function onAdd(title) {
  //   console.log("Dodat proizvod: " + title);
  // }
  // if (inCart === 1) {
  //   console.log("uradi nesto");
  // } else {
  //   console.log("uradi nesto drugo");
  // }
  // inCart === 1 ? console.log("uradi nesto") : console.log("uradi nesto drugo");
  return (
    <div className={inCart === 1 ? "card" : "card-cart"} style={stil}>
      <img
        className={inCart === 1 ? "card-img-top" : "card-img-left"}
        src="data:image/jpeg;base64,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"
        alt="roze slika"
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
      {/* <button className="btn" onClick={() => onAdd(product.title)}> */}
      {inCart === 1 ? (
        <>
          <button
            className="btn"
            onClick={() => onAdd(product.title, product.id)}
          >
            <BsPlusLg />
          </button>
          <button className="btn">
            <BsDashLg />
          </button>
        </>
      ) : (
        <h4>Amount: {product.amount}</h4>
      )}
    </div>
  );
}

export default OneProduct;
