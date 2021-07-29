import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Col, Card } from "react-bootstrap";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../../styles/Carousel.css';
import '../../styles/SearchPage.css';

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

const PopulateCarousel = ({ queryResults, queryTitle }) => {
    // some management of how results will display here

    return (
        <Container>
            <Col>
                <h3 className="p-3 pl-2 pt-5  float-right" >{queryTitle}</h3>
                <Slider {...settingsGen}>
                    {queryResults &&
                        queryResults.map((album) => (
                            <Col lg="3" key={album.albumId} className="albumCard">
                                <Card className="mx-3 cardCarousel ">
                                    <Card.Body className="p-0 albumBody">
                                        <div className="embed-responsive">
                                            <Link to={`/album?q=${album.albumId}`} className="text-decoration-none">
                                                <Card.Img
                                                    className="card-img-top embed-responsive-item"
                                                    variant="Top"
                                                    name={album.albumId}
                                                    src={album.albumImg}
                                                />
                                            </Link>
                                        </div>
                                        <Link to={`/artist?q=${album.artistId}`} className="text-decoration-none">
                                            <p>{album.artistName}</p>
                                        </Link>
                                        <p>{album.albumName}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Slider>
            </Col>
        </Container>
    )

}

export default PopulateCarousel;


