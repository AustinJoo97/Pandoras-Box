import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

import {
    Row,
    Col,
    Form,
    Button,
    Card,
} from "react-bootstrap";


const SettingsUpdate = () => {
  const [formState, setFormState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    location: '',
    bio: '',
    proPic: '',
  });

  const [updateUser, { error, data }] = useMutation(UPDATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await updateUser({
        variables: { ...formState },
      });

      Auth.login(data.updateUser.token);

    } catch (e) {
      console.error(e);
    }
  };

    return (
      
      <Col lg={4} className="ml-5 mr-1 mb-5 mt-5">
      {data ? (
        <p>
          Success! You may now head
        </p>
      ) : (
        <Card>
        <Card.Body>
        <Form onSubmit={handleFormSubmit} >
            <Row >
              {/* Name */}
              <Col lg={6} className="form-group">
                <Form.Group className="mb-2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    id="feName"
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              {/* Username */}
              <Col lg={6} className="form-group">
                <Form.Group className="mb-2">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    id="feUsername"
                    placeholder="Username"
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row form>
              {/* Email */}
              <Col lg={12} className="form-group">
                <Form.Group className="mb-2">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    id="feEmail"
                    name="email"
                    placeholder="Email Address"
                    value={formState.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </Form.Group>
              </Col>
              {/* Password */}
              <Col lg={12} className="form-group">
                <Form.Group className="mb-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="fePassword"
                    name="password"
                    placeholder="Password"
                    value={formState.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row form>
              {/* Location */}
              <Col lg={6} className="form-group">
                <Form.Group className="mb-2">
                  <Form.Label>General Location</Form.Label>
                  <Form.Control
                    id="feLocation"
                    placeholder="Location"
                    name="location"
                    value={formState.location}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className="form-group">
                <Form.Group className="mb-2">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control 
                    type="file"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row form>
              {/* Description */}
              <Col md="12" className="form-group">
                <Form.Group className="mb-2">
                  <Form.Label>Profile Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                      onChange={handleChange}
                    />
                  </Form.Group>
              </Col>
            </Row>
            <Button
              className="btn btn-primary w-100 btn-block mt-4"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Update Profile
            </Button>
        </Form>
        </Card.Body>
        
        {error && (
        <Card.Footer className="my-2 mx-2 p-4 bg-danger text-white">
          {error.message}
        </Card.Footer>
      )}
      
        </Card>
      )}
    </Col>
    );
  };
  
export default SettingsUpdate;