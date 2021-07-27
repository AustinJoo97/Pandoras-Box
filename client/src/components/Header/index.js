import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { HiSearch, HiUser, HiOutlineCake } from "react-icons/hi"
import { GiBoxTrap } from "react-icons/gi"
import Dropdown from 'react-bootstrap/Dropdown'

// pages
import ShowSearchScreen from '../../pages/Search'

// utils
import Auth from '../../utils/auth';
import '../../styles/Header.css';


const Header = () => {
  const [searchVal, setSearch] = useState('');

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // used to grab query from search bar, pass to seach page
  const querySearchButton = () => {
    console.log(searchVal);

    return (
      <ShowSearchScreen query={searchVal} />
    )
  }

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start row">

          {/* Site Logo */}
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none col-5">
            <GiBoxTrap className="display-2"></GiBoxTrap>
            <h3 className="display-4">Pandoras Box</h3>
          </a>

          {/* search */}
          <div className="col-6">
            <div className="search-bar">
              {/* genre drop down menu */}
              <Dropdown className="">
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Search by Categories
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


              {/* search bar */}
              <form className="col-6">
                <input type="search" className="form-control" placeholder="Search by Artist" aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                ></input>

                {/* search button */}
              </form>
                <Link
                  className="col-1"
                  to="/search"
                  onClick={() => querySearchButton()}>
                  <HiSearch />

                </Link>
            </div>
          </div>

          {/* profile drop down menu */}
          {Auth.loggedIn() ? (
            <>
              <Dropdown className="col-1">
                <Dropdown.Toggle variant="info" id="dropdown-basic" className="menu-trigger">
                  <HiOutlineCake />
                  {Auth.getProfile().data.username}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/me">{Auth.getProfile().data.username}'s profile</Dropdown.Item>
                  <Dropdown.Item href="/settings">Settings</Dropdown.Item>
                  <Dropdown.Item onClick={logout}> Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <>
              <Dropdown className="col-1">
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                  <HiUser />
                  Log-in
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
