import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('Hvala, uskoro cete biti obavesteni!')
  }

  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "Pink shirt",
      description:
        "If you like the color pink this one is perfect for you",
      amount: 0,
    },
    {
      id: 2,
      title: "Another pink shirt",
      description:
        "this ones if you LOVE the color pink",
      amount: 0,
    },
    {
      id: 3,
      title: "The same pink shirt!!!!11111!!!",
      description:
        "Whats better than 2 pink shirts? THREE PINK SHIRTS!!!",
      amount: 0,
    },
    {
      id: 4,
      title: "Guess what?",
      description:
        "You guessed it, another one....we`ll stop now",
      
      
      amount: 0,
    },
  ]);
  function refreshCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);

    setCartProducts(newProducts);
  }
  function addProduct(title, id) {
    
    setCartNum(cartNum + 1);
  
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
      
    });
    refreshCart();
  
    
  }
  return (
    <div>
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Products products={products} onAdd={addProduct} />}
        />
        <Route path="/cart" element={<Cart products={cartProducts} />} />
      </Routes>
    </BrowserRouter>
    <div className="wrapper">
    <h1 className="mejl-naslov">Ukoliko biste zeleli nas newsletter unesite mejl adresu:</h1>
    <form  onSubmit={handleSubmit}>
    <fieldset>
         <label>
           <p className="mejl-holder">vaša mejl adresa:</p>
           <input name="name" />
         </label>
       </fieldset>
       <button className="btn-potvrdi" type="submit">potvrdi!</button>
    </form>
  </div>
  </div>
  );
}

export default App;
