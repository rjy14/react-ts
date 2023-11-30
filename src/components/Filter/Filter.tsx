import { memo } from "react";

interface FilterProps {
  onChange: (value: string) => string;
}
function Filter({ onChange }: FilterProps) {
  console.log("filter rendered");
  return (
    <div className="alignment">
      <u>
        <h3>Filters</h3>
      </u>

      <label className="sidebar-label-container">
        <input
          type="radio"
          value="Bags"
          // onChange={handleFilterChange}
          name="filterGroup"
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="checkmark"></span>
        Bags
      </label>

      <label className="sidebar-label-container">
        <input
          type="radio"
          value="Shirts"
          name="filterGroup"
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="checkmark"></span>
        Shirts
      </label>

      <label className="sidebar-label-container">
        <input
          type="radio"
          value="Sneakers"
          name="filterGroup"
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="checkmark"></span>
        Sneakers
      </label>

      <label className="sidebar-label-container">
        <input
          type="radio"
          value="New"
          name="filterGroup"
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="checkmark"></span>
        New
      </label>
    </div>
  );
}

export default memo(Filter);
