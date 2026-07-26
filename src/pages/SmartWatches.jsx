import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProducts } from "../hooks/useProducts";

const SmartWatches = () => {
  const { products, loading, error } = useProducts({ category: "Smart Watches" });
  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Smart Watches</h1>
      </div>
      <ProductGrid products={products} title="Smart Watches" loading={loading} error={error} />
    </div>
  );
};

export default SmartWatches;