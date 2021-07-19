import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="">
      <div className="">
        {location.pathname !== '/' && (
          <button
            className="btn"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <span>
          Pandoras Box © 2021 Ltd. Arr. | Ashquinn Gordon, Austin Joo, Brandon Ford, Forest Wilson 

        </span>
      </div>
    </footer>
  );
};

export default Footer;
