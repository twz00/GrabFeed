import React, { useEffect, useState } from "react";
import "./login.css";
import grabLogo from "../images/grabLogo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const formState = {
    email: "",
    password: "",
  };
  const [buttonState, setButton] = useState(false);
  const [phone, setPhone] = useState("");
  const [loginState, setloginState] = useState(false);
  const [initialForm, setForm] = useState(formState);
  const navigate = useNavigate();

  const onChangeUser = (e) => {
    setPhone(e.target.value);

    if (phone) {
      setButton(true);
    }
  };

  const onChangeBus = (e) => {
    setForm(() => ({
      ...initialForm,
      [e.target.id]: e.target.value,
    }));
    if (initialForm.email && initialForm.password) {
      setButton(true);
    }
  };

  const handleSubmit = () => {
    if (buttonState == false) {
      alert("Please key in your email and password");
    } else {
      if (loginState) {
        navigate("/dashboard");
      } else {
        navigate("/main");
      }
    }
  };

  return (
    <div clasName="container">
      {/* Navbar */}
      <div className="nav_login">
        <div className="navWrapper">
          <img src={grabLogo} alt="" />
          <div onClick={() => setloginState(!loginState)}>
            {loginState ? <p>Grab For User</p> : <p>Grab For Business</p>}
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <div className="login">
          <h2>Login to Grab</h2>
          <p>Enter your login information</p>
          {loginState ? (
            <div className="formInputBus">
              <input
                type="email"
                id="email"
                placeholder="Email"
                onChange={onChangeBus}
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={onChangeBus}
              />
            </div>
          ) : (
            <div className="formInput">
              <div className="country">
                <p
                  style={{
                    width: "25%",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "1px",
                  }}
                >
                  +65
                </p>
              </div>
              <input
                type="phone"
                id="phone"
                placeholder="Phone Number"
                onChange={onChangeUser}
              />
            </div>
          )}
          <div className="rem">
            <input type="checkbox" />
            <p> Remember me on this device for 60 days</p>
          </div>
          <button
            className={`submitbtn ${buttonState ? "allowed" : ""}`}
            disabled={!buttonState}
            onClick={handleSubmit}
          >
            Next
          </button>

          <p id="terms">
            By continuing, you have read and agree to the {""}
            <a href="/">Terms and conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
