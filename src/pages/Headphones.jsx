import ProductGrid from "../components/ProductGrid/ProductGrid";
import { getProductsByCategory } from "../data/products";

const Headphones = () => {
  const products = getProductsByCategory("headphones");

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Headphones</h1>
      </div>
      <ProductGrid products={products} title="Headphones" />
    </div>
  );
};

export default Headphones;