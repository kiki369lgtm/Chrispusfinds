import ProductGrid from "../components/ProductGrid/ProductGrid";
import { getProductsByCategory } from "../data/products";

const Smartphones = () => {
  const products = getProductsByCategory("smartphones");

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Smartphones</h1>
        <p>Discover the latest smartphones from top brands</p>
      </div>
      <ProductGrid products={products} title="Phones" />
    </div>
  );
};

export default Smartphones;