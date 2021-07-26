import React from 'react';

import Auth from '../../utils/auth';

import {
    Card,
    ListGroup,
    ListGroupItem,
    Col,
    Button,
} from "react-bootstrap";


const UserSettings = ({ userDetails }) => {

    return (
    <Col lg={8} className="">
        <Card small className="ml-5 mr-5 mt-5 mb-4 pt-3">
          <Card.Header className="border-bottom text-center">
            <div className="mb-3 mx-auto">
              <img
                className="rounded-circle"
                src={userDetails.avatar}
                alt={Auth.getProfile().data.username}
                width="110"
              />
            </div>
            <h4 className="mb-0">{Auth.getProfile().data.username}</h4>
            <span className="text-muted d-block mb-2">{userDetails.location}</span>
          </Card.Header>
          <Card.Body flush>
            <ListGroupItem className="px-4">
              <div className="progress-wrapper">
                <strong className="text-muted d-block mb-2">
                  <Col>
                  {userDetails.name}
                  </Col>
                  <Col>
                  <p>
                    Email :   {userDetails.email}
                  </p>
                  
                  </Col>
                </strong>
              </div>
            </ListGroupItem>
            <ListGroupItem className="p-4">
              <strong className="text-muted d-block mb-2">
                {userDetails.metaTitle}
              </strong>
              <span>{userDetails.metaValue}</span>
            </ListGroupItem>
          </Card.Body >
        </Card>
    </Col>
    );
  };

  //test information
UserSettings.defaultProps = {
    userDetails: {
      name: "Brandon Ford",
      email: "brandonford617@yahoo.com",
      avatar: "https://via.placeholder.com/150",
      location: "Ashburn Va",
      performanceReportTitle: "Workload",
      performanceReportValue: 74,
      metaTitle: "Description",
      metaValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
    }
  };
  
export default UserSettings;
  