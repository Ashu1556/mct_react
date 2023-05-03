import React, { useEffect } from "react";
import myStore from "./Redux/Store";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./fetchdata.css";
import { BiCheese } from "react-icons/bi";
import { FaChild } from "react-icons/fa";
import { FaFish } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";
import { GiThreeLeaves } from "react-icons/gi";
import { GiPeas } from "react-icons/gi";

const Fetchdata = () => {
  const data1 = useSelector((storedata) => {
    return storedata.data;
  });

  const url = "https://pizzaallapala.p.rapidapi.com/productos";
  const options = {
    method: "GET",

    headers: {
      "X-RapidAPI-Key": "e26e397864mshf41ee0d9b4766a8p14939cjsn7a8469f524f2",
      "X-RapidAPI-Host": "pizzaallapala.p.rapidapi.com",
    },
  };

  const fetchdata = async () => {
    const data = await fetch(url, options);
    const newdata = await data.json();

    myStore.dispatch({
      type: "fetchdata",
      payload: newdata.productos,
    });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <div className="fetchcomponent">
        <div className="fetchcomponent1">
          <span>
            <BiCheese />
            Cheese
          </span>
          <span>
            <FaChild />
            FOR KIDS
          </span>
          <span>
            <FaFish />
            SEE FOOD
          </span>
          <span>
            <AiTwotoneHeart />
            SWEET
          </span>
          <span>
            <GiThreeLeaves />
            VEGGIE
          </span>
          <span>
            <GiPeas />
            PIQUANT
          </span>
        </div>
        <div className="fetchcomponent2">
          {data1.map((ele) => {
            return (
              <div className="hovereffect" style={{ textAlign: "center" }}>
                <img src={ele.linkImagen} height={200} width={200} alt="" />
                <div className="overlay">
                  <div className="text8">
                    <img src={ele.linkImagen} height={400} width={400} alt="" />
                    <p
                      className="nametext"
                      style={{ marginTop: "2rem", marginBottom: "1rem" }}
                    >
                      {ele.nombre.toUpperCase()}
                    </p>
                    <p className="pricetext" style={{ marginBottom: "2rem" }}>
                      ${ele.precio}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Link to="/addcart">
                        <button
                          style={{
                            width: "10rem",
                            height: "3rem",
                            backgroundColor: "red",
                            color: "white",
                            marginRight: "1rem",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          ADD TO CART
                        </button>
                      </Link>

                      <button
                        className="quickview"
                        style={{
                          width: "10rem",
                          height: "3rem",
                          border: "none",
                          cursor: "pointer",
                          backgroundColor: "antiquewhite",
                          color: "black",
                        }}
                      >
                        QUICK VIEW
                      </button>
                    </div>
                  </div>
                </div>
                <p className="nametext">{ele.nombre.toUpperCase()}</p>
                <p className="pricetext">${ele.precio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fetchdata;
