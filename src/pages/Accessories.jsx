import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProducts } from "../hooks/useProducts";

const Accessories = () => {
  const { products, loading, error } = useProducts({ category: "Accessories" });

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Accessories</h1>
      </div>
      <ProductGrid products={products} title="Accessories" loading={loading} error={error} />
    </div>
  );
};

export default Accessories;