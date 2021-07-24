import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  Button,
  Container
} from "react-bootstrap";

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const UpdateUser = ({ userDetails }) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  // redirect to personal profile page if username is yours
  const user = data?.me || data?.user || {};
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <Container fluid="sm">
      
      <Card small className="mb-4">
        <Card.Header className="border-bottom">
          <h6 className="m-0">{user.username}'s Profile</h6>
        </Card.Header>
        
        <ListGroup flush >
          <Row>
            <Col xs={2} md={4} lg={6}>
              <Card small className="mb-4 pt-3">
                <Card.Header className="border-bottom text-center">
                  <div className="mb-3 mx-auto">
                    <img
                      className="rounded-circle"
                      src={userDetails.avatar}
                      alt={userDetails.name}
                      width="110"
                    />
                  </div>
                  <h4 className="mb-0">{userDetails.name}</h4>
                  <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
                  <Button pill outline size="sm" className="mb-2">
                    <i className="material-icons mr-1">person_add</i> Follow
                  </Button>
                </Card.Header>
                <ListGroup flush>
                  <ListGroupItem className="px-4">
                    <div className="progress-wrapper">
                      <strong className="text-muted d-block mb-2">
                        {userDetails.performanceReportTitle}
                      </strong>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="p-4">
                    <strong className="text-muted d-block mb-2">
                      {userDetails.metaTitle}
                    </strong>
                    <span>{userDetails.metaValue}</span>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <Form>
                <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feFirstName">First Name</label>
                    <Form.Control
                      id="feFirstName"
                      placeholder="First Name"
                      value="Sierra"
                      onChange={() => {}}
                    />
                  </Col>
                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feLastName">Last Name</label>
                    <Form.Control
                      id="feLastName"
                      placeholder="Last Name"
                      value="Brooks"
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feEmail">Email</label>
                    <Form.Control
                      type="email"
                      id="feEmail"
                      placeholder="Email Address"
                      value="sierra@example.com"
                      onChange={() => {}}
                      autoComplete="email"
                    />
                  </Col>
                  {/* Password */}
                  <Col md="6" className="form-group">
                    <label htmlFor="fePassword">Password</label>
                    <Form.Control
                      type="password"
                      id="fePassword"
                      placeholder="Password"
                      value="EX@MPL#P@$$w0RD"
                      onChange={() => {}}
                      autoComplete="current-password"
                    />
                  </Col>
                </Row>
                <Form.Group>
                  <label htmlFor="feAddress">Address</label>
                  <Form.Control
                    id="feAddress"
                    placeholder="Address"
                    value="1234 Main St."
                    onChange={() => {}}
                  />
                </Form.Group>
                <Row form>
                  {/* City */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">City</label>
                    <Form.Control
                      id="feCity"
                      placeholder="City"
                      onChange={() => {}}
                    />
                  </Col>
                 {/* State */}
                 <Col md="2" className="form-group">
                    <label htmlFor="feZipCode">State</label>
                    <Form.Control
                      id="feState"
                      placeholder="State"
                      onChange={() => {}}
                    />
                  </Col>
                  {/* Zip Code */}
                  <Col md="2" className="form-group">
                    <label htmlFor="feZipCode">Zip</label>
                    <Form.Control
                      id="feZipCode"
                      placeholder="Zip"
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">Description</label>
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                      />
                  </Col>
                </Row>
                <Button theme="accent">Update Account</Button>
              </Form>
            </Col>
          </Row>
        </ListGroup>
      </Card>
    </Container>
  );
};

//test information
UpdateUser.defaultProps = {
  userDetails: {
    name: "Sierra Brooks",
    avatar: "",
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default UpdateUser;
