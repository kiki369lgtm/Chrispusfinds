const SearchButton = ({ onClick }) => {
  return (
    <button 
      type="submit"
      className="search-button"
      onClick={onClick}
      aria-label="Search"
    >
      <i className="fas fa-search" />
    </button>
  );
};

export default SearchButton;