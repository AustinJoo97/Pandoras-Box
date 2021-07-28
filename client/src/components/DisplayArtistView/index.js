import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Col, Card, Row} from "react-bootstrap";
import '../../styles/ArtistPage.css';


const ViewArtist = ({ artist }) => {

    // map through all albums and create card for them
    const ShowAlbums = () => {
        if (artist.albums.length) {
            return artist.albums.map(album => (
                <Col lg="3" className="albumCard">
                    <Link to={`/album?q=${album.id}`} className="text-decoration-none">
                        <Card className="mx-3 cardCarousel">
                            <Card.Body className="albumBody">
                                <div className="embed-responsive">
                                    <Card.Img
                                        className="card-img-top embed-responsive-item"
                                        src={album.img}
                                    />
                                </div>
                                <h4 className="">{album.title}</h4>
                                <span> - {album.year}</span>
                                <p>Album popularity: {album.popularity}</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))
        }

        return <p>nothing found here</p>;
    }

    
    return(
        <Container id="artist">
            <Row className="">

                {/* artist info */}
                <Col lg="4" id="artistProfile" className="bg-lightblue mb-5">
                    <Card  className="bg-lightblue artistCard">
                        <Card.Img
                            src={artist.img}
                            alt="the beebles"
                        />
                        <Card.Body className="artistBody">
                            <h2 className="display-3 ">{artist.artistName}</h2>
                            <p className="text-muted"> {artist.bio}</p>
                            <p>Artist popularity: {artist.popularity}</p>
                        </Card.Body>
                    </Card>
                </Col>

                {/* artist discography */}
                <Col className="col-8 discography">
                    <h2>{artist.artistName}'s discography</h2>
                    <Row className="">
                        <ShowAlbums />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewArtist;