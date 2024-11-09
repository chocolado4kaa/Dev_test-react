import "./DropdownContainer.scss";

const DropdownContainer = ({ children, title, onToggle, isOpen }) => {
    return (
      <div className="filter">
        <label className="filter-title p2">{title}</label>
        <span className={`filter-arrow ${!isOpen ? "" : "rotated"}`}></span>
        <div className="toggle_button" onClick={onToggle}></div>
        <div className={`dropdown-list ${!isOpen ? "hidden" : ""}`}>
          {children}
        </div>
      </div>
    );
  };
  export default DropdownContainer;