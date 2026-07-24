import { useNavigate } from "react-router-dom";

const CategoryDropdown = ({
  categories,
  selected,
  isOpen,
  onToggle,
  onSelect
}) => {
  const navigate = useNavigate();

  const defaultCategories = [
    { label: 'All Categories', path: '/categories' },
    { label: 'Smartphones', path: '/smartphones' },
    { label: 'Tablets', path: '/tablets' },
    { label: 'Accessories', path: '/accessories' },
    { label: 'Smart Watches', path: '/smart-watches' },
    { label: 'Headphones', path: '/headphones' },
    { label: 'Chargers', path: '/chargers' },
    { label: 'Cases & Covers', path: '/cases-covers' }
  ];

  const items = categories.length > 0 ? categories : defaultCategories;
  const displayText = selected || 'SELECT CATEGORY';

  const handleSelect = (item) => {
    onSelect(item.label);
    navigate(item.path);
  };

  return (
    <div className="category-dropdown">
      <button
        type="button"
        className="category-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="category-label">{displayText}</span>
        <i className={`fas fa-chevron-down dropdown-arrow ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <ul className="category-menu">
          {items.map((item) => (
            <li
              key={item.path}
              className={`category-item ${selected === item.label ? 'active' : ''}`}
              onClick={() => handleSelect(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;