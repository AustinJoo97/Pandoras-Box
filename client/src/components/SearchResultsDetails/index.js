import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Col, Card, Row, Button} from "react-bootstrap";
import '../../styles/SearchPage.css';


const PopulateSearchResults = ({ queryResults, queryType }) => {
    // some management of how results will display here

    const ShowResults = ({ type }) => {

        // if type "artist", return artist cards
        if (type === "artist") {

            return queryResults.artists.items.map(artist => (
                <Col lg="3" key={artist.id} className="albumCard">
                    <Link to={`/artist?q=${artist.id}`} className="text-decoration-none">
                        <Card className="mx-3 cardCarousel">
                            <Card.Body className="albumBody text-center ">
                                <h6>{artist.type}</h6>
                                <div className="embed-responsive">
                                    <Card.Img
                                            className="card-img-top embed-responsive-item"
                                            src={artist.images[0].url}
                                            alt="hi"
                                        />
                                </div>
                                <h4>{artist.name}</h4>
                                <p>{artist.popularity}/100</p>
                                <p>{artist.followers.total} Followers</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))

            // if type "album", return album cards
        } else if (type === "album") {

            return queryResults.items.map(album => (
                 <Col lg="3" key={album.id} className="albumCard">
                    <Link to={`/album?q=${album.id}`} className="text-decoration-none">
                        <Card className="mx-3 cardCarousel">
                            <Card.Body className="albumBody text-center">
                                <div className="embed-responsive">
                                    <Card.Img
                                        className="card-img-top embed-responsive-item"
                                        src={album.images[0].url}
                                        alt="hi"
                                    />
                                </div>
                                <h3 className="">{album.name}</h3>
                                <p>Year released: {album.release_date}</p>
                                <p>Total tracks: {album.total_tracks}</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                
            ))

        } else {
            return (
                <h2>genre search WIP</h2>
            )
        }

    }

    return (

        <Row className="justify-content-start">
            <ShowResults type={queryType} />
        </Row>
    )
}

export default PopulateSearchResults;