import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import YourRecentComments from '../components/YourRecentComments';
import UserSettings from '../components/UserSettings';
import PopulateCarousel from '../components/Carousel';

import { artistAlbumsSampleData, artistSearchSampleData } from '../utils/sampleData';
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Container
} from "react-bootstrap";

import { QUERY_USER, QUERY_ME, QUERY_USER_COMMENTS, QUERY_FAVORITE_ALBUMS } from '../utils/queries';
import { UPDATE_USER, DELETE_FAVORITE } from '../utils/mutations';
import Auth from '../utils/auth';

const albumsQuery = artistAlbumsSampleData;

const Profile = ({ userDetails }) => {
  const response = albumsQuery;
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const { loadingUserComments, userCommentData } = useQuery(QUERY_USER_COMMENTS);

  const { loadingFavoriteAlbums, favoriteAlbumsData } = useQuery(QUERY_FAVORITE_ALBUMS);

  const [ updateUser, { error }] = useMutation(UPDATE_USER);

  const [ deleteFavorite, { error } ] = useMutation(DELETE_FAVORITE);

  // redirect to personal profile page if username is yours
  const user = data?.me || data?.user || {};

  let userComments;
  loadingUserComments ? console.log('Still loading user comments!') : userComments = userCommentData;

  let favoriteAlbums;
  loadingFavoriteAlbums ? console.log('Still loading favorite!') : favoriteAlbums = favoriteAlbumsData;

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading || loadingUserComments || loadingFavoriteAlbums) {
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
    <Container>
      
      <Card className="mb-4 bg-lightblue-dull">
        <Card.Header className="border-bottom">
          <h6 className="m-0">{user.username}'s Profile</h6>
        </Card.Header>
        <Card.Body>
          <ListGroup >
            <Row>
              <Col xs={2} md={4} lg={6} className="">
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
                      <ListGroupItem className="px-4 ">
                        <div className="progress-wrapper">
                          <strong className="text-muted d-block mb-2">
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
                      </ListGroupItem>
                      <ListGroupItem className="p-4">
                        <h3 className="text-muted d-block mb-2">
                          {userDetails.metaTitle}
                        </h3>
                        <h3>{userDetails.metaValue}</h3>
                      </ListGroupItem>
                    </Card.Body >
                  </Card>
              </Col>
              <Col xs={2} md={4} lg={6}>
              <PopulateCarousel queryResults={response} queryType="min" queryTitle="Your Favorite Al"/>
              </Col>
              <YourRecentComments />
            </Row>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

Profile.defaultProps = {
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

export default Profile;
