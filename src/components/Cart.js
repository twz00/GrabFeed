import React from "react";
import "./cart.css";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { selectCount, selectItems, selectTotal } from "../slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Cart({ updateState, name, price, pic }) {
  const navigate = useNavigate();
  //To display cart items
  const items = useSelector(selectItems);

  //To display total price
  const total = useSelector(selectTotal);

  return (
    <div className="cartContainer">
      <div className="navWrap">
        <AiOutlineLeft
          onClick={() => updateState(false)}
          style={{ fontSize: "25px", cursor: "pointer" }}
        />
        <div className="cartNav">
          <p style={{ fontWeight: 700, fontSize: "20px", marginBottom: "5px" }}>
            GrabShop - Fairview Terraces
          </p>
          <p> Distance from you: 15.4 km</p>
        </div>
      </div>

      <div className="ordersContainer">
        <div className="orderSummary">
          <div className="orderHeader">
            <h2>Order Summary</h2>
            <p
              style={{
                color: "rgba(3, 138, 255)",
                fontWeight: 600,
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Add Items
            </p>
          </div>
          <div className="orderContainer">
            {items.map((item) => (
              <div className="orders">
                <p className="orders_name"> {item.name}</p>
                <p className="orders_qty"> x {item.quantity} </p>
                <p className="orders_price">${item.price}</p>
              </div>
            ))}
          </div>
          <div className="totalContainer">
            <div style={{ marginBottom: "10px" }}>
              <p> Subtotal</p>
              <p className="subtotal"> ${total.toFixed(2)}</p>
            </div>
            <div>
              <p> Delivery fee</p>
              <p> $2.00 </p>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout">
        <div className="checkoutContainer">
          <div className="totalPrice">
            <p style={{ fontSize: "25px", fontWeight: "700" }}>$2.00</p>
            <p
              style={{
                color: "rgba(3, 138, 255)",
                fontSize: "14px",
                marginTop: "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              See Breakdown
            </p>
          </div>
          <div className="orderBtn" onClick={() => navigate("/pay")}>
            <p>Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
