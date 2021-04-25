import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function DropdownMenu() {
  const [click, setClick] = useState(false);
  return (
    <>
      <ul
        onClick={() => setClick(!click)}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <li>
          <Link
            onClick={() => setClick(false)}
            className="dropdown-link"
            to="/adventure"
          >
            ADVENTURE TRAVEL
          </Link>
          <Link
            onClick={() => setClick(false)}
            className="dropdown-link"
            to="/romance"
          >
            ROMANCE AND HONEYMOON
          </Link>
          <Link
            onClick={() => setClick(false)}
            className="dropdown-link"
            to="/family"
          >
            FAMILY HOLIDAYS
          </Link>
        </li>
      </ul>
    </>
  );
}

export default DropdownMenu;
