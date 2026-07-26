import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ products, title, loading, error }) => {
  if (loading) {
    return (
      <div className="product-grid-empty">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-grid-empty">
        <p>Failed to load products: {error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="product-grid-empty">
        <p>No products found in this category.</p>
      </div>
    );
  }

  return (
    <section className="product-grid-section">
      {title && <h2 className="grid-title">{title}</h2>}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;