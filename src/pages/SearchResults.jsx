import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProducts } from "../hooks/useProducts";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const { products, loading, error } = useProducts({ search: query, category });

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Search Results</h1>
        {query && <p>Showing results for "{query}"</p>}
      </div>
      <ProductGrid products={products} title="" loading={loading} error={error} />
    </div>
  );
};

export default SearchResults;
