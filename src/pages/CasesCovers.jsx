import ProductGrid from "../components/ProductGrid/ProductGrid";
import { getProductsByCategory } from "../data/products";

const CasesCovers = () => {
  const products = getProductsByCategory("cases-covers");

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Cases & Covers</h1>
        <p>Protect your device in style</p>
      </div>
      <ProductGrid products={products} title="Cases & Covers" />
    </div>
  );
};

export default CasesCovers;