import React from 'react';

const SortingMenu = ({ availableSortings, selectedSort, onSortSelect }) => (
  <div>
    <a className='nav-link dropdown-toggle' data-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>
      {availableSortings[selectedSort].display}
    </a>
    <div className='dropdown-menu'>
      {Object.keys(availableSortings)
        .filter(key => key !== selectedSort)
        .map(key => availableSortings[key])
        .map(sorting => (
          <a key={sorting.option}
            className='dropdown-item'
            href='#'
            onClick={() => onSortSelect(sorting.option)}>
            {sorting.display}
          </a>
        ))
      }
    </div>
  </div>
);

export default SortingMenu;