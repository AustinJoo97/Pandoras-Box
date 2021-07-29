import React from 'react';

import Auth from '../../utils/auth';

import {
    Card,
    ListGroupItem,
    Col,
} from "react-bootstrap";


const UserSettings = ({ userDetails }) => {

    return (
    <Col lg={8} className="">
      <Card className="ml-5 mr-5 mt-5 mb-4 pt-3 settingsCard">
        <Card.Header className="text-center  settingsHeader">
          <div className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src={userDetails.avatar}
              alt={Auth.getProfile().data.username}
              width="110"
            />
          </div>
          <h4 className="mb-0">{Auth.getProfile().data.username}</h4>
          <span className="d-block mb-2">{userDetails.location}</span>
        </Card.Header>
        <Card.Body className="settingsBody">
            <div className="progress-wrapper">
              <strong className="text-muted d-block mb-2 ">
                <Col>
                <h3>
                  Name :  {userDetails.name}
                </h3>
                </Col>
                <Col>
                <h3>
                  Email :  {userDetails.email}
                </h3>
                </Col>
              </strong>
            </div>
            <h3 className="text-muted d-block mb-2">
              {userDetails.metaTitle}
            </h3>
            <h3>{userDetails.metaValue}</h3>
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


  // UserSettings.defaultProps = {
  //   userDetails: {
  //     name: Auth.getProfile().data.name,
  //     email: Auth.getProfile().data.email,
  //     avatar: "https://via.placeholder.com/150",
  //     location: Auth.getProfile().data.location,
  //     metaTitle: "Description",
  //     metaValue:
  //     Auth.getProfile().data.bio
  //   }
  // };
  
export default UserSettings;
  