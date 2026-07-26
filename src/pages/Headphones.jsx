import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProducts } from "../hooks/useProducts";

const Headphones = () => {
  const { products, loading, error } = useProducts({ category: "Headphones" });

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Headphones</h1>
      </div>
      <ProductGrid products={products} title="Headphones" loading={loading} error={error} />
    </div>
  );
};

export default Headphones;