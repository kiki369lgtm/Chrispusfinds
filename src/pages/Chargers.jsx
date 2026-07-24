import ProductGrid from "../components/ProductGrid/ProductGrid";
import { getProductsByCategory } from "../data/products";

const Chargers = () => {
  const products = getProductsByCategory("chargers");

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Chargers</h1>
      </div>
      <ProductGrid products={products} title="Chargers" />
    </div>
  );
};

export default Chargers;