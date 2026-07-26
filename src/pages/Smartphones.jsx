import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProducts } from "../hooks/useProducts";

const Smartphones = () => {
  const { products, loading, error } = useProducts({ category: "Mobile Phones" });

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Smartphones</h1>
        <p>Discover the latest smartphones from top brands</p>
      </div>
      <ProductGrid products={products} title="Phones" loading={loading} error={error} />
    </div>
  );
};

export default Smartphones;