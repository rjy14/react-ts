import React, { memo } from 'react';

interface FilterProps {
  selectedFilter: string | null;
  onFilterChange: (value: string) => void;
  onClearAll: () => void;
}

const Filter: React.FC<FilterProps> = ({ selectedFilter, onFilterChange, onClearAll }) => {
  const handleFilterChange = (value: string) => {
    onFilterChange(value);
  };

  return (
    <div className="filter">
      <div className="alignment">
        <u>
          <h3>Filters</h3>
        </u>
        <label className="sidebar-label-container">
          <input
            type="radio"
            value="Bags"
            checked={selectedFilter === 'Bags'}
            onChange={() => handleFilterChange('Bags')}
          />
          <span className="checkmark"></span>
          Bags
        </label>
        <label className="sidebar-label-container">
          <input
            type="radio"
            value="Shirts"
            checked={selectedFilter === 'Shirts'}
            onChange={() => handleFilterChange('Shirts')}
          />
          <span className="checkmark"></span>
          Shirts
        </label>
        <label className="sidebar-label-container">
          <input
            type="radio"
            value="Sneakers"
            checked={selectedFilter === 'Sneakers'}
            onChange={() => handleFilterChange('Sneakers')}
          />
          <span className="checkmark"></span>
          Sneakers
        </label>
        <label className="sidebar-label-container">
          <input
            type="radio"
            value="New"
            checked={selectedFilter === 'New'}
            onChange={() => handleFilterChange('New')}
          />
          <span className="checkmark"></span>
          New
        </label>
      </div>
      <center>
        <button onClick={onClearAll}>Clear</button>
      </center>
    </div>
  );
};

export default memo(Filter);