import React from 'react';
import { Container, Col, Card} from "react-bootstrap";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../../styles/Carousel.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };

    const CreateCarousel = ({
        albums,
        title,
        showTitle = true,
      }) => {
        if (!albums.length) {
            return (
            <Container>
              <Col>
                <h3
                  className="p-3 pl-2 pt-5  float-right"
                >
                Test Title
                </h3>
                  <Slider {...settings}> 
                      <Col>
                          <Card className="mx-3 cardCarousel">
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
                                  Song Title
                                  </p>
                              </Card.Footer>
                          </Card>
                      </Col>
                      <Col>
                          <Card className="mx-3 cardCarousel">
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
                                  Song Title
                                  </p>
                              </Card.Footer>
                          </Card>
                      </Col>
                      <Col>
                          <Card className="mx-3 cardCarousel">
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
                                  Song Title
                                  </p>
                              </Card.Footer>
                          </Card>
                      </Col>
                      <Col>
                          <Card className="mx-3 cardCarousel">
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
                                  Song Title
                                  </p>
                              </Card.Footer>
                          </Card>
                      </Col>
                      <Col>
                          <Card className="mx-3 cardCarousel">
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
                                  Song Title
                                  </p>
                              </Card.Footer>
                          </Card>
                      </Col>
                      <Col>
                          <Card className="mx-3 cardCarousel">
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
                                  Song Title
                                  </p>
                              </Card.Footer>
                          </Card>
                      </Col>
                      <Col>
                          <Card className="mx-3 cardCarousel">
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
                                  Song Title
                                  </p>
                              </Card.Footer>
                          </Card>
                      </Col>
                      <Col>
                          <Card className="mx-3 cardCarousel">
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
                                  Song Title
                                  </p>
                              </Card.Footer>
                          </Card>
                      </Col>
                      <Col>
                          <Card className="mx-3 cardCarousel">
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
                                  Song Title
                                  </p>
                              </Card.Footer>
                          </Card>
                      </Col>
                      <Col>
                          <Card className="mx-3 cardCarousel">
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
                                  Song Title
                                  </p>
                              </Card.Footer>
                          </Card>
                      </Col>
                      <Col>
                          <Card className="mx-3 cardCarousel">
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
                                  Song Title
                                  </p>
                              </Card.Footer>
                          </Card>
                      </Col>
                      <Col>
                          <Card className="mx-3 cardCarousel">
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
                                  <p className="">
                                  Song Title
                                  </p>
                              </Card.Footer>
                          </Card>
                      </Col>
                  </Slider>
              </Col>
            </Container>
            )
          }


    return (
        <Container>
        <Col>
        {showTitle && <h3 className="p-3 pl-2 pt-5  float-right" >{title}</h3>}
            <Slider {...settings}> 
            {albums &&
            albums.map((album) => (
                <Col>
                    <Card className="mx-3">
                        <Card.Body className="p-0">
                            <div className="embed-responsive">
                            <Card.Img
                              className="card-img-top embed-responsive-item"
                              variant="Top"
                              name="songName"
                              src={album.image}
                            />
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <p>
                            {album.name}
                            </p>
                            <p>
                            {album.genre}
                            </p>
                        </Card.Footer>
                    </Card>
                </Col>
                ))}
            </Slider>
        </Col>
      </Container>
    )
}

export default CreateCarousel;