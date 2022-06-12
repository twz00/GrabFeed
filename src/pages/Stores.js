import React, { useState } from "react";
import "./stores.css";
import grabLogo from "../images/grabLogo.png";
import curryRice from "../images/curryrice.jpeg";
import cupCakes from "../images/twelvecupcakes.jpeg";
import mcdonald from "../images/macs.jpg";
import breadtalk from "../images/bread/floss.webp";
import { useNavigate } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { RiStarFill } from "react-icons/ri";
import { BiTime } from "react-icons/bi";
import Nav from "../components/Nav";

const stores = [
  {
    id: 1,
    name: "Beach Road Scissor - Cut Curry Rice - Jalan Besar",
    category: "Indian, Snack, Drinks & Beverages",
    rating: 4.5,
    backgroundImage: curryRice,
    duration: 50,
    distance: 7.2,
  },
  {
    id: 2,
    name: `Breadtalk - Raffles City Shopping Centre`,
    category: `Bakery & Cake, Breakfast & Brunch, Asian, Local, Snacks`,
    rating: 5,
    backgroundImage: breadtalk,
    duration: 30,
    distance: 0.9,
  },

  {
    id: 3,
    name: "Twelve Cupcakes - One Raffles Place",
    category: "Mart, Snacks, Dessert",
    rating: 4.3,
    backgroundImage: cupCakes,
    duration: 50,
    distance: 7.2,
  },
  {
    id: 4,
    name: `McDonald's - Boat Quay`,
    category: `Burger, Fast Food, Halal`,
    rating: 4.2,
    backgroundImage: mcdonald,
    duration: 50,
    distance: 7.2,
  },
];

function Stores() {
  const navigate = useNavigate();
  const [cartState, setcartState] = useState(false);

  const toFood = (id) => {
    if (id == 1) navigate("/food");
    else if (id == 2) navigate("/food2");
  };

  return (
    <div className="container">
      <Nav state={cartState} updateState={setcartState} />
      <div className="foodbanner" />
      <p className="bannerP">We want to help! Pay for just the delivery!</p>

      <div className="storesContainer">
        <h2 className="header">Grab Feeds</h2>
        <div className="storesDetail">
          {stores.map((store) => (
            <div className="storeD">
              <div className="imgContainer">
                <img alt="" src={store.backgroundImage} />
              </div>
              <button className="btn hidden" onClick={() => toFood(store.id)}>
                <h3> {store.name} </h3>
                <p style={{ width: "100%", padding: "0px", margin: "0px" }}>
                  {store.category}{" "}
                </p>
                <div className="metadata">
                  <div>
                    <RiStarFill
                      style={{
                        fontSize: "20px",
                        color: "#FAD02C",
                      }}
                    />
                    <p>{store.rating} </p>
                  </div>

                  <div>
                    <BiTime style={{ fontSize: "20px", color: "grey" }} />
                    <p>{store.duration} mins</p>
                  </div>

                  <div>
                    <BsDot style={{ fontSize: "20px" }} />
                    <p>{store.distance} km</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stores;
