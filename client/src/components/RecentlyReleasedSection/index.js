import React from 'react';
import { Container, Col, Card} from "react-bootstrap";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//settings var for the slider
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };

    const RecentlyReleased = ({ songs = [] }) => {

        if (!songs.length) {
          return (
          <Container>
            <Col>
              <h3
                className="p-5 float-right"
              >
              Recently Releases Tracks !
              </h3>
              <Slider {...settings}> 
                  <Card>
                    <Card.Img
                      variant="Top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>This is test info</Card.Body>
                  </Card>
                  <Card>
                    <Card.Img
                      variant="Top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>This is test info</Card.Body>
                  </Card>
                  <Card>
                    <Card.Img
                      variant="Top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>This is test info</Card.Body>
                  </Card>
                  <Card>
                    <Card.Img
                      variant="Top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>This is test info</Card.Body>
                  </Card>
                  <Card>
                    <Card.Img
                      variant="Top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>This is test info</Card.Body>
                  </Card>
                  <Card>
                    <Card.Img
                      variant="Top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>This is test info</Card.Body>
                  </Card>
                  <Card>
                    <Card.Img
                      variant="Top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>This is test info</Card.Body>
                  </Card>
                  <Card>
                    <Card.Img
                      variant="Top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>This is test info</Card.Body>
                  </Card>
                  <Card>
                    <Card.Img
                      variant="Top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>This is test info</Card.Body>
                  </Card>
              </Slider>
            </Col>
          </Container>
          )
        }

        return (
          <Container>
            <h3
              className="p-5 display-inline-block"
              style={{ borderBottom: '1px dotted #1a1a1a' }}
            >
            Recently Releases Tracks !
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

export default RecentlyReleased;
