import React, { useState } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [state, setState] = useState({
    email: "",
    phone: "",
    Slices: "",
    inch_8: "",
    inch_10: "",
    inch_12: "",
    inch_14: "",
    peproni: "",
    onions: "",
    mushrooms: "",
    susage: "",
  });

  const navigate = useNavigate();

  return (
    <div className="carddata">
      <div className="carddata1">
        <div className="carddata2">
          <h2>Welcome to Italian Pizza!</h2>
          <p>We deliver pizza in 40 minutes max. if not pizza's on us!</p>
        </div>

        <form className="carddata3" onSubmit={() => navigate("/sucessfull")}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Email</label>
            <input
              type="text"
              style={{ width: "60%", height: "30px" }}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <label>Phone</label>
            <input
              type="number"
              style={{ width: "60%", height: "30px" }}
              onChange={(e) => setState({ ...state, phone: e.target.value })}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Number of Slices</label>
            <input
              type="text"
              style={{ width: "60%", height: "30px" }}
              onChange={(e) => setState({ ...state, slices: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Pizza Size</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>
                <input
                  type="radio"
                  onChange={(e) =>
                    setState({ ...state, inch_8: e.target.value })
                  }
                />
                8-inch
              </p>
              <p>
                <input
                  type="radio"
                  onChange={(e) =>
                    setState({ ...state, inch_10: e.target.value })
                  }
                />
                10-inch
              </p>
              <p>
                <input
                  type="radio"
                  onChange={(e) =>
                    setState({ ...state, inch_12: e.target.value })
                  }
                />
                12-inch
              </p>
              <p>
                <input
                  type="radio"
                  onChange={(e) =>
                    setState({ ...state, inch_14: e.target.value })
                  }
                />
                14-inch
              </p>
            </div>
          </div>
          <div>
            {" "}
            <label>Toppings</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setState({ ...state, peproni: e.target.value })
                  }
                />
                Pepproni
              </p>
              <p>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setState({ ...state, onions: e.target.value })
                  }
                />
                Onions
              </p>
              <p>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setState({ ...state, mushrooms: e.target.value })
                  }
                />
                Mushrooms
              </p>
              <p>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setState({ ...state, susage: e.target.value })
                  }
                />
                Sausage
              </p>
            </div>
          </div>
          <p>
            <input type="checkbox" required />I agree to the TERMS AND
            CONDITIONS{" "}
          </p>

          <input type="submit" value="Submit" className="inputsubmit" />
        </form>
      </div>
    </div>
  );
};

export default Card;
