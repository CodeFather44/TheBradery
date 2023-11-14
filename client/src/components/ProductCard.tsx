import "./ProductCard.css";
import ProductInterface from "../Types/ProductInterface";
import { useState, useEffect } from "react";
import axios from "axios";
import itemImage from "../assets/itemImage.jpg";
import AddItemToCardButton from "../components/AddItemToCartButton";

export default function ProductCardComponent() {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="container">
      {products.map((product: ProductInterface) => (
        <div key={product.id} className="card">
          <img src={itemImage} />
          <div className="ProductName">{product.name}</div>
          <div className="ProductPrice">{product.price} €</div>
          <AddItemToCardButton productId={product.id}></AddItemToCardButton>
        </div>
      ))}
    </div>
  );
}
