import { useState, useRef } from 'react';
import CategoryDropdown from "./CategoryDropdown";
import SearchButton from "./SearchButton";
import useClickOutside from "./userClickOutside";
import './SearchBar.css';

const SearchBar = ({ onSearch, categories = [] }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch?.({ query, category: selectedCategory });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {/* Search Input */}
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search for products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
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
