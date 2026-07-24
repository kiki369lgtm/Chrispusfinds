import ProductGrid from "../components/ProductGrid/ProductGrid";
import { products } from "../data/products";

const AllCategories = () => {
  return (
    <div className="category-page">
      <div className="category-header">
        <h1>All Products</h1>
        <p>Browse our complete collection of mobile devices and accessories</p>
      </div>
      <ProductGrid products={products} title="All Products" />
    </div>
  );
};

export default AllCategories;