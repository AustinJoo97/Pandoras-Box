import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Col, Card} from "react-bootstrap";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../../styles/Carousel.css';
import '../../styles/SearchPage.css';

const PopulateCarousel = ({ queryResults, queryType , queryTitle }) => {
    // some management of how results will display here

    const ShowResults = ({ type }) => {

        const settingsMin = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        const settingsGen = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1
        };

        const settingsComments = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1
        };

        // if type "artist", return artist cards
        if (type === "min") {

            return (
                <Container>
                  <Col>
                      <h3 className="p-3 pl-2 pt-5  float-right" >{queryTitle}</h3>
                      <Slider {...settingsMin}> 
                      {queryResults &&
                      queryResults.items.map((album) => (
                          <Col lg="3" key={album.id}  className="albumCard">
                              <Link to={`/album?q=${album.id}`} className="text-decoration-none">
                                  <Card className="mx-3 cardCarousel ">
                                      <Card.Body className="p-0 albumBody">
                                          <div className="embed-responsive">
                                          <Card.Img
                                            className="card-img-top embed-responsive-item"
                                            variant="Top"
                                            name="songName"
                                            src={album.images[0].url}
                                          />
                                          </div>
                                          <p>
                                          {album.name}
                                          </p>
                                          <p>Year released: {album.release_date}</p>
                                          <p>Total tracks: {album.total_tracks}</p>
                                      </Card.Body>
                                  </Card>
                              </Link>
                          </Col>
                          ))}
                      </Slider>
                  </Col>
                </Container>
            )

            // if type "album", return album cards
        } else if (type === "general") {

            return (
                <Container>
                  <Col>
                      <h3 className="p-3 pl-2 pt-5  float-right" >{queryTitle}</h3>
                      <Slider {...settingsGen}> 
                      {queryResults &&
                      queryResults.items.map((album) => (
                          <Col lg="3" key={album.id}  className="albumCard">
                              <Link to={`/album?q=${album.id}`} className="text-decoration-none">
                                  <Card className="mx-3 cardCarousel ">
                                      <Card.Body className="p-0 albumBody">
                                          <div className="embed-responsive">
                                          <Card.Img
                                            className="card-img-top embed-responsive-item"
                                            variant="Top"
                                            name="songName"
                                            src={album.images[0].url}
                                          />
                                          </div>
                                          <p>
                                          {album.name}
                                          </p>
                                          <p>Year released: {album.release_date}</p>
                                          <p>Total tracks: {album.total_tracks}</p>
                                      </Card.Body>
                                  </Card>
                              </Link>
                          </Col>
                          ))}
                      </Slider>
                  </Col>
                </Container>
            )

            // if type "album", return album cards
        } else if (type === "comments") {

            return (
                <Container>
                  <Col>
                      <h3 className="p-3 pl-2 pt-5  float-right" >{queryTitle}</h3>
                      <Slider {...settingsComments}> 
                      {queryResults &&
                      queryResults.items.map((album) => (
                          <Col lg="3" key={album.id}  className="albumCard">
                              <Link to={`/album?q=${album.id}`} className="text-decoration-none">
                                  <Card className="mx-3 cardCarousel ">
                                      <Card.Body className="p-0 albumBody">
                                          <div className="embed-responsive">
                                          <Card.Img
                                            className="card-img-top embed-responsive-item"
                                            variant="Top"
                                            name="songName"
                                            src={album.images[0].url}
                                          />
                                          </div>
                                          <p>
                                          {album.name}
                                          </p>
                                          <p>Year released: {album.release_date}</p>
                                          <p>Total tracks: {album.total_tracks}</p>
                                      </Card.Body>
                                  </Card>
                              </Link>
                          </Col>
                          ))}
                      </Slider>
                  </Col>
                </Container>
            )

        } else {
            return (
                <h2>genre search WIP</h2>
            )
        }

    }

    return (
        <ShowResults type={queryType} />
    )
}

export default PopulateCarousel;