import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { getProductsBySubcategory } from "../data/products";

const formatLabel = (slug) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const SubcategoryPage = () => {
  const { category, subcategory } = useParams();
  const products = getProductsBySubcategory(category, subcategory);

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{formatLabel(subcategory)}</h1>
        <p>{formatLabel(category)}</p>
      </div>
      <ProductGrid products={products} title={formatLabel(subcategory)} />
    </div>
  );
};

export default SubcategoryPage;
