import React from 'react';
import { Container, Row} from "react-bootstrap";
import PopulateSearchResults from '../components/SearchResultsDetails';

import { artistAlbumsSampleData, artistSearchSampleData } from '../utils/sampleData';

const albumsQuery = artistAlbumsSampleData;
const artistsQuery = artistSearchSampleData;


const ShowSearchScreen = (props) => {

  // get query information from URL
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get('q')
  const searchType = params.get('type');


  // take searchQuery and type to fetch api based on query
  //
  // store queryResults as response variable, pass into populate seach results component
  const response = artistsQuery;


  return (
    <Container>
      <h2 className="show-query">Search results for {searchQuery}</h2>
      <Row id="searchResults" className="">
        <PopulateSearchResults queryResults={response} queryType={searchType} />
        {/* <p>{query}</p> */}
        {/* <p>{type}</p> */}
      </Row>
    </Container>
  )
}

export default ShowSearchScreen;