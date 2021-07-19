import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="">
      <div className="">
        <div>

          <input type="text" placeholder="Search..."></input>
          <button type="submit">GO</button>
          
        </div>
        <div>

          <Link className="text-light" to="/">
            <h1 className="m-0">Pandoras Box</h1>
          </Link>

        </div>
        <div>
          
          {Auth.loggedIn() ? (
            <>
              <Link className="btn" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </>

          ) : (
            <>
              <Link className="btn" to="/login">
                Login
              </Link>
              <Link className="btn" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
