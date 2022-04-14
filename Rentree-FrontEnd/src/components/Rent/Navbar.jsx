import { React } from "react";
import "./Styles/Navbar.css";
import { Link } from "react-router-dom";


const Navbar = ({ setShow, size }) => {
  return (
    <div>
      <nav>
        <div className="nav_box">
          <ul>
            <li className="icon">
              <i class="fas fa-hand-holding-medical"></i>

              <Link
                to="/Epharma/topbooks"
                className="my_shop"
                onClick={() => setShow(true)}
              >
                Top Sellers
              </Link>
            </li>
          </ul>
          <ul>
            <li >
              <i ></i>

              <Link
                to="/Epharma/newbooks"
                className="my_shop"
                onClick={() => setShow(true)}
              >
               New Arrivals
              </Link>
            </li>
          </ul>
          <ul>
            <li className="icon">
              <i class="fas fa-pills"></i>

              <Link
                to="/Epharma/premiumgames"
                className="my_shop"
                onClick={() => setShow(true)}
              >
                Premium Games
              </Link>
            </li>
          </ul>
          <ul>
            <li >
              <i ></i>

              <Link
                to="/Epharma/MedicalDevice"
                className="my_shop"
                onClick={() => setShow(true)}
              >
                Games
              </Link>
            </li>
          </ul>
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i ></i>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
