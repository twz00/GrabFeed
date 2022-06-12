import React from "react";
import "./Payment.css";
import { CgChevronLeftO } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const handlePay = () => {
    alert("You have paid $2 dollars to breadTalk. Enjoy!");
  };
  return (
    <>
      <div class="entire-background">
        <div class="dark-green">
          <div class="curve"></div>
        </div>
        <div class="light-green"></div>
      </div>
      <div class>
        <div class="navbar">
          <div>
            <h2>
              <span class="left-icon">
                <CgChevronLeftO
                  class="left-arrow"
                  onClick={() => navigate("/main")}
                />
              </span>
            </h2>
            <h2>CHECKOUT</h2>
          </div>
          <h2>
            <span class="right-icon"> &#xb7; &#xb7; &#xb7;</span>
          </h2>
        </div>
        <div class="app-container">
          <div class="top-box"></div>
          <div class="middle-box">
            <h1>
              <span>$</span>2
            </h1>
            <p style={{ fontSize: "20px", color: "black", fontWeight: "600" }}>
              {" "}
              Payment to BreadTalk{" "}
            </p>
          </div>
          <div class="bottom-box">
            <button type="button" class="payment-option-btn">
              {" "}
              Pay with Grabpay
            </button>
            <button type="button" class="payment-option-btn">
              {" "}
              Pay with Credit Card
            </button>
          </div>
          <div class="card-details">
            <p>Pay using Credit Card</p>

            <div class="card-num-field-group">
              <label> Card Number </label>
              <br />
              <input
                type="text"
                class="card-num-field"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
            </div>
            <div class="date-field-group">
              <label> Expiry Date </label>
              <br />
              <input type="text" class="date-field" placeholder="mm" />
              <input type="text" class="date-field" placeholder="yyyy" />
            </div>
            <div class="cvc-field-group">
              <label> CVC </label>
              <br />
              <input type="password" class="cvc-field" placeholder="xxx" />
            </div>
            <div class="name-field-group">
              <label> Card Holder Name </label>
              <br />
              <input type="text" class="cvc-field" placeholder="full name" />
            </div>

            <button type="button" class="pay-btn" onClick={handlePay}>
              {" "}
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
