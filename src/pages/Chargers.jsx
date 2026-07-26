import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProducts } from "../hooks/useProducts";

const Chargers = () => {
  const { products, loading, error } = useProducts({ category: "Chargers" });

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Chargers</h1>
      </div>
      <ProductGrid products={products} title="Chargers" loading={loading} error={error} />
    </div>
  );
};

export default Chargers;