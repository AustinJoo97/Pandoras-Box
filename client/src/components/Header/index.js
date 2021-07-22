import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown'

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <h3>Pandoras Box</h3>
          </a>


          <Dropdown className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Dropdown.Toggle variant="info" id="dropdown-basic">
               Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">Rap</Dropdown.Item>
                <Dropdown.Item href="/">Country</Dropdown.Item>
                <Dropdown.Item href="/">Hip-Hop</Dropdown.Item>
                <Dropdown.Item href="/">Folk</Dropdown.Item>
                <Dropdown.Item href="/">R&B</Dropdown.Item>
                <Dropdown.Item href="/">Techno</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search"></input>
          </form>
            {Auth.loggedIn() ? (
              <>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Options
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/me">{Auth.getProfile().data.username}'s profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">View Favorites</Dropdown.Item>
                <Dropdown.Item onClick={logout}> Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              </>
            ) : (
              <>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Options
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/login">Login</Dropdown.Item>
                <Dropdown.Item href="/signup">Sign Up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              </>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;
