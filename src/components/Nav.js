import React from "react";
import "./nav.css";
import grabLogo from "../images/grabLogo.png";
import { BsFillHandbagFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { selectCount } from "../slice/cartSlice";
import { useSelector } from "react-redux";

function Nav({ updateState, state }) {
  const navigate = useNavigate();
  const currentCount = useSelector(selectCount);

  return (
    <>
      <div className="nav">
        <div className="navWrapper_">
          <img src={grabLogo} alt="" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              className="navBtn"
              style={{ marginRight: "8px" }}
              onClick={() => updateState(!state)}
            >
              <BsFillHandbagFill
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
            </div>
            <p className="count">{currentCount}</p>

            <div className="navBtn" onClick={() => navigate("/profile")}>
              <AiOutlineUser
                style={{
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
