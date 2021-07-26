import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';



const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="bottom col-12 mt-5 text-white bg-dark">
      <div className="">
        {location.pathname !== '/' && (
          <button
            className="btn float-left-custom text-white"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <span className="btn col-12 text-white">
          Pandoras Box © 2021 Ltd. Arr. | Ashquinn Gordon, Austin Joo, Brandon Ford, Forest Wilson 

        </span>
        <button  className="btn float-right-custom text-white" onClick={() => history.goForward()} > Go Forward &rarr;  </button>
      </div>
    </footer>
  );
};

export default Footer;
