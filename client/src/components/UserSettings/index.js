import React from 'react';

import {
    Card,
    ListGroup,
    ListGroupItem,
    Col,
    Button,
} from "react-bootstrap";


const UserSettings = ({ userDetails }) => {

    return (
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
    );
  };

  //test information
UserSettings.defaultProps = {
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
  
export default UserSettings;
  