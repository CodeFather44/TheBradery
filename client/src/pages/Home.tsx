import "./home.css";
import ProductCard from "../components/ProductCard";


function Home() {
  return (
    <>
      <p className="catchPhrase">
        Les plus belles marques<br /> à prix doux.
      </p>
      <ProductCard></ProductCard>
    </>
  );
}
export default Home;
