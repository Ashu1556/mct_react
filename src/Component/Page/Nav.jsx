import React from "react";
import "./Nav.css";
import { FcGoogle } from "react-icons/fc";
import { BsYoutube } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="firstcomponent">
        <div className="firstchildcomponent1">
          <h4>RapidAPI</h4>
        </div>
        <div className="firstchildcomponent">
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div>
            <Link to="/menu">Menu</Link>
          </div>
          <div>
            <Link to="/events">Events</Link>
          </div>
          <div>
            <Link to="/blog">Blog</Link>
          </div>
        </div>

        <div className="thirdchildcomponent">
          <div className="secondchildcomponent">
            <Link to="https://www.google.com/">
              <FcGoogle />
            </Link>
            <Link to="https://www.youtube.com/">
              <BsYoutube />
            </Link>
            <Link to="https://www.linkedin.com/feed/">
              <ImLinkedin />
            </Link>
            <Link to="https://github.com/Ashu1556">
              <FaGithub />
            </Link>
          </div>
          <div className="thirdchildcomponent1">
            ORDER
            <br />
            ONLINE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
