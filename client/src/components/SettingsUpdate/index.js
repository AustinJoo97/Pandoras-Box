import React from 'react';

// import Auth from '../../utils/auth';

import {
    Row,
    Col,
    Form,
    Button,
} from "react-bootstrap";


const SettingsUpdate = () => {

    return (
        <Col lg={3} className="ml-5 mr-1 mb-5 mt-5">
            <Form >
                <Row >
                  {/* First Name */}
                  <Col lg={3} className="form-group">
                    <label htmlFor="feFirstName">First Name</label>
                    <Form.Control
                      id="feFirstName"
                      placeholder="First Name"
                      value="Sierra"
                      onChange={() => {}}
                    />
                  </Col>
                  {/* Last Name */}
                  <Col lg={12} className="form-group">
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
                <Row form>
                  {/* Location */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">General Location</label>
                    <Form.Control
                      id="feLocation"
                      placeholder="Location"
                      onChange={() => {}}
                    />
                  </Col>
                  <Col md="6" className="form-group">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Profile Picture</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row form>
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription"> Profile Description</label>
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
    );
  };
  
export default SettingsUpdate;