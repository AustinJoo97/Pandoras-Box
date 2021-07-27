import React from 'react';
import { Container, Col, Card} from "react-bootstrap";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//settings var for the slider
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

    const YourRecentComments = ({ songs = [] }) => {

        if (!songs.length) {
          return (
            <Container>
            <Col>
              <h3
                className="p-3 pl-2 pt-5  float-right"
              >
              Your Recent Comments !
              </h3>
                <Slider {...settings}>    
                    <Col>    
                        <Card className="mx-3 my-3 border-0">
                            <Card>
                                <Card.Body className="p-0">
                                    <div className="embed-responsive">
                                    <Card.Img
                                      className="card-img-top embed-responsive-item"
                                      variant="Top"
                                      name="songName"
                                      src="https://via.placeholder.com/150"
                                    />
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <p>
                                    Comment Title
                                    </p>
                                </Card.Footer>
                            </Card>
                            <Card className="mt-5">
                                <Card.Body className="p-0">
                                    <div className="embed-responsive">
                                    <Card.Img
                                      className="card-img-top embed-responsive-item"
                                      variant="Top"
                                      name="songName"
                                      src="https://via.placeholder.com/150"
                                    />
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <p>
                                    Comment Title
                                    </p>
                                </Card.Footer>
                            </Card>
                        </Card>
                    </Col>
                    <Col>    
                        <Card className="mx-3 my-3 border-0">
                            <Card>
                                <Card.Body className="p-0">
                                    <div className="embed-responsive">
                                    <Card.Img
                                      className="card-img-top embed-responsive-item"
                                      variant="Top"
                                      name="songName"
                                      src="https://via.placeholder.com/150"
                                    />
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <p>
                                    Comment Title
                                    </p>
                                </Card.Footer>
                            </Card>
                            <Card className="mt-5">
                                <Card.Body className="p-0">
                                    <div className="embed-responsive">
                                    <Card.Img
                                      className="card-img-top embed-responsive-item"
                                      variant="Top"
                                      name="songName"
                                      src="https://via.placeholder.com/150"
                                    />
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <p>
                                    Comment Title
                                    </p>
                                </Card.Footer>
                            </Card>
                        </Card>
                    </Col>
                </Slider>
            </Col>
            </Container>
          )
        }
        //return will be changed for recent comment once data comes in 
        return (
          <Container>
            <h3
              className="p-5 display-inline-block"
              style={{ borderBottom: '1px dotted #1a1a1a' }}
            >
            Based On Your Favorites !
            </h3>
            <Slider {...settings}>
                {songs.map((song) => (
                  <Card key={song._id}>
                  <Card.Img
                    variant="Top"
                    src={song.poster_path}
                  />
                  <Card.Body>
                    {song.title}
                    {song.info}
                  </Card.Body>
                </Card>
                ))}
            </Slider>
          </Container>
        );
      };

export default YourRecentComments;
