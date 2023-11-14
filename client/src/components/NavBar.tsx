import "./NavBar.css";
import { FaSistrix, FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function NavBarComponent() {
  const navigate = useNavigate();
  return (
    <nav className="navBar">
      <a href="/Home" className="theBradery">
        The Bradery
      </a>
      <ul>
        <li className="search">
          <a href="/">
            <FaSistrix className="searchIcon"></FaSistrix>Rechercher
          </a>
        </li>
        <li>
          <a href="/">
            <button onClick={() => navigate("/CheckoutPayment")}>
              <FaCartShopping className="basketIcon"></FaCartShopping>Panier
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
