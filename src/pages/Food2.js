import React, { useState } from "react";
import "./Food2.css";
import Cart from "../components/Cart";
import Nav from "../components/Nav";
import Profile from "./Profile";
import floss from "../images/bread/floss.webp";
import chicken_parmesan from "../images/bread/chicken_parmesan.webp";
import cranberry from "../images/bread/cranberry.webp";
import croissant from "../images/bread/croissant.webp";
import double from "../images/bread/double.webp";
import fire_floss from "../images/bread/fire_floss.webp";
import hazel from "../images/bread/hazel.webp";
import sugar from "../images/bread/sugar.webp";
import curry_chic from "../images/bread/curry_chic.webp";
import { MdOutlineAddBox } from "react-icons/md";
import { addToCart } from "../slice/cartSlice";
import { useDispatch } from "react-redux";

function Food() {
  const [cartState, setcartState] = useState(false);
  const products = [
    {
      id: 1,
      name: "Floss Bread",
      pic: floss,
      desc:
        "Savoury pork floss is gently pat atop a soft bun that is coated with our signature egg cream. Don’t miss our irresistible creation!",
      price: "2.40",
      left: "3",
    },
    {
      id: 2,
      name: "Chicken Parmesan",
      pic: chicken_parmesan,
      desc:
        "Our authentic signature Flosss with a spicy kick. Satisfy your fiery appetite and set your tongue ablaze!",
      price: "2.00",
      left: "2",
    },
    {
      id: 3,
      name: "Cranberry Cream Cheese",
      pic: cranberry,
      desc: "Soft, fluffy bun with tangy, sweet filling",
      price: "2.30",
      left: "5",
    },
    {
      id: 4,
      name: "Fire Flosss",
      pic: fire_floss,
      desc:
        "It's bread topped with meat floss, and filled very modestly with a clear jelly filling.",
      price: "2.30",
      left: "4",
    },
    {
      id: 5,
      name: "Croissant",
      pic: croissant,
      desc: "Classic crispy and flaky croissant!",
      price: "1.90",
      left: "20",
    },
    {
      id: 6,
      name: "Curry Chic",
      pic: curry_chic,
      desc:
        "Inspired by the Singapore Curry, this bun is filled with tender chicken chunks and potato, marinated with our blend of curry spices.",
      price: "2.10",
      left: "13",
    },
    {
      id: 7,
      name: "Hazel Cacao",
      pic: hazel,
      desc: "A nutty and chocolatey delight leavened with natural yeast!",
      price: "2.20",
      left: "8",
    },
    {
      id: 8,
      name: "Double Dog",
      pic: double,
      desc:
        "Double the satisfaction with two juicy sausages dressed in gouda cheese, mayonnaise and chilli sauce.",
      price: "2.20",
      left: "3",
    },
    {
      id: 9,
      name: "Sugar Donut",
      pic: sugar,
      desc:
        "Moist and fluffy donuts that are baked, not fried, and full of sugar.",
      price: "2.00",
      left: "0",
    },
  ];

  const dispatch = useDispatch();

  const addItem = (id, name, price, description, image) => {
    const product = {
      id,
      name,
      price,
      description,
      image,
    };

    //Sending the product as an action to the REDUX store
    dispatch(addToCart(product));
  };

  return (
    <>
      {cartState ? (
        <div className="overlayFood2" onClick={() => setcartState(false)} />
      ) : null}
      <div className={`container ${cartState ? "cover" : null}`}>
        <Nav state={cartState} updateState={setcartState} />
        <div>
          <div>
            <div className="foodContainer">
              {products.map((product) => (
                <div className="food2" id={product.id}>
                  <div className="foodWrap">
                    <img src={product.pic} alt="" />
                    <div>
                      <p className="name">{product.name}</p>
                      <p className="desc">{product.desc}</p>
                      <p className="price">${product.price}</p>
                    </div>
                  </div>
                  <div className="notice2">
                    <p> {product.left} left</p>
                    <MdOutlineAddBox
                      className="addIcon"
                      onClick={() =>
                        addItem(
                          product.id,
                          product.name,
                          product.price,
                          product.desc,
                          product.pic
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="more">
              <p>...</p>
            </div>
          </div>
          {cartState == true ? <Cart updateState={setcartState} /> : null}
        </div>
      </div>
    </>
  );
}

export default Food;
