import React from 'react';
import {Link} from 'react-router-dom'
function ReadMoreButton({title}) {
  return (
    <Link to='/Custom-Aluminum'>
    <button 
      
      className="btn btn-outline-dark rounded-3 fw-bold p-3 mt-4"
      style={{ backgroundColor: 'black', color: 'white' }}
    >
      {title}
    </button>
    </Link>
  );
}

export default ReadMoreButton;
