import React, { useState } from "react";
import "./Food1.css";
import curryRice from "../images/curryrice.jpeg";
import menu1 from "../images/menu1.webp";
import menu2 from "../images/menu2.webp";
import menu3 from "../images/menu3.webp";
import menu4 from "../images/menu4.webp";
import Cart from "../components/Cart";
import Nav from "../components/Nav";

const foodSold = [
  {
    id: 1,
    foodName: "Famous Beach Road Scissor Cut Curry Rice with Pork Belly",
    foodPic: menu1,
    foodDesc:
      "Loaded with egg and cabbage, topped with Pork Belly, drizzled in authentic Hainanese curry and black sauce. Unpicturesque, but delicious nevertheless",
    price: "2.40",
  },
  {
    id: 2,
    foodName:
      "Famous Beach Road Scissor Cut Curry Rice with Curry Chicken Wing",
    foodPic: menu2,
    foodDesc:
      "Loaded with egg and cabbage, topped with Curry Chicken Wing drizzled in authentic Hainanese curry and black sauce. Unpicturesque, but delicious nonetheless.",
    price: "2.40",
  },
  {
    id: 3,
    foodName: "Fish Cake (1 piece)",
    foodPic: menu3,
    foodDesc: "",
    price: "2.40",
  },
];

function Food() {
  const [cartState, setcartState] = useState(false);

  return (
    <>
      {cartState ? <div className="overlayFood" /> : null}
      <div className={`container ${cartState ? "cover" : null}`}>
        <Nav state={cartState} updateState={setcartState} />
        <div>
          <div onClick={() => setcartState(false)}>
            {/* <img className="leftBanner" src={curryRice}></img>
            <img className="rightBanner" src={curryRice}></img> */}
            <div className="contents">
              <div className="contentsBody">
                <h2 className="menu">Menu</h2>
                <div className="foodItems">
                  {foodSold.map((foodOption) => (
                    <div className="foodBox">
                      <img src={foodOption.foodPic} alt="" />
                      <h1 className="foodBoxh1">{foodOption.foodName}</h1>
                      <p className="foodBoxp">{foodOption.foodDesc}</p>
                      <button />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {cartState == true ? <Cart updateState={setcartState} /> : null}
        </div>
      </div>
    </>
  );
}

export default Food;
