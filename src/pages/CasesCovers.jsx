import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProducts } from "../hooks/useProducts";

const CasesCovers = () => {
  const { products, loading, error } = useProducts({ category: "Cases & Covers" });

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Cases & Covers</h1>
        <p>Protect your device in style</p>
      </div>
      <ProductGrid products={products} title="Cases & Covers" loading={loading} error={error} />
    </div>
  );
};

export default CasesCovers;