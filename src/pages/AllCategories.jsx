import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProducts } from "../hooks/useProducts";

const AllCategories = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>All Products</h1>
        <p>Browse our complete collection of mobile devices and accessories</p>
      </div>
      <ProductGrid products={products} title="All Products" loading={loading} error={error} />
    </div>
  );
};

export default AllCategories;