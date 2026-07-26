import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProducts } from "../hooks/useProducts";

function Tablets() {
  const { products, loading, error } = useProducts({ category: "Tablets" });

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Tablets</h1>
      </div>
      <ProductGrid products={products} title="Tablets" loading={loading} error={error} />
    </div>
  );
}

export default Tablets;