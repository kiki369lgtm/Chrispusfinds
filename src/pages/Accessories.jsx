import ProductGrid from "../components/ProductGrid/ProductGrid";
import { getProductsByCategory } from "../data/products";

const Accessories = () => {
  const products = getProductsByCategory("accessories");

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Accessories</h1>
      </div>
      <ProductGrid products={products} title="Accessories" />
    </div>
  );
};

export default Accessories;