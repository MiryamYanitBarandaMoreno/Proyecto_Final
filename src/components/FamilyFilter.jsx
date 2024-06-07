import React from 'react';
import PropTypes from 'prop-types';

const FamilyFilter = ({ families, selectedFamily, handleFilterChange }) => {
  return (
    <div className="input-group custom-input-group">
      <label htmlFor="familyFilter" className="input-group-text text-white">Filter by Family</label>
      <select 
        id="familyFilter" 
        className="form-select text-white" 
        value={selectedFamily} 
        onChange={handleFilterChange}
      >
        <option value="">All Families</option>
        {families.map((family, index) => (
          <option key={index} value={family}>{family}</option>
        ))}
      </select>
    </div>
  );
};

FamilyFilter.propTypes = {
  families: PropTypes.array.isRequired,
  selectedFamily: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default FamilyFilter;
