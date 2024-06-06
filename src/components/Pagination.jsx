import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="my-4">
      <ul className="pagination justify-content-center">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  charactersPerPage: PropTypes.number.isRequired,
  totalCharacters: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;