import React from 'react';

import {
    Row,
    Col,
    Form,
    Button,
} from "react-bootstrap";


const SettingsUpdate = () => {

    return (
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
    );
  };
  
export default SettingsUpdate;
  