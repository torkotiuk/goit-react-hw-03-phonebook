import React from 'react';

const Filter = ({ valueState, filterByName }) => {
  return (
    <label className="filter">
      Filter by name:{' '}
      <input type="text" value={valueState} onChange={filterByName} />
    </label>
  );
};

export default Filter;
