import React from "react";
import "./profile.css";
import grabIcon from "../images/grabLogo.png";
import { CgProfile } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import { Route, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const settings = [
    {
      id: 0,
      name: "My Profile",
      current: true,
    },
    {
      id: 1,
      name: "Rewards",
    },
    {
      id: 2,
      name: "Subscriptions",
    },
    {
      id: 3,
      name: "Challenges",
    },
    {
      id: 4,
      name: "Scheduled",
    },
    {
      id: 5,
      name: "Saved Places",
    },
    {
      id: 6,
      name: "Emergency Contacts",
    },
    {
      id: 7,
      name: "Business Account",
    },
    {
      id: 8,
      name: "Help Centre",
    },
    {
      id: 9,
      name: "settings",
    },
    {
      id: 10,
      name: "Share Feedback",
    },
  ];
  return (
    <div>
      <div className="profileContainer">
        <div className="profileNav">
          <div className="profileIcon">
            <img src={grabIcon} alt="" />
          </div>
          <div className="itemsWrapper">
            {settings.map((setting) => (
              <div
                className={`settingsItem ${setting.current ? "current" : null}`}
                id={setting.id}
              >
                <div>
                  <p>{setting.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="profileHero">
          <div className="MeIcon">
            <CgProfile
              style={{
                fontSize: "70px",
                color: "green",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <p>Derrick Tay</p>
          </div>

          <div className="Info">
            <div className="basicInfo">
              <h2>Basic Information</h2>
              <div className="basicWrapper">
                <div>
                  <p className="bold">Full Name</p>
                  <p>Derrick Tay</p>
                </div>
                <div>
                  <p className="bold">Email Address</p>
                  <p>test123@gmail.com</p>
                </div>
                <div>
                  <p className="bold">Pronouns</p>
                  <p>he/him</p>
                </div>
                <div>
                  <p className="bold">Student ID</p>
                  <p>23232</p>
                </div>
                <div>
                  <p className="bold">Password</p>
                  <p>*********</p>
                </div>
              </div>
            </div>

            <div className="eligible">
              <h2>Be part of Grab Feed !</h2>
              <div className="eligibleWrapper">
                <div className="declared">
                  <p>
                    You are already part of our{" "}
                    <span
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      onClick={() => navigate("/stores")}
                    >
                      Grab Feed!
                    </span>
                  </p>
                  <TiTick
                    style={{
                      color: "green",
                      fontSize: "25px",
                      marginLEft: "5px",
                    }}
                  />
                </div>
                <p>How to be eligible for Grab Feed?</p>
                <div className="howto">
                  <button className="singPass">Login with Singpass</button>
                  <div className="spanContainer">
                    <span /> <p>or</p>
                    <span />
                  </div>
                  <button className="doc">
                    Send a request with document of proof
                  </button>
                </div>
              </div>
            </div>

            <div className="jobInfo">
              <h2>Job Information</h2>
              <div className="jobWrapper">
                <div>
                  <p className="bold">Company</p>
                  <p className="underline">Add company</p>
                </div>
                <div>
                  <p className="bold">Job Title</p>
                  <p className="underline">Add job title</p>
                </div>
                <div>
                  <p className="bold">Department</p>
                  <p className="underline">Add department</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
