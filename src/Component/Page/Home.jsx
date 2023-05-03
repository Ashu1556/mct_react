import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="homecomponent">
      <div className="secondcomponent">
        <div className="secondcomponent1">
          <span
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            DELIVERY TO THE
            <br />
            DOORSTEP
          </span>
          <ul style={{ marginBottom: "10px" }}>
            <li>Choose your ingredient</li>
            <li>Get free Delivery 24/7</li>
            <li>Special gift coupons</li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", width: "70%" }}>
            <input type="text" placeholder="email" className="inputtext" />
            <button className="btntext" style={{ backgroundColor: "red" }}>
              Subscribe
            </button>
          </div>
        </div>
        <div className="secondcomponent2">
          <img
            className="imagetag"
            src="https://th.bing.com/th/id/OIP.djlnJoe23sxS415sQi--CQHaE8?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
