import { Link } from "react-router-dom";
import { menuData } from "./MenuData";

const MegaMenu = ({ activeMenu, onHover, onLeave }) => {
  return (
    <nav className="mega-menu-nav">
      <ul className="mega-menu-list">
        {menuData.map((item) => (
          <li
            key={item.label}
            className="mega-menu-item"
            onMouseEnter={() => onHover(item.label)}
            onMouseLeave={onLeave}
          >
            <Link to={item.path} className="mega-menu-link">
              {item.label}
              {item.dropdown && <i className="fas fa-chevron-down menu-arrow" />}
            </Link>

            {/* Dropdown Panel */}
            {item.dropdown && activeMenu === item.label && (
              <div className="dropdown-panel">
                <ul className="dropdown-list">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.path}>
                      <Link to={subItem.path} className="dropdown-link">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu;