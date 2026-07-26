import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryDropdown from "./CategoryDropdown";
import SearchButton from "./SearchButton";
import useClickOutside from "./userClickOutside";
import { useSuggestions } from "../hooks/useSuggestions";
import { formatPrice } from "../utils/formatPrice";
import { highlightMatch } from "../utils/highlightMatch";
import './SearchBar.css';

const SearchBar = ({ onSearch, categories = [] }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const suggestionsRef = useRef(null);
  const navigate = useNavigate();

  const { suggestions, loading } = useSuggestions(query);
  const showSuggestions = isSuggestionsOpen && query.trim().length > 0;
  const isFuzzyOnly = suggestions.length > 0 && suggestions.every((s) => s.rank_tier >= 3);

  // Close dropdowns when clicking outside
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));
  useClickOutside(suggestionsRef, () => setIsSuggestionsOpen(false));

  const runSearch = (overrideQuery) => {
    onSearch?.({ query: overrideQuery ?? query, category: selectedCategory });
    setIsSuggestionsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    runSearch();
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const handleSelectSuggestion = (product) => {
    setIsSuggestionsOpen(false);
    navigate(`/product/${product.id}`);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsSuggestionsOpen(true);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev <= 0 ? suggestions.length - 1 : prev - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelectSuggestion(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      setIsSuggestionsOpen(false);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {/* Search Input */}
      <div className="search-input-wrapper" ref={suggestionsRef}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for products"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsSuggestionsOpen(true)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />

        {showSuggestions && (
          <div className="search-suggestions">
            {loading && suggestions.length === 0 && (
              <div className="suggestions-status">Searching...</div>
            )}

            {!loading && suggestions.length === 0 && (
              <div className="suggestions-status">No products found.</div>
            )}

            {suggestions.length > 0 && (
              <>
                {isFuzzyOnly && (
                  <div className="suggestions-heading">Did you mean:</div>
                )}
                <ul className="suggestions-list">
                  {suggestions.map((product, index) => (
                    <li
                      key={product.id}
                      className={`suggestion-item ${index === activeIndex ? "active" : ""}`}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handleSelectSuggestion(product)}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="suggestion-thumb"
                        onError={(e) => {
                          e.target.src = "/images/placeholder.jpg";
                        }}
                      />
                      <div className="suggestion-info">
                        <span className="suggestion-name">
                          {highlightMatch(product.name, query)}
                        </span>
                        <span className="suggestion-meta">
                          {product.subcategory} · {product.category}
                        </span>
                      </div>
                      <span className="suggestion-price">{formatPrice(product.cash_price)}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>

      {/* Category Dropdown */}
      <div className="search-divider" />
      <div className="category-wrapper" ref={dropdownRef}>
        <CategoryDropdown
          categories={categories}
          selected={selectedCategory}
          isOpen={isDropdownOpen}
          onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
          onSelect={handleCategorySelect}
        />
      </div>

      {/* Search Button */}
      <SearchButton onClick={handleSearch} />
    </form>
  );
};

export default SearchBar;
