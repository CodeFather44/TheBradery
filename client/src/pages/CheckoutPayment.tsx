import "./CheckoutPayment.css";
import CartInterface from "../Types/ProductInterface";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

export default function CheckoutPayment() {
  const [cart, setCart] = useState<CartInterface[]>([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await axios.get("http://localhost:5000/cart");
        setCart(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits", error);
      }
    }

    fetchCart();
  }, []);

  return (
    <div className="container">
      {cart.map((cartItem: CartInterface) => (
        <div key={cartItem.id} className="card">
          <ProductCard /*product={cartItem.product}*/ />
        </div>
      ))}
    </div>
  );
}
