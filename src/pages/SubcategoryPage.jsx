import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProducts } from "../hooks/useProducts";

const formatLabel = (slug) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const SubcategoryPage = () => {
  const { category, subcategory } = useParams();
  const { products, loading, error } = useProducts({ category, subcategory });

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{formatLabel(subcategory)}</h1>
        <p>{formatLabel(category)}</p>
      </div>
      <ProductGrid products={products} title={formatLabel(subcategory)} loading={loading} error={error} />
    </div>
  );
};

export default SubcategoryPage;
