import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { HiSearch } from "react-icons/hi"
import Dropdown from 'react-bootstrap/Dropdown'

import {
  Row,
  Col,
  Form,
  Button,
  
} from "react-bootstrap";

// import PopulateSearchResults from '../SearchResultsDetails';
import ShowSearchScreen from '../../pages/Search'

import Auth from '../../utils/auth';


const Header = () => {
  const [searchVal, setSearch] = useState('');

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  //if on login or signup page, don't render the header
  if (window.location.pathname === '/login') return null;
  if (window.location.pathname === '/signup') return null;
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
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <h3>Pandoras Box</h3>
          </a>
          {/* search bar */}
          <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 pl-2">
            <Row>
              <Col lg={2}>
                <Link 
                  to="/search"
                  onClick={() => querySearchButton()}>
                  <HiSearch />
                </Link>
              </Col>
              <Col lg={10} className="pl-0">
                <Form.Control type="search" className="form-input" placeholder="Search.." aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>
          </Form>
          {/* genre drop down menu */}
          <Dropdown className="col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
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

          {Auth.loggedIn() ? (
            <>
          <Dropdown className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              User Options
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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            User Options
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
