import React from "react";
import "./landing.css";
import grabLogo from "../images/grabFoodLogo.svg";
import restaurants from "../images/restaurants.jpeg";
import { BsFillHandbagFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import chowking from "../images/chowking.jpg";
import Chicken_24 from "../images/24Chicken.png";
import popeyes from "../images/popeyes.jpg";
import Jollibee from "../images/Jollibee.jpg";
import { RiStarSFill } from "react-icons/ri";
import { BiTime } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

function LandingPage() {
  const offers = [
    {
      id: 1,
      name: "Pay for Delivery Only!",
    },
    {
      id: 2,
      name: "P100 OFF!",
    },
    {
      id: 3,
      name: "SulEAT Savers",
    },
    {
      id: 4,
      name: "Indie Eats",
    },
    {
      id: 5,
      name: "Only with GrabFood",
    },
    {
      id: 6,
      name: "#ComboDeals",
    },
  ];

  const stores = [
    {
      id: 1,
      name: "Jollibee",
      category: "Filipino, Chicken, Fast Food",
      rating: 4.5,
      backgroundImage: Jollibee,
      duration: 50,
      distance: 7.2,
    },
    {
      id: 2,
      name: "Chowking - QA Welcome ",
      category: "Chinese, Chicken, Fast Food",
      rating: 4.5,
      backgroundImage: chowking,
      duration: 50,
      distance: 7.2,
    },
    {
      id: 3,
      name: "Popeyes - SM San Lazoro",
      category: "American, Chicken, Fast Food",
      rating: 4.3,
      backgroundImage: popeyes,
      duration: 50,
      distance: 7.2,
    },
    {
      id: 4,
      name: "24 Chicken - Petron Apo",
      category: "Asian, Chicken, Kiosk",
      rating: 4.8,
      backgroundImage: Chicken_24,
      duration: 35,
      distance: 3.1,
    },
  ];

  const navigate = useNavigate();
  const handleRoute = (id) => {
    if (id == 1) navigate("/stores");
  };

  return (
    <div className="landingContainer">
      <div className="landWrapper">
        <div className="landNav">
          <img src={grabLogo} alt="" />
          <div className="btnWrapper">
            <div className="Landbtn" style={{ marginRight: "10px" }}>
              <BsFillHandbagFill
                style={{
                  fontSize: "25px",
                }}
              />
            </div>
            <div className="Landbtn" onClick={() => navigate("/profile")}>
              <AiOutlineUser
                style={{
                  fontSize: "25px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="Searchbar">
          <AiOutlineSearch style={{ fontSize: "20px", marginRight: "10px" }} />
          <input type="text" placeholder="Search for a dish or a restaurant" />
        </div>

        <div className="offersContainer">
          <div className="offersWrap">
            {offers.map((offer) => (
              <>
                <div
                  id={offer.id}
                  onClick={() => handleRoute(offer.id)}
                  className="offer"
                >
                  <div className="imgWrapper">
                    <img src={restaurants} alt="" />
                    <div className="overlay" />
                    <div className="text">
                      <p>{offer.name}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="span" />
      <div className="LandingContainer">
        <p>
          <span>Home</span> <IoIosArrowForward /> Restaurant
        </p>
        <h2 className="Landingheader">Popular Near You</h2>
        <div className="LandingstoresContainer">
          {stores.map((store) => (
            <div className="Landingstore">
              <img alt="" src={store.backgroundImage} />
              <button className="Landingbtn">
                <h2> {store.name} </h2>
                <p>{store.category} </p>
                <div className="Landingmetadata">
                  <RiStarSFill
                    style={{
                      fontSize: "25px",
                      color: "#FAD02C",
                    }}
                  />
                  <p>{store.rating} </p>
                  <BiTime style={{ fontSize: "20px", color: "grey" }} />
                  <p>{store.duration} mins</p>
                  <BsDot style={{ fontSize: "20px" }} />
                  <p>{store.distance} km</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
