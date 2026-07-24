import ProductGrid from "../components/ProductGrid/ProductGrid";
import { getProductsByCategory } from "../data/products";

const SmartWatches = () => {
  const products = getProductsByCategory("smart-watches");
  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Smart Watches</h1>
      </div>
      <ProductGrid products={products} title="Smart Watches" />
    </div>
  );
};

export default SmartWatches;