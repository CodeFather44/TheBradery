import "./AddItemToCartButton.css";
import axios from "axios";

interface AddItemToCartButtonProps {
  productId:number;
}
 
  export default function AddItemToCartButton({productId}:AddItemToCartButtonProps){
    
    const handleAddToCart = async ()=> {
      try {
        await axios.post("http://localhost:5000/add-to-cart", { productId });
      alert("Produit ajouté au panier avec succès!");
      }catch (error) {
        console.error("Erreur lors de l'ajout au panier", error);
        alert("Une erreur s'est produite lors de l'ajout au panier.");
      }
    };


    return(
        <button className="CartButton" onClick={handleAddToCart}>Ajouter au panier +</button>
    );

}